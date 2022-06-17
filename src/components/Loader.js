import { StyleSheet, Text, View, ActivityIndicator, useWindowDimensions } from 'react-native'
import React from 'react'
import COLORS from '../utils/colors'

const Loader = ({ visible = false}) => {
  const { height, width} = useWindowDimensions();
  return visible && (
    <View style={[styles.container, { height, width}]}>
      <View style={styles.loader}>
        <ActivityIndicator size='large' color={COLORS.brand} />
        <Text style={{marginRight: 10, fontSize: 18}}>Loading...</Text>
      </View>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    position: 'absolute' ,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center'
  },
  loader:{
    height: 70,
    backgroundColor: COLORS.primary,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  }
})