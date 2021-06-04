import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Link } from 'react-router-native'


export default function Restaurant({ match }) {
    const [meal, setMeal] = useState({});
    const mealId = match.params.mealId;
    const price = mealId.slice(-2);
    const ingredients = [];
    const letArrow = '<<<';

    // load data from themealdb.com 
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    for (let i = 1; i <= 20; i++) {
        let str = "strIngredient" + i;
        if (!meal[str]) {
            continue;
        }
        ingredients.push(meal[str]);
    }

    // handling order button
    const handleOrder = () => {
        // handle order button here
    }
    return (
        <ScrollView style={styles.container}>
            <Link to="/" underlayColor="white"><Text style={{ fontSize: 22, fontWeight: 'bold' }}>{letArrow}</Text></Link>

            <View style={styles.mealComponent}>
                <Image source={{ uri: `${meal.strMealThumb}` }} style={styles.mealImage} />

                <View style={{ flexDirection: "row", padding: 10 }}>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20 }}>{meal.strMeal}</Text>
                        <Text>{meal.strArea}</Text>
                        <Text style={{ color: "gray" }}>Mueller, Austin</Text>
                        <Text style={{ color: "red" }}>Opens at 10 am</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.rating}>3.2</Text>
                        <Text style={{ textAlign: 'right', color: 'gray' }}>${price} for two</Text>
                    </View>
                </View>

                <Text style={styles.headingText}>Ingredients</Text>
                <View>
                    {
                        ingredients.map(ingredient => <Text style={styles.ingredients}>{ingredient}</Text>)
                    }
                </View>

                <Link to="/orderForm" underlayColor="white">
                    <View
                        style={styles.orderBtn}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Order</Text>
                    </View>
                </Link>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 20
    },
    mealComponent: {
        flex: 1,
        backgroundColor: "#fffff4",
        marginBottom: 12,
        marginTop: 12,
        borderRadius: 10,
    },
    mealImage: {
        width: "100%",
        height: 190,
        borderRadius: 200 / 2
    },
    headingText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    rating: {
        textAlign: 'right',
        backgroundColor: 'green',
        paddingLeft: 8,
        paddingRight: 8,
        color: 'white',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    ingredients: {
        backgroundColor: 'green',
        paddingLeft: 8,
        paddingRight: 8,
        color: 'white',
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    orderBtn: {
        marginTop: 15,
        backgroundColor: 'darkorange',
        borderColor: 'darkorange',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
})
