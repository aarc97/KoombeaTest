import React, {FC, memo, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import styled from 'styled-components/native';

import FilterActions from '../../components/filters/FilterActions/FilterActions';
import RadioGroup from '../../components/forms/RadioGroup';
import {Colors, Spacing, Typography} from '../../constants';

const values = [
  {key: 'name', name: 'Name', value: 'name'},
  {key: 'price', name: 'Price', value: 'price'},
  {key: 'rate', name: 'Rate', value: 'rate'},
  {key: 'downloads', name: 'Downloads', value: 'downloads'},
];

const Filters: FC = () => {
  const [count, setCount] = useState(0);

  const onSort = (item: any, i: number) => {
    console.log('onsort ==>', item);
    console.log('onsort i ==>', i);
  };

  const onFinishRating = (pCount: number) => {
    if (pCount === count) {
      return null;
    }

    setCount(pCount);
  };

  return (
    <Container>
      <Main>
        <Group header="Sort by">
          <RadioGroup values={values} onPress={onSort} />
        </Group>
        <Group header="Filter" style={styles.rating}>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={0}
            onFinishRating={onFinishRating}
          />
        </Group>
      </Main>

      <FilterActions />
    </Container>
  );
};

export default Filters;

interface IGroup {
  children: React.ReactNode;
  header: string;
}

const Group: FC<IGroup> = memo(({children, header = '', ...rest}) => {
  return (
    <GroupContainer {...rest}>
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
