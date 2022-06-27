import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity, ScrollView} from 'react-native'
import COLORS from "../utils/colors";
import { AntDesign } from "@expo/vector-icons";

export default SelectDropdown = ({data = [], value = {}, onSelect = () => {} }) => {
 

  const [isOpen, setIsOpen] = useState(false);
  const onOptionClicked = (val) => {
    onSelect(val);
    setIsOpen(false);
  };

  return (
      <View style={styles.ddContainer}>
        <TouchableOpacity 
          style={styles.ddHeader} 
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text>{!!value ? value.title : `Choose an option` }</Text>
          <AntDesign 
            name={isOpen ? "caretup" : "caretdown"} 
            size={18} 
            color={COLORS.darkGrey} 
          />

        </TouchableOpacity>
        {isOpen && (
          <View style={styles.ddListContainer}>
            <ScrollView style={styles.ddList}>
              {data.map((val, i) => (
                <TouchableOpacity 
                  style={styles.listItem} 
                  key={val.id}
                  onPress={() => onOptionClicked(val)} 
                 > 
                  <Text>{val.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  ddContainer: {
    marginHorizontal: 0,
    marginVertical: 12,
    width: "100%"
  },
  ddHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    color: '#3faffa',
    backgroundColor: COLORS.secondary,
    padding: 15,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 18,
    height: 50,
    marginTop: 3,
    marginBottom: 10,
    color: COLORS.teritiary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 1,  
    elevation: 5,
    fontWeight: "500"
  },
  
  ddListContainer: {
    width: "100%",
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderRadius: 2,
    backgroundColor: "#ffffff",
    maxHeight: 120
  },
  ddList: {
    padding: 0,
    margin: 0,
    
    
    // border: 2px solid ;
    // box-sizing: border-box;
    
    // &:first-child {
    //   padding-top: 0.8em;
    // }
  },
  listItem: {
    padding: 10,
    color: "#3faffa",
    fontSize: 16,
    fontWeight: "500",
    // listStyle: "none",
    // marginBottom: "0.8em",
    // &:hover {
    //   color:" #fd9e46"
    // }
  }


})