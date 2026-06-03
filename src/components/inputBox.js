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
   width: "90%",
    maxWidth: 350,
    height: 55,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    fontSize: 16,

  },
});

export default InputBox;