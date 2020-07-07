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
        <Button title="Go to Quiz!" onPress={() => navigation.navigate('Quiz')} />
        <RowItem name="Space" color="#c11e70" onPress={() => navigation.navigate('Quiz')} />
        <RowItem name="Westerns" color="#a31773" onPress={() => navigation.navigate('Quiz')} />
        <RowItem name="Computers" color="#900d84" onPress={() => navigation.navigate('Quiz')} />
        <RowItem name="Misc." color="#73177e" onPress={() => navigation.navigate('Quiz')} />
    </ScrollView>
);