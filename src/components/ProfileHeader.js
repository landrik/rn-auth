import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.profilepicWrap}>
        <Image style={styles.profilepic} source={require('../assets/imgs/avatar.jpg')} />
      </View>
      <Text style={styles.name}>Joe Doe</Text>
      <Text style={styles.pos}>Reduce fat</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{},
  profilepicWrap:{},
  profilepic: {},
  name: {},
  pos: {}
})