import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Character from './Character';

const CharacterList = ({list}) => {
  const navigation = useNavigation();
  const navigateTo = item => {
    navigation.navigate('Details', {item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigateTo(item)}>
              <Character style={styles.item} item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default CharacterList;
