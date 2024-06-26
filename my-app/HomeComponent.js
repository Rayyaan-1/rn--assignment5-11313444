import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import homeImage from './assets/home.png'; // Import the home image

const HomeComponent = () => {
  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.homeImage}
        source={homeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  homeImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default HomeComponent;
