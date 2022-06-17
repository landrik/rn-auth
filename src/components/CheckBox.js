import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../utils/colors';

export default CheckBox = (props) => {
  const iconName = props.isChecked ? "checkbox-marked" : "checkbox-blank-outline";
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Pressable onPress={props.onPress}>
          <MaterialCommunityIcons 
                  name={iconName} size={24} color={COLORS.brand} />
        </Pressable>
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  checkboxContainer: {
    width: '100%',
    flexDirection: "row",
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginVertical: 2,
    marginHorizontal:5,
    fontSize: 16,
    color: COLORS.black,
    marginLeft: 5,
    fontWeight: "400",
  },
})