import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Fighters, {Details} from '../../screens/Fighters';
import Filters from '../../screens/Filters';
import {Icon} from 'react-native-elements';
import {Colors, IS_ANDROID, Spacing} from '../../constants';
import {useNavigation} from '@react-navigation/core';
import {IFighter} from '../../proptypes/fighter.types';
import type {RouteProp} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

type MainStackParamList = {
  Filters: undefined;
  Fighters: undefined;
  Details: {details: IFighter};
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'Details'>;
export type DetailsScreenNavigationProp = RouteProp<
  MainStackParamList,
  'Details'
>;

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  const {navigate, goBack} = useNavigation<any>();
  const onFilters = () => navigate('Filters');

  return (
    <Stack.Navigator
      initialRouteName="Fighters"
      screenOptions={{
        headerStyle: {backgroundColor: Colors.PRIMARY},
        headerTitleStyle: {color: Colors.WHITE},
      }}>
      <Stack.Screen
        name="Fighters"
        component={Fighters}
        options={{
          headerRight: props => <FilterButton onPress={onFilters} {...props} />,
        }}
      />
      <Stack.Screen
        name="Details"
        options={{
          headerLeft: props => <BackButton onPress={goBack} {...props} />,
        }}
        component={Details}
      />
      <Stack.Screen
        name="Filters"
        options={{
          headerLeft: props => <BackButton onPress={goBack} {...props} />,
        }}
        component={Filters}
      />
    </Stack.Navigator>
  );
};

const FilterButton: FC<any> = props => {
  return (
    <Icon
      name="md-filter-sharp"
      type="ionicon"
      color={Colors.WHITE}
      {...props}
    />
  );
};

const BackButton: FC<any> = props => {
  return (
    <Icon
      name="arrow-back-outline"
      type="ionicon"
      color={Colors.WHITE}
      containerStyle={[styles.backContainer, props.containerStyle]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  backContainer: {
    marginRight: IS_ANDROID ? Spacing.SCALE_12 : 0,
  },
});

export default MainStack;
