import React from "react"
import {Dimensions, StyleSheet, Text, TouchableHighLight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').widht / 4,
        widht: Dimensions.get('window').widht / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidht: 1,
        borderColor: '#888888'
    },
    operationButton: {
        color: '#ffffff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        widht: (Dimensions.get('window').widht / 4) * 2,
    },
    buttonTriple: {
        widht: (Dimensions.get('window').widht / 4) * 2,
    }

})
 export default props => {
    const styleButton = [style.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)

    return(
        <TouchableHighLight onPress={props.onClick}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighLight>
    )
 }