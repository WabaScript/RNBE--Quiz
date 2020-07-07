import React from 'react';
import { ScrollView, View, Button, StatusBar } from 'react-native';
import { RowItem } from '../components/RowItem';
import spaceQuestions from '../data/space';
import westernQuestions from '../data/westerns';
import computersQuestions from '../data/computers';
import miscQuestions from '../data/misc';

export default ({navigation}) => (
    <ScrollView>
        <StatusBar barStyle="dark-content" />
        <RowItem name="Space" color="#c11e70" onPress={() => navigation.navigate('Quiz', {title: 'Space', questions: spaceQuestions, color: "#c11e70"})} />
        <RowItem name="Westerns" color="#a31773" onPress={() => navigation.navigate('Quiz', {title: 'Westerns', questions: westernQuestions, color: "#a31773"})} />
        <RowItem name="Computers" color="#900d84" onPress={() => navigation.navigate('Quiz', {title: 'Computers', questions: computersQuestions, color: "#900d84"})} />
        <RowItem name="Misc." color="#73177e" onPress={() => navigation.navigate('Quiz', {title: 'Misc.', questions: miscQuestions, color: "#73177e"})} />
    </ScrollView>
);