import React from 'react';
import Spacer from '../components/Spacer';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    Button,
    Dimensions
} from 'react-native';

const phw = Dimensions.get('window').width;
const phh = Dimensions.get('window').height;

const mainScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{ height: phh - 150, width: phw }}
                source={
                    require('../components/mainscreen.jpeg')
                } />
            <View style={styles.tempstyle} >
                <Text style={styles.buttonStyle} onPress={() => props.navigation.navigate('Signin')}>Login</Text>


                <Text style={styles.buttonStyle} onPress={() => props.navigation.navigate('Signup')}>Signup</Text>
                <Button title="testing mode" onPress={() => {
                    props.navigation.navigate('mainFlow')
                }} />
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, width: phw }} />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tempstyle: {
        height: 70,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#ffffe6'
    },
    buttonStyle: {

        width: 80,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#663300',
        borderRadius: 12,
        color: '#ffffe6'
    }
});

export default mainScreen;