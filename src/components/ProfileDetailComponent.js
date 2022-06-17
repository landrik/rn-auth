import { StyleSheet, Text, View } from 'react-native'
import React, {useState } from 'react'

import COLORS from '../utils/colors'

export default function ProfileDetailComponent(props) {
  const initialState = {
    sex: 'Male',
    age: 32,
    weight: 90,
    height: 183,
  }

  const [data, setData] = useState(initialState);
  const { sex, age, weight, height } = data;
  const setBmi = () => {
    let result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height))
    result = result.toFixed(1);
    return result;
  }
  const bmi = setBmi();
  const BmiResult = () => {
    if (bmi < 18.5) return "Under Weight";
    if (bmi > 18.5 && bmi <= 24.9) return "Healthy";
    if (bmi > 24.9 && bmi < 30) return "Overweight";
    if (bmi>= 30) return "Obese";
  }
  return (
    <View style={[styles.container, { flexWrap: 'wrap', alignItems: 'flex-start'}]}>
      <View style={styles.item}><Text style={styles.itemDesc}>Gender: </Text><Text>{ sex }</Text></View>
      <View style={styles.item}><Text style={styles.itemDesc}>Age: </Text><Text>{ age } years</Text></View>
      <View style={styles.item}><Text style={styles.itemDesc}>Height: </Text><Text>{ height } cms</Text></View>
      <View style={styles.item}><Text style={styles.itemDesc}>Weight: </Text><Text>{ weight } Kgs</Text></View>
      <View style={styles.item}><Text style={styles.itemDesc}>BMI: </Text><Text>{setBmi ()}</Text></View>
      <View style={styles.item}><Text style={styles.itemDesc}>BMI Result: </Text><Text>{BmiResult()}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: { 
    width: '40%',
    paddingHorizontal: 8,
    paddingVertical: 15,
    marginHorizontal:10,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
  },
  itemDesc:{
    fontSize:18,
    color:COLORS.grey,
    fontWeight:'bold'
  },
})