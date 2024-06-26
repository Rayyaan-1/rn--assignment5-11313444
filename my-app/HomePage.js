import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import batteryImage from './assets/battery.png'; // Import the battery image
import profileImage from './assets/profile.png'; // Import the profile image

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <Image
          style={styles.statusImage}
          source={batteryImage}
        />
      </View>
      <Image
        style={styles.profileImage}
        source={profileImage}
      />
      <Text style={styles.mainText}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60, // Adjust padding to avoid content overlap with status bar
  },
  statusBar: {
    position: 'absolute',
    top: 20, // Adjust the vertical position
    left: 10, // Adjust the left position
    right: 10, // Ensure the right padding
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between date and image
    alignItems: 'center', // Align items vertically in the center
    backgroundColor: '#fff',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  statusImage: {
    width: 100, // Increased width of the image
    height: 50, // Increased height of the image
    resizeMode: 'contain',
  },
  profileImage: {
    position: 'absolute',
    top: 10, // Position below the status bar with some space
    left: 20, // Add space between the left side and the profile image
    width: 100, // Set the width of the profile image
    height: 100, // Set the height of the profile image
    resizeMode: 'contain',
  },
  mainText: {
    marginTop: 150, // Ensure main text is not overlapped by profile image
    textAlign: 'center',
  },
});

