import { View, Text, StyleSheet, Image, ImageBackground, useWindowDimensions } from 'react-native'
import React from 'react'
import { theme } from '../utils/theme';

export default OnBoardingItem = ({item}) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground source={item.image} style={[styles.image, { width, height, resizeMode: 'cover'}]}>
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.5)', height, width }}>
          <View style={{flex: 0.7, justifyContent:'flex-end'}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    flex: 1,
    justifyContent: 'center'
  },
  title:{
    fontWeight: '800',
    fontSize: 30,
    marginBottom: 10,
    color: '#493d8a',
    color: theme.colors.brand,
    paddingHorizontal: 20,
  },
  description: {
    fontWeight: '400',
    color: theme.colors.surface,
    paddingHorizontal: 20,
    fontSize: 20,
  },
})