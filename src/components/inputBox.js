import React from "react";
import { TextInput, StyleSheet } from "react-native"; 

const InputBox = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}   //[IA:Gemini] secureTextEntry para ocultar (o no) lo que se esta ingresando

        />
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,      
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#8e5dfb",
    backgroundColor: "#fff", 
  },
});

export default InputBox;