import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
      </View>
      <Text style={styles.mainText}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40, // Adjust padding to avoid content overlap with status bar
  },
  statusBar: {
    position: 'absolute',
    top: 20, // Move the status bar down
    left: 10, // Adjust left padding
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  mainText: {
    textAlign: 'center',
  },
});
