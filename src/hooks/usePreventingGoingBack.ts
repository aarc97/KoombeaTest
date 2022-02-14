import {useNavigation} from '@react-navigation/core';
import {Alert} from 'react-native';
import React from 'react';

const usePreventingGoingBack = (hasUnsavedChanges: boolean) => {
  const {addListener, dispatch} = useNavigation();

  React.useEffect(
    () =>
      addListener('beforeRemove', e => {
        if (!hasUnsavedChanges) {
          return;
        }

        e.preventDefault();

        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              onPress: () => setTimeout(() => dispatch(e.data.action), 500),
            },
          ],
        );
      }),
    [addListener, dispatch, hasUnsavedChanges],
  );
};

export default usePreventingGoingBack;
