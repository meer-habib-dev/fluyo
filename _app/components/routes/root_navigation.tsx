import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExerciseScreen from '../screens/exercise_screen';

export type StackNavigationParamList = {
  ExerciseScreen: undefined;
};

const Stack = createStackNavigator<StackNavigationParamList>();
const RootNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExerciseScreen">
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
