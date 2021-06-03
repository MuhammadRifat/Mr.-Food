import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Home></Home>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
