import React, {FC, memo, useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import styled from 'styled-components/native';
import {useFormik} from 'formik';

import FilterActions from '../../components/filters/FilterActions/FilterActions';
import RadioGroup from '../../components/forms/RadioGroup';
import {Colors, Spacing, Typography} from '../../constants';
import useStore, {initialSortValues} from '../../store';
import {useNavigation} from '@react-navigation/core';
import {handleCheckOnSortValues} from '../../utils/fighters.utils';
import {IRadioGroupValues} from '../../proptypes/forms.types';

const Filters: FC = () => {
  const [isLoading, setIsloading] = useState(false);
  const {goBack} = useNavigation();
  const handleFilter = useStore(state => state.handleFilter);

  const {rate, sortBy} = useStore(state => state.filter);
  const sortValues = useStore(state => state.sortValues);

  const {values, handleSubmit, setFieldValue, isSubmitting, resetForm} =
    useFormik({
      initialValues: {
        rate: 0,
        sortBy: 'name',
        sortValues: initialSortValues,
      },
      onSubmit: items => {
        isSubmitting && setIsloading(true);
        handleFilter(items);

        setTimeout(() => {
          setIsloading(false);
          goBack();
        }, 1000);
      },
    });

  useEffect(() => {
    setFieldValue('rate', rate);
    setFieldValue('sortBy', sortBy);
    setFieldValue('sortValues', sortValues);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate, sortBy]);

  const onSort = (item: IRadioGroupValues, idx: number) => {
    const newSortValues = handleCheckOnSortValues(values.sortValues, idx);
    setFieldValue('sortBy', item.value);
    setFieldValue('sortValues', newSortValues);
  };

  const onFinishRating = (pCount: number) => {
    if (pCount === values.rate) {
      return null;
    }
    setFieldValue('rate', pCount);
  };

  const onReset = () => {
    Alert.alert('Alert dialog', 'Are you sure you want to reset the filter', [
      {
        text: 'No',
        onPress: () => '',
        style: 'cancel',
      },
      {text: 'Reset', onPress: () => resetForm()},
    ]);
  };

  return (
    <Container>
      <Main>
        <Group header="Sort by">
          <RadioGroup values={values.sortValues} onPress={onSort} />
        </Group>
        <Group header="Filter" style={styles.rating}>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={values.rate}
            onFinishRating={onFinishRating}
          />
        </Group>
      </Main>
      {isLoading ? <ActivityIndicator size="large" /> : null}

      <FilterActions onApply={handleSubmit} onReset={onReset} />
    </Container>
  );
};

export default Filters;

interface IGroup {
  children: React.ReactNode;
  header: string;
  style?: ViewStyle;
}

const Group: FC<IGroup> = memo(({children, header = '', style, ...rest}) => {
  return (
    <GroupContainer style={style} {...rest}>
      <Header>{header}</Header>
      {children}
    </GroupContainer>
  );
});

const GroupContainer = styled.View`
  padding: ${Spacing.SCALE_16}px;
  background-color: ${Colors.WHITE};
  elevation: 2;
`;

const Main = styled.View`
  flex: 1;
`;

const Container = Main;

const Header = styled(Text)`
  color: ${Colors.GRAY};
  font-family: ${Typography.FONT_MEDIUM.fontFamily};
  margin-bottom: ${Spacing.SCALE_12}px;
`;

const styles = StyleSheet.create({
  rating: {
    marginTop: Spacing.SCALE_16,
    paddingBottom: Spacing.SCALE_32,
  },
});
