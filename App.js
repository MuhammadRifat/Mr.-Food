import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';
import Restaurant from './components/Home/Restauarnt/Restaurant';

const Stack = createStackNavigator();
export default function App() {
  return (
      <ScrollView style={styles.container}>
     <NavigationContainer>
            <Stack.Navigator
              
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                
            </Stack.Navigator>
        </NavigationContainer>
     
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop:30
  },
});
