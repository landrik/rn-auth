import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import COLORS from '../utils/colors';

export default DisplayModal = (props) => {
  return (
    <Modal
      visible={ props.display } 
      animationType = "slide"
      transparent={true}
      onRequestClose={ props.onRequestClose }
    >
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalText}>{props.modaltitle}</Text>
          <TouchableOpacity 
            onPress={props.onRequestClose} 
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
                editable={true}
                multiline={false}
                maxLength={200}
              />
              <TextInput
                style={styles.textArea}
                placeholder="Exercise Description"
                multiline={true}
                numberOfLines={4}
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
  )
}

const styles = StyleSheet.create({

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
  buttonClose:{
    width:40,
    height: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical:0,
    backgroundColor: "#2196F3",
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
