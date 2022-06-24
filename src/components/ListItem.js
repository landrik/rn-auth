import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../utils/colors'
import { AntDesign } from '@expo/vector-icons';


// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{`${item.exerciseName}`}</Text>
//   </TouchableOpacity>
// );

const exerciseType = [
  { id : "0", text : "barbell"},
  { id : "1", text : "dumbell"},
  { id : "2", text : "body weight"},
  { id : "3", text : "kettlebell"},
  { id : "4", text : "machine"},
  { id : "5", text : "fixed bar"},
  { id : "6", text : "cable"}
]
const exerciseTarget = [
  { id : "0", text : "upper body"},
  { id : "1", text : "lower body"}
]

const ModalContainer = ({ entry, modalVisible, onClose }) => {
  return(
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        visible={modalVisible}
        presentationStyle={'overFullScreen'}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          onClose();
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View>
                    <Text>{entry.exerciseName}</Text>
                </View>
                <Button
                  mode="contained"
                  onPress={() => onClose()}
                >
                Close
                </Button>
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default ListItem = ({item}) => {
  const [expanded, setExpanded] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEntry, setModalEntry] = useState();
  const [inputText, setInputText] = useState()

  return (
    <TouchableOpacity style={[styles.wrap]} onPress={() => setExpanded(!expanded) }>
      <View style={styles.itemContainer}>
        <Text style={[styles.title]}>{item.exerciseName}</Text>
      </View>
      {expanded && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.exerciseDescription}</Text>
          <View style={styles.btnContainer}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.btnTxt}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.btnTxt}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalText}>{item.exerciseName}</Text>
                <TouchableOpacity 
                  onPress={() => setModalVisible(!modalVisible)} 
                  style={[styles.button, styles.buttonClose]} 
                  activeOpacity={0.6} 
                >
                  <AntDesign name="close" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.modalBody}>
                <View style={styles.centeredView}>
                  <View style={styles.modalForm}>
                    <TextInput
                      placeholder="Exercise Name"
                      style={styles.textInput}
                      onChangeText={(exerciseName) => setInputText(exerciseName)}
                      defaultValue={item.exerciseName}
                      editable={true}
                      multiline={false}
                      maxLength={200}
                    />
                    <TextInput
                      style={styles.textArea}
                      placeholder="Exercise Description"
                      multiline={true}
                      numberOfLines={4}
                      onChangeText={(text) => setInputText(text)}
                      defaultValue={inputText}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.modalFooter}>
                <TouchableOpacity
                  style={styles.button}
                >
                  <Text style={styles.btnTxt}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {
            // <ModalContainer
            // entry={modalEntry}
            // modalVisible={modalVisible}
            // onClose={() => setModalVisible(false)}
            // />
        }
        </View>
        
      )}
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  wrap:{
    backgroundColor: COLORS.white,
    borderColor: COLORS.ligtGrey,
    borderWidth: 1,
    marginTop: -1,
  },
  itemContainer: {
    marginBottom: 1,
  },
  descriptionContainer: {},
  title:{
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  description: {
    padding: 10,
  },
  btnContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  buttonClose: {
    width:40,
    height: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical:0,
    backgroundColor: "#2196F3",
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
})