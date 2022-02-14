import React, {FC, useState, useEffect, useCallback} from 'react';

import {Alert} from 'react-native';
import {useFormik} from 'formik';

import useStore from '../../store';
import {IRadioGroupValues} from '../../proptypes/forms.types';
import usePreventingGoingBack from '../../hooks/usePreventingGoingBack';
import FilterForm from '../../components/filters/FilterForm';
import {findIndex} from 'lodash';

const Filters: FC = () => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const {rate, sortBy} = useStore(state => state.filter);
  const handleFilter = useStore(state => state.handleFilter);

  // const {goBack} = useNavigation();
  usePreventingGoingBack(hasUnsavedChanges);

  const form = useFormik({
    initialValues: {
      rate: 0,
      sortBy: 'name',
      sortValues: [
        {key: 'name', name: 'Name', value: 'name', checked: true},
        {key: 'price', name: 'Price', value: 'price', checked: false},
        {key: 'rate', name: 'Rate', value: 'rate', checked: false},
        {
          key: 'downloads',
          name: 'Downloads',
          value: 'downloads',
          checked: false,
        },
      ],
    },
    onSubmit: items => {
      isSubmitting && setIsloading(true);
      handleFilter(items);
      setHasUnsavedChanges(false);

      setTimeout(() => {
        setIsloading(false);
        // goBack();
      }, 1000);
    },
  });

  const {values, setFieldValue, isSubmitting} = form;

  useEffect(() => {
    const sortValues = useStore.getState().sortValues;
    setFieldValue('rate', rate);
    setFieldValue('sortBy', sortBy);

    sortValues.map((props, index) => {
      setFieldValue(`sortValues[${index}]`, props);
    });
  }, [rate, sortBy, setFieldValue]);

  const onSort = useCallback(
    (item: IRadioGroupValues, idx: number) => {
      const sortValyesCopy = [...values.sortValues];
      const prevIndex = findIndex(sortValyesCopy, e => e.checked === true);

      setFieldValue('sortBy', item.value);
      setFieldValue(`sortValues[${prevIndex}].checked`, false);
      setFieldValue(`sortValues[${idx}].checked`, true);
      setHasUnsavedChanges(true);
    },
    [values.sortValues, setFieldValue],
  );

  const onFinishRating = useCallback(
    (count: number) => {
      if (count === values.rate) {
        return null;
      }

      setFieldValue('rate', count);
      setHasUnsavedChanges(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values.rate],
  );

  const onReset = () => {
    Alert.alert('Alert dialog', 'Are you sure you want to reset the filter', [
      {
        text: 'No',
        onPress: () => '',
        style: 'cancel',
      },
      {
        text: 'Reset',
        onPress: () => {
          const sortsValuesCopy = [...values.sortValues];
          sortsValuesCopy.map((_, index) => {
            if (index === 0) {
              return setFieldValue(`sortValues[${index}].checked`, true);
            }
            return setFieldValue(`sortValues[${index}].checked`, false);
          });
          setFieldValue('rate', 0);
          setFieldValue('sortBy', 'name');
        },
      },
    ]);
  };

  return (
    <FilterForm
      form={form}
      isLoading={isLoading}
      onSort={onSort}
      onReset={onReset}
      onRating={onFinishRating}
    />
  );
};

export default Filters;
