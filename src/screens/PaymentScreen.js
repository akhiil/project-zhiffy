import React from 'react';
import { Text, Input } from 'react-native-elements';
// import Spacer from '../components/Spacer';



import {
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Image,
    Button,
    Dimensions
} from 'react-native';

const phw = Dimensions.get('window').width;
const phh = Dimensions.get('window').height;

const PaymentScreen = ({ navigation }) => {
    return (
        <View style={{ marginTop: 100, height: 100, width: 500 }}>
            <Text>This page is under progress</Text>
            <Button title="go back" onPress={() => navigation.navigate('mainFlow')} />
        </View>
    );
}

export default PaymentScreen;