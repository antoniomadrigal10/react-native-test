import React from 'react';
import {View, Text} from 'react-native';

const CharacterDetails = ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Species: {item.species}</Text>
      <Text>Gender: {item.gender}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );
};

export default CharacterDetails;
