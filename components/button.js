import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export const Button = ({ text, onPress = () => {} }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}> {text} </Text>
        </TouchableOpacity>
    )
}

export const ButtonContainer = ({children}) => {
    return (
        <View style={styles.buttonContainer}>
            {children}
        </View>
    )

}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: "46%",
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        justifyContent: 'space-between'
    }
});