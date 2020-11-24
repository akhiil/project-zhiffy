import React from 'react';
import { Text, Input } from 'react-native-elements';
// import Spacer from '../components/Spacer';

import call from 'react-native-phone-call';
import { Ionicons } from '@expo/vector-icons';

import {
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Image,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const phw = Dimensions.get('window').width;
const phh = Dimensions.get('window').height;


const HomeScreen = ({ navigation }) => {
    //  const isFocused = useIsFocused();

    const args = {
        number: '8210706721', // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', backgroundColor: '#ffffe6' }} >

                <View style={styles.headerStyle}>
                    <Image
                        style={{ height: 100, width: 100, resizeMode: 'contain', marginLeft: 10, marginTop: 15 }}
                        source={
                            require('../components/mealfi-logo.jpeg')
                        } />
                    <Text style={{ marginTop: 42, marginLeft: 20, color: '#4d2800' }} h3>Mealfi</Text>
                </View>
                <View style={{ marginTop: 42, marginRight: 25 }}>
                    <TouchableOpacity onPress={() => {
                        call(args).catch(console.error)
                    }}>
                        <Ionicons name="md-call" size={45} color="#29a329" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderColor: '#4d2800', borderWidth: 2 }} />


        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default HomeScreen;