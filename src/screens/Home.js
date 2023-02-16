import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';
import CharacterList from '../components/CharacterList';

const Home = () => {
  const {data} = useFetch();

  return (
    <View style={styles.container}>
      {data ? (
        <CharacterList list={data} />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
