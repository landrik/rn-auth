import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, ModalHeader, ModalBody, ModalFooter } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../utils/colors'
import {Button, Header, TextInput } from './index'


// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{`${item.exerciseName}`}</Text>
//   </TouchableOpacity>
// );


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

  return (
    <TouchableOpacity style={[styles.wrap]} onPress={() => setExpanded(!expanded) }>
      <View style={styles.container}>
        <Text style={[styles.title]}>{item.exerciseName}</Text>
      </View>
      {expanded && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.exerciseDescription}</Text>
          <View style={styles.btnContainer}>
            <View>
              <Button
                mode="contained"
                onPress={() => setModalVisible(true)}
              >
                Edit
              </Button>
            </View>
            <View>
              <Button
                mode="contained"
              >
                Delete
              </Button>
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
            <ModalHeader>{item.exerciseName}</ModalHeader>
            <ModalBody>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{item.exerciseName}</Text>
                  <View style={styles.modalForm}>
                    <TextInput
                      label="Exercise Name"
                    />
                    <TextInput
                      label="Exercise Description"
                    />
                    <TextInput
                      label="Exercise Category"
                    />
                    <TextInput
                      label="Exercise Primary muscle worked"
                    />
                  </View>
                  
                </View>
              </View>
            </ModalBody>
            <ModalFooter>
              <Button
                mode="contained">Save</Button>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </ModalFooter>
            
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
  },
  container: {
    marginBottom: 1,
  },
  descriptionContainer: {},
  title:{
    fontSize: 18,
    width: 200,
    padding: 10
  },
  description: {
    padding: 10,
  },
  btnContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    width: '80%',
    marginHorizontal: 20,
    backgroundColor: "red",
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
    elevation: 2
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalForm:{
    width: '100%',
    alignSelf: 'stretch',
    
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
  }
})