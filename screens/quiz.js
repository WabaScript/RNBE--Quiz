import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import TEMP_QUESTION from '../data/computers';
import {Button, ButtonContainer } from '../components/button';
import { Alert } from '../components/Alert'


export default function Quiz() {
    const [correctCount, setCorrectCount] = useState(0);
    const [totalCount, setTotalCount] = useState(TEMP_QUESTION.length);
    const [activeQuIndex, setActiveQuIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);


    const nextQuestion = () => {
        let next = activeQuIndex + 1
        if (next >= totalCount){
            setActiveQuIndex(0)
        } else {
            setActiveQuIndex(next)
        }
        setAnswered(false)
    }

    const answer = (correct) => {
        setAnswered(true)
        if (correct) {
            setCorrectCount(correctCount + 1)
            setAnswerCorrect(true)
        } else {
            setAnswerCorrect(false)
        }
        setTimeout(() => nextQuestion(), 750);
    }

    const question = TEMP_QUESTION[activeQuIndex];

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <SafeAreaView style={styles.safearea}>
                <View>
                <Text style={styles.text}> {question.question} </Text>
                <ButtonContainer>
                    {question.answers.map(x => (
                        <Button key={x.id} text={x.text} onPress={() => answer(x.correct)} />
                    ))}
                </ButtonContainer>
                </View>
                <Text style={styles.text}> {correctCount}/{totalCount} </Text>
            </SafeAreaView>
            <Alert visible={answered} correct={answerCorrect} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c11e70',
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
