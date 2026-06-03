import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Boton = ({onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button 
        title="Ingresar" 
        onPress={onPress} 
        color="#8e5dfb" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
  },
});

export default Boton