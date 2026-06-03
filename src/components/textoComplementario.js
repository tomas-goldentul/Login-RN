import React from 'react';
import { Text } from 'react-native';

const TextoComplementario = (props) => {
    return (
        <Text>
            {props.mensaje}
        </Text>
    );
};

export default TextoComplementario