import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit";



export default function ChartComponent() {
  const screenWidth = Dimensions.get("window").width*1.15;
  const data ={
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    strokeWidth: 2, // optional
    //legend: ["Rainy Days"] // optional
  };
  const chartConfig = {
    backgroundColor: "#fff000",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 167, 38, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 167, 38, ${opacity})`,
    style: {borderRadius: 16},
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={screenWidth} // from react-native
        height={220}
        withHorizontalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        //yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          paddingRight:5
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})