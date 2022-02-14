import React, {FC, memo} from 'react';

import {StyleSheet, ActivityIndicator} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import styled from 'styled-components/native';

import RadioGroup from '../../forms/RadioGroup';
import {Spacing} from '../../../constants';
import FilterActions from '../FilterActions/FilterActions';
import Group from './GroupContainer';
import {FormikProps} from 'formik';
import {IRadioGroupValues} from '../../../proptypes/forms.types';

const RATING_COUNT = 5;

interface FormValues {
  rate: number;
  sortBy: string;
  sortValues: IRadioGroupValues[];
}

interface FilterForm {
  form: FormikProps<FormValues>;
  isLoading: boolean;
  onSort: (item: IRadioGroupValues, idx: number) => void;
  onReset: () => void;
  onRating: (count: number) => void;
}

const FilterForm: FC<FilterForm> = ({
  form,
  isLoading,
  onSort,
  onReset,
  onRating,
}) => {
  const {values, handleSubmit} = form;

  return (
    <Container>
      <Main>
        <Group header="Sort by">
          <RadioGroup values={values.sortValues} onPress={onSort} />
        </Group>
        <Group header="Filter" style={styles.rating}>
          <AirbnbRating
            showRating={false}
            count={RATING_COUNT}
            defaultRating={values.rate}
            onFinishRating={onRating}
          />
        </Group>
      </Main>
      {isLoading ? <ActivityIndicator size="large" /> : null}
      <FilterActions onApply={handleSubmit} onReset={onReset} />
    </Container>
  );
};

export default memo(FilterForm);

const Main = styled.View`
  flex: 1;
`;

const Container = Main;

const styles = StyleSheet.create({
  rating: {
    marginTop: Spacing.SCALE_16,
    paddingBottom: Spacing.SCALE_32,
  },
});
