import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, Spacing} from '../../constants';
import {capitalize} from 'lodash';
import {useNavigation} from '@react-navigation/core';

const Fighters: FC = () => {
  const {navigate} = useNavigation();
  const info = {
    objectID: '45380ec4-37f6-41c7-8db8-b4607c215db5',
    name: 'Rosalina & Luma',
    universe: 'Mario',
    price: '444',
    popular: true,
    rate: 4,
    downloads: '15313',
    description: 'Ayla',
    created_at: 'Sat Mar 12 2022 08:26:32 GMT-0500 (-05)',
    imageURL: 'https://myapp.koombea.com/smash/6.png',
  };

  const handleOnPress = () => navigate('Details');
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text>Fighters</Text>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors.WHITE,
          padding: Spacing.SCALE_12,
          borderBottomColor: Colors.GRAY_LIGHT,
          borderBottomWidth: 1,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <FastImage
            style={{width: 75, height: 75}}
            source={{
              uri: info.imageURL,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{marginLeft: Spacing.SCALE_12}}>
            <Text style={{marginRight: 12}}>{info.name}</Text>
            <Text>{info.universe}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 12}}>{capitalize('Price:')}</Text>
            <Text>{info.price}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 12}}>Rate:</Text>
            <Text>{info.rate}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 12}}>Downloads:</Text>
            <Text>{info.downloads}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Fighters;
