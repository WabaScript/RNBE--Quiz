import React from 'react';
import Quiz from './screens/quiz';
import QuizIndex from './screens/QuizIndex'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="QuizIndex"
      component={QuizIndex}
      options={{ title: 'Quizzes' }}
    />
    <Stack.Screen
      name="Quiz"
      component={Quiz}
      options={({route}) => ({
        headerTitle: route.params?.title ?? 'title'
      })
    }
    />
  </Stack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
     <MainStack />
    </NavigationContainer>
  );
};