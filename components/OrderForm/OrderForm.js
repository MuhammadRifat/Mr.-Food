import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'react-router-native'
import { userContext } from '../../App';

export default function OrderForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [userData, setUserData] = useContext(userContext);
    const [isValid, setIsValid] = useState(false);

    let url = '';

    // set user data
    if(name && email && mobile && address && isValid) {
        // setUserData({name: name, email: email, mobile: mobile, address: address});
        url = "/maps";
    } else {
        if(name && email && mobile && address) {
            setIsValid(true);
        }
        url = "/orderForm";
    }

    const letArrow = '<<<';
    return (
        <ScrollView style={styles.container}>
            <Link to="/" underlayColor="white"><Text style={{ fontSize: 22, fontWeight: 'bold' }}>{letArrow}</Text></Link>
            <View style={styles.formContainer}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Please fill up this form</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    onChangeText={value => setName(value)}
                    defaultValue=""
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={value => setEmail(value)}
                    defaultValue=""
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Mobile Number"
                    onChangeText={value => setMobile(value)}
                    defaultValue=""
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Address"
                    onChangeText={value => setAddress(value)}
                    defaultValue=""
                />

                <Link to={url} underlayColor="white">
                    <View
                        style={styles.checkoutBtn}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Check Out</Text>
                    </View>
                </Link>
                <Text style={{ textAlign: 'center', color: 'green'}}>Double click on the Check Out button for confirmation.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fffff4',
        flex: 1,
        padding: 10,
        marginTop: 20
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        width: "80%",
        marginBottom: 10,
        padding: 8,
        fontSize: 16
    },
    checkoutBtn: {
        marginTop: 15,
        backgroundColor: 'darkorange',
        borderColor: 'darkorange',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
})
