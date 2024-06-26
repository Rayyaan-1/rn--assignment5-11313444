import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import batteryImage from './assets/battery.png'; 
import profileImage from './assets/profile.png'; 
import searchImage from './assets/search.png'; 
import cardImage from './assets/Card.png'; 
import sendImage from './assets/send.png'; 
import loanImage from './assets/loan.png';
import topUpImage from './assets/topUp.png'; 
import appleImage from './assets/apple.png';
import HomeComponent from './HomeComponent'; 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <Image
          style={styles.statusImage}
          source={batteryImage}
        />
      </View>
      <View style={[styles.profileContainer, { marginTop: -190,marginLeft: -140  }]}>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <Image
          style={styles.searchImage}
          source={searchImage}
        />
      </View>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={cardImage}
        />
        <View style={styles.imageRow}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.roundedImage}
              source={sendImage}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.roundedImage}
              source={loanImage}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.roundedImage}
              source={topUpImage}
            />
          </View>
        </View>
        <Text style={styles.transactionText}>Transaction</Text>
        <View style={styles.appleContainer}>
          <Image
            style={styles.roundedImage}
            source={appleImage}
          />
        </View>
      </View>
      {/* Include HomeComponent */}
      <HomeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  statusBar: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
  },
  statusImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0, 
    marginBottom: 10,
    paddingLeft: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#000',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  searchImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cardContainer: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  imageRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  imageContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 70,
  },
  roundedImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
  },
  transactionText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  appleContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#d3d3d3',
  },
});

