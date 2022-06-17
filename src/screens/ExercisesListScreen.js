import React, { useState, useEffect } from "react";
import { FlatList, Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Background, Header, TextInput } from '../components'
import filter from 'lodash.filter';
import COLORS from "../utils/colors";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{`${item.exerciseName}`}</Text>
  </TouchableOpacity>
);

export default ExercicesListScreen = () => {

  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [data, setData ] = useState([])
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item._id === selectedId ? COLORS.white : COLORS.black;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        style={styles.container}
      />
    );
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
    <Background>
      <StatusBar style="auto" />
      <Header style={styles.header}>Exercises</Header>
      <FlatList
        data={data}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={(item) => item.exerciseName}
        extraData={selectedId}
        style = {{ width: '100%' }}
      />
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red',
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
      paddingVertical: 20,
      backgroundColor: '#FDA085',
      width: Dimensions.get('window').width,
      textAlign: 'center',
  },
});





