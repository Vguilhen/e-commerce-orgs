import React from 'react';
import {StyleSheet, Text } from 'react-native';

export default function Texto ({children, style}){

    let estilo = estilos.texto;
    
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;

    }
    return <Text style={[style, estilos.texto]}>{children}</Text>
}

const estilos = StyleSheet.create ({
    Text: {
        fontFamily: "MontserratRegular",
    },
    textoNegrito: {
        fontFamily: "MonteserratBold",
    }
});