
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Home/Home';
import { NativeRouter, Route, Link } from "react-router-native";
import Restaurant from './components/Restaurant/Restaurant';


export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/restaurant/:mealId" component={Restaurant} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({});
