import React, { useState, useEffect } from "react";
import { FlatList, Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Background, BackButton, Header, TextInput, HeroBanner } from '../components'
import filter from 'lodash.filter';
import COLORS from "../utils/colors";
import ListItem from "../components/ListItem";

//icons
import { AntDesign, Fontisto, Ionicons, Octicons } from '@expo/vector-icons'


export default ExercicesScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [data, setData ] = useState([])
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const [isRender, setIsRender] = useState(false)

  const renderItem = ({ item, index }) => {
    return(
      <ListItem 
        item={item} 
        style={styles.container}
      />
    )
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );

  }

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter( fullData, user => {
      return contains(user, formattedQuery)
    });
    setData(filteredData);
    setQuery(text)
  }

  const contains = ({ exerciseName }, query) => {
    if (exerciseName.includes(query)) {
      return true;
    }
    return false;
  };

  const API_ENDPOINT = 'https://myfitness-api.herokuapp.com/api/exercises';


  useEffect(() => {
    setIsLoading(true);
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(response => {
        setData(response.data);
        setFullData(response.data)
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsError(err);
      })
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Background noPadding>
        <View style={styles.header}>
          <Text style={styles.headingText}>Exercises List</Text>
          <TouchableOpacity 
            style={[styles.button, styles.buttonClose]} 
            activeOpacity={0.6} 
          >
            <AntDesign name="plus" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.exerciseName}
          extraData={isRender}
          style = {{ width: '90%' }}
        />
      </Background>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  item: {
    padding:5,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    color: COLORS.brand,
    marginTop: 60,
    fontWeight: 'bold'
  },

  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row'
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
  },

  list: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height *0.86,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 0,
  },
  root: {
      marginBottom: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  header: {
    width: '100%',
    backgroundColor:COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ligtGrey,
  },
  headingText: {
    margin: 0,
    fontWeight: '500',
    fontSize: 18,
    paddingVertical: 10,
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.brand,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical:10,
    elevation: 2
  },
  buttonClose: {
    width:40,
    height: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical:0,
    backgroundColor: "#2196F3",
  },
});





