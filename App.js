import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import InputBox from './src/components/inputBox'
import Header from './src/components/header'
import Boton from './src/components/boton'
import TextoComplementario from './src/components/textoComplementario'
import React, { useState } from 'react';
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resultado, setResultado] = useState('')
  const userCargado = "hola";
  const passCargada = "chau123";
  const verificacion = () => {
    if (username === "" || password === "") {
      setResultado("Completa todos los campos")
    }
    else if (username === userCargado && password === passCargada) {
      setResultado("Se ingreso con exito")

    }
    else {
      setResultado("Usuario o contraseña incorrectos, vuelva a intentar")

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
      <Boton onPress={verificacion}
      />
      <Text style={styles.mensaje}>
        {resultado}
      </Text>
      <View style={styles.complementarios}>
        <TextoComplementario
          mensaje="Olvidaste la clave?"
        />
        <TextoComplementario
          mensaje="Crear cuenta"
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mensaje: {
    marginTop: 20,
    minHeight: 50,
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    color: '#444',
  },
   complementarios: {
    marginTop: 60,
    alignItems: 'center',
  }
});
