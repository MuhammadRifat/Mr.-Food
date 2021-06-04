import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Restaurant = ({match}) => {
    const [meal , setMeal ] = useState({})
    const {id} = match.params;
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => setMeal(data.meals))
    },[id])

    return (
        <View>
            meal {meal.length}
            <Text style={styles.headingText}>Popular restaurants around you</Text>
        </View>
    )
}
export default Restaurant 