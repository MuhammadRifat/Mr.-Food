import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';
import OrderDelivery from './components/OrderDelivery/OrderDelivery';

// AIzaSyA5VsRYN9yR6XbIlUlnIGJZaYvF2KbGtoQ

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Home></Home>
      <OrderDelivery></OrderDelivery>
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
