import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Character = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.textName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  textName: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Character;
