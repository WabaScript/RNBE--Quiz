import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import TEMP_QUESTION from '../data/computers';
import {Button, ButtonContainer } from '../components/button';

const question = TEMP_QUESTION[0];

export default function Quiz() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={styles.safearea}>
                <View>
                <Text style={styles.text}> {question.question} </Text>
                <ButtonContainer>
                    {question.answers.map(x => (
                        <Button key={x.id} text={x.text} onPress={() => alert("hi")} />
                    ))}
                </ButtonContainer>
                </View>
                <Text style={styles.text}> 0/3 </Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'space-between'
    }
  });
