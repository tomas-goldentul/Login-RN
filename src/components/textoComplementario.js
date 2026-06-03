import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextoComplementario = (props) => {
    return (
        <Text style={styles.texto}>
            {props.mensaje}
        </Text>
    );
};
const styles = StyleSheet.create({
    texto: {
        fontSize: 16,
        color: '#000000',
        marginVertical: 6,
    },
});
export default TextoComplementario