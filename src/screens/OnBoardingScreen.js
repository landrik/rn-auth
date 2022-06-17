import { View, Text, StyleSheet, FlatList, Animated, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'

import OnBoardingItem from '../components/OnBoardingItem'
import slides from '../utils/slides'
import Paginator from '../components/Paginator'
import NextButton from '../components/NextButton'


export default OnBoardingScreen = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef( new Animated.Value(0) ).current
  const slidesRef = useRef(null)
  const viewableItemsChanged = useRef( ({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const scrollTo = () => {
    if(currentIndex < slides.length -1){
      slidesRef.current.scrollToIndex({ index: currentIndex + 1})
    }else{
      console.log('Last Item')
    }
  };


  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
      <View style={{ flex: 1}}>
        <FlatList 
          data={slides} 
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={ false }
          keyExtractor={(item) => item.id }
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.footer}>
          <View style={styles.paginator}>
            <View style={{}}>
              <Paginator data={slides} scrollX={scrollX}  />
            </View>
          </View>
          <View style={styles.nextbutton}>
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length) } />
          </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    width: '100%',
    height: 100,
    bottom:0,
    position: 'absolute',
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },
  nextbutton:{
    
    
  },
  paginator:{
    flex: 1,
    justifyContent: 'center',
  }
  
})