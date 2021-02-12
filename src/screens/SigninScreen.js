// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Text, Input, Button } from 'react-native-elements';
// import Spacer from "../components/Spacer";
// //temperary files
// import signup from '../../components/signup';

// const SigninScreen = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [onScreen, setOnScreen] = useState('');

//     return (
//         <View style={styles.container}>
//             <Spacer>
//                 <Text h3>Login for Mealfi</Text>
//             </Spacer>
//             <Spacer />
//             <Input
//                 label="email"
//                 value={email}
//                 onChangeText={(newEmail) => setEmail(newEmail)}
//                 autoCapitalize="none"
//                 autoCorrect={false} />
//             <Spacer />
//             <Input label="password"
//                 secureTextEntry={true}
//                 value={password}
//                 onChangeText={(newPass) => setPassword(newPass)}
//                 autoCapitalize="none"
//                 autoCorrect={false} />
//             <Spacer>
//                 <Button title="Log-in" onPress={() => setOnScreen('App is in underProgress')} />
//                 <Spacer />
//                 <Text h4>{onScreen}</Text>
//             </Spacer>
//             <Button title="New here sign-up" onPress={() => navigation.navigate('Signup')} />
//             <Button title="go to home-screen" onPress={() => navigation.navigate('signup')} />
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 150
//     }
// });
// export default SigninScreen;

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../database/firebase';


export default class SigninScreen extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        //  console.log(prop);
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userLogin = () => {
        if (this.state.email === '' || this.state.password === '') {
            Alert.alert('Enter details to signin!')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    // console.log(res)
                    console.log('User logged-in successfully!')
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('mainFlow')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    googleLogin = () => {
        const googleAuth =
            new firebase.auth.GoogleAuthProvider();

        // using the object we will authenticate the user. 
        firebase.auth().signInWithPopup(googleAuth);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true}
                />
                <Button
                    color="#3740FE"
                    title="Signin"
                    onPress={() => this.userLogin()}
                />

                <Button
                    color="#3740FE"
                    title="Signin with google"
                    onPress={() => this.googleLogin()}
                />

                <Text
                    style={styles.loginText}
                    onPress={() => this.props.navigation.navigate('Signup')}>
                    Don't have account? Click here to signup
        </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});