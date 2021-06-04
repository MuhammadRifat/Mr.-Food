import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import { Link } from 'react-router-native';

export default function Maps() {
    const letArrow = '<<<';

    return (
        <ScrollView style={styles.container}>
            <Link to="/orderForm" underlayColor="white">
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{letArrow}</Text>
            </Link>

            <View>
                <MapView style={styles.map} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffff4',
        flex: 1,
        padding: 10,
        marginTop: 20
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
