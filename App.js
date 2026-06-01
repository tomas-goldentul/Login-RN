import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import InputBox from './src/components/inputBox'
import Header from './src/components/header'
import Boton from './src/components/boton'
import React, { useState } from 'react';
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userCargado = "hola";
  const passCargada = "chau123";
  const verificacion = () => {
    if (username === "" || password === "") {
      alert("Completa todos campos.");
      return;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <InputBox
        placeholder="Ingrese su nombre de usuario"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={false}
      />
      <InputBox
        placeholder="Ingrese su contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Boton
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
