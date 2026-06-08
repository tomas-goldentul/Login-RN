import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Login App (Gartenkrot, Goldentul)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //[IA:Gemini] generado el estilo del header para que sea igual al de la imagen
  header: {
    backgroundColor: '#6200EE',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});