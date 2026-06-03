import React from "react";
import { TextInput, StyleSheet } from "react-native"; 

const InputBox = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,      
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    backgroundColor: "#fff", 
  },
});

export default InputBox;