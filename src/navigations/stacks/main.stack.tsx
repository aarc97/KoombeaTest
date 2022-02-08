import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Fighters, {Details} from '../../screens/Fighters';
import Filters from '../../screens/Filters';
import {Icon} from 'react-native-elements';
import {Colors} from '../../constants';
import {useNavigation} from '@react-navigation/core';
import {IFighter} from '../../proptypes/fighter.types';
import type {RouteProp} from '@react-navigation/native';

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
          headerRight: hProps => (
            <FilterButton onPress={onFilters} {...hProps} />
          ),
        }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        options={{
          headerLeft: props => <BackButton onPress={goBack} {...props} />,
        }}
        name="Filters"
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
      {...props}
    />
  );
};

export default MainStack;
