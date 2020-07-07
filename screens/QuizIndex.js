import React from 'react';
import { View, Button, StatusBar } from 'react-native';

export default ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <StatusBar barStyle="dark-content" />
        <Button title="Go to Quiz!" onPress={() => navigation.navigate('Quiz')} />
    </View>
);