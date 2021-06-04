import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Home/Home';
import { NativeRouter, Route, Link } from "react-router-native";
import Restaurant from './components/Restaurant/Restaurant';
import OrderForm from './components/OrderForm/OrderForm';
import Maps from './components/Maps/Maps';

export const userContext = createContext();

export default function App() {
  const [userData, setUserData] = useState({});

  return (
    <userContext.Provider value={[userData, setUserData]}>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/restaurant/:mealId" component={Restaurant} />
        <Route path="/orderForm" component={OrderForm} />
        <Route path="/maps" component={Maps} />
      </NativeRouter>
    </userContext.Provider>
  );
}

const styles = StyleSheet.create({});
