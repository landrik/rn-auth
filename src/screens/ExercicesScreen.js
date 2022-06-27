import React, { useState, useEffect } from "react";
import { FlatList, Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Modal, TextInput, Alert } from "react-native";
import { Background, BackButton, Header, HeroBanner } from '../components'
import filter from 'lodash.filter';
import COLORS from "../utils/colors";
import ListItem from "../components/ListItem";

//icons
import { AntDesign, Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import DisplayModal from "../components/DisplayModal";


export default ExercicesScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [data, setData ] = useState([])
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const [isRender, setIsRender] = useState(false);

  
  const [modalVisible, setModalVisible] = useState(false);

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

  const addExercise = () => {
    var newExercise = [...data, {exerciseName, exerciseDescription}]
    setData(newExercise)
  }

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
            onPress={() => setModalVisible(true)}
            
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
        <DisplayModal 
          modaltitle= "Add new Exercise"
          display = {modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        />
        {
        //   <Modal
        //     animationType="slide"
        //     transparent={true}
        //     visible={modalVisible}
        //     onRequestClose={() => {
        //       setModalVisible(!modalVisible);
        //     }}
        //   >
        //     <View style={styles.modalView}>
        //       <View style={styles.modalHeader}>
        //         <Text style={styles.modalText}>Add a new exercise</Text>
        //         <TouchableOpacity 
        //           onPress={() => setModalVisible(!modalVisible)} 
        //           style={[styles.button, styles.buttonClose]} 
        //           activeOpacity={0.6} 
        //         >
        //           <AntDesign name="close" size={18} color="#fff" />
        //         </TouchableOpacity>
        //       </View>
        //       <View style={styles.modalBody}>
        //         <View style={styles.centeredView}>
        //           <View style={styles.modalForm}>
        //             <TextInput
        //               placeholder="Exercise Name"
        //               style={styles.textInput}
        //               editable={true}
        //               multiline={false}
        //               maxLength={200}
        //             />
        //             <TextInput
        //               style={styles.textArea}
        //               placeholder="Exercise Description"
        //               multiline={true}
        //               numberOfLines={4}
        //             />
        //           </View>
        //         </View>
        //       </View>
        //       <View style={styles.modalFooter}>
        //         <TouchableOpacity
        //           style={styles.button}
        //         >
        //           <Text style={styles.btnTxt}>Save</Text>
        //         </TouchableOpacity>
        //       </View>
        //     </View>
        // </Modal>
      }
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

  

  //Modal styling think out moving into a separate component
  modalView: {
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  modalHeader:{
    width: '100%',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  modalBody: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.ligtGrey,
    borderBottomColor: COLORS.ligtGrey,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  modalFooter: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.brand,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical:10,
    elevation: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: COLORS.black,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    margin: 0,
    fontWeight: '500',
    fontSize: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    textAlign: 'center'
  },
  modalForm:{
    // width: '100%',
    // alignSelf: 'stretch',
    // backgroundColor: 'red',
    // justifyContent: "center",
    // alignItems: "center",
  },
  textArea: {
    height: Platform.OS === "ios" ? 100 : 120,
    fontSize: 16,
    padding: 10,
    borderColor: COLORS.ligtGrey,
    borderWidth: 1,
    justifyContent: "flex-start",
    borderRadius: 4,
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderColor: COLORS.ligtGrey,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '400',
    marginBottom:10,
    borderRadius: 4,
  }
});





