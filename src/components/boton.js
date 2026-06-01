import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Boton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button 
        title="Iniciar Sesión" 
        onPress={() => {}} 
        color="#007BFF" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
});

export default Boton