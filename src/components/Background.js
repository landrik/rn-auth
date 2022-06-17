import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../utils/theme'


export default function Background({ noPadding, isBgImage, children }) {
  const image = require("../assets/imgs/background_dot.png");
  const altImage = require("../assets/imgs/bg.jpg");

  return (
    <ImageBackground
      source={isBgImage ? altImage : image }
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={[noPadding ? styles.noPaddedContainer : styles.container ]} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPaddedContainer: {
    flex: 1,
    padding: 0,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})