import React, { useState } from 'react'
import { TouchableOpacity, FlatList, StatusBar, Text, SafeAreaView, StyleSheet, Dimensions, Image, View, useWindowDimensions  } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BackButton, Background, HeroBanner, BlogComponent, ChartComponent, ProfileDetailComponent } from '../components';


import COLORS from '../utils/colors'

const WorkoutsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
    <Text>Profile page</Text>
  </View>
);

const BlogRoute = () => (
  <View style={styles.container}>
    <BlogComponent />
  </View>
);

const DetailRoute = () => (
  <View style={styles.maincontainer}>
    <ProfileDetailComponent />
    <ChartComponent />
  </View>
  
);

const renderScene = SceneMap({
  first: WorkoutsRoute,
  second: BlogRoute,
  third: DetailRoute,
});

const renderLabel = ({ route, focused, color }) => {
  return (
    <View>
      <Text
        style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
      >
        {route.title}
      </Text>
    </View>
  )
}
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: COLORS.brand }}
    style={{ backgroundColor: COLORS.primary}}
    renderLabel={renderLabel}
  />
);

export default function ProfileScreen({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(2);
  const [routes] = React.useState([
    { key: 'first', title: 'Workouts' },
    { key: 'second', title: 'Blog' },
    { key: 'third', title: 'Details' },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Background noPadding>
        <BackButton goBack={navigation.goBack} />
        <View style={styles.headerBanner}>
          <HeroBanner profilePic />
        </View>
        <View style={styles.container}>
          <TabView
            navigationState={{ index, routes }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>
      </Background>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  maincontainer: {flex: 1},
  container: {
    flex: 1,
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBanner: {
    width: '100%',
    height: 200,
  },
  activeTabTextColor: {
    color: COLORS.brand,
  },
  tabTextColor: {
    color: '#000',
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