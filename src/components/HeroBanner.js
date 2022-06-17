import React from 'react'
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native'
import COLORS from '../utils/colors';
import { theme } from '../utils/theme'

const brandedBanner = require("../assets/imgs/header.jpg");
const unBrandedBanner = require("../assets/imgs/profilebg.jpg");

const ProfileHeader = () => (
  <View style={styles.header}>
    <View style={styles.profilepicWrap}>
      <Image style={styles.profilepic} source={require('../assets/imgs/avatar.jpg')} />
    </View>
    <Text style={styles.name}>Joe Doe</Text>
    <Text style={styles.pos}>GOAL: Fat Loss</Text>
  </View>
);

export default function HeroBanner({branded, profilePic}) {
  return(
    <View style={styles.container}>
      <ImageBackground style={{width: '100%', height: '100%' }} source={branded? brandedBanner : unBrandedBanner}>
        { profilePic ? <ProfileHeader /> : <Text>nothing</Text>}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex:1,
    alignItems: 'center',
    padding:10,
  },
  profilepicWrap: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 10,
  },
  profilepic: {
    flex:1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  name: {
    marginTop: 0,
    fontSize: 22,
    color: COLORS.brand,
  },
  pos: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '300'
  }
})