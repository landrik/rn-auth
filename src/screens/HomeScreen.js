import React, { useState } from 'react'
import { TouchableOpacity, FlatList, StatusBar, Text, SafeAreaView, StyleSheet, Dimensions, Image, View } from 'react-native';

// import {  
//   InnerContainer,
//   PageTitle, 
//   SubTitle, 
//   StyledFormArea,
//   StyledButton,
//   ButtonText,
//   Line,
//   WelcomeContainer,
//   WelcomeImage,
//   Avatar
// } from '../components/styles'

import { BackButton, Background, HeroBanner } from '../components';
//icons
import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'


const DATA = [
  {
    id: 1,
    title: 'Workouts',
    description: 'Routines & Trainings Programs',
    icon: require('../assets/imgs/workouts.png'),
  },
  {
    id: 2,
    title: 'Exercises',
    description: 'Exercises videos guides',
    icon: require('../assets/imgs/exercises.png'),
  },
  {
    id: 3,
    title: 'Diets',
    description: 'Personalised Diet Plans',
    icon: require('../assets/imgs/diets.png'),
  },
  {
    id: 4,
    title: 'Blog',
    description: 'Informative Plans & News',
    icon: require('../assets/imgs/blog.png'),
  },
  {
    id: 5,
    title: 'Quotes',
    description: 'Best motivational gym quotes',
    icon: require('../assets/imgs/quotes.png'),
  }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={item.icon} style={styles.thumbnail} />
    <View style={styles.rightContainer}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <Text style={[styles.description, textColor]}>{item.description}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" style={textColor} size={30} />
  {
    // <Image
    // source={{ uri: 'https://i.postimg.cc/HLFkBBWk/arrow-right-icon.png' }}
    // style={styles.iconStyle} />
  }
  </TouchableOpacity>
)

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE"
      }}
    />
  );
};


const HomeScreen = ({navigation}) => {

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item 
        item={item}
        onPress={()=> setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Background noPadding>
        <BackButton goBack={navigation.goBack} />
        <View style={styles.container}>
          <HeroBanner branded />
        </View>
        <FlatList 
          data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={1}
          ItemSeparatorComponent={renderSeparator}
        />
      </Background>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: Dimensions.get('screen').width,
    paddingVertical: 20,
    paddingHorizontal:20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    marginRight: 10,
    width: 50, 
    height: 50,
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    color: '#656565',
  },
  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'
  },
});

export default HomeScreen