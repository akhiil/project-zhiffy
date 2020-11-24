import React, { Component, useState } from 'react';
import { Text, Input } from 'react-native-elements';
// import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';
import call from 'react-native-phone-call';
import {
    Dimensions,
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    TouchableOpacity,
    Picker,
    FlatList
} from 'react-native';
import { withNavigation } from 'react-navigation';

import PaymentScreen from './PaymentScreen';
import CalenderBox from '../components/CalenderBox';
import Calender from '../components/calender';

const phw = Dimensions.get('window').width;
const phh = Dimensions.get('window').height;

const args = {
    number: '8210706721', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}


var today = new Date();
const dd = today.getDate();
let mm;
let day;
let numberOfDays;
let mont = today.getMonth();

switch (mont) {
    case 0:
        mm = 'Jan';
        numberOfDays = 31
        break;
    case 1:
        mm = 'Feb';
        if (today.getFullYear % 4 == 0) numberOfDays = 29;
        else numberOfDays = 28
        break;
    case 2:
        mm = 'Mar';
        numberOfDays = 31;
        break;
    case 3:
        mm = 'Apr';
        numberOfDays = 30;
        break;
    case 4:
        mm = 'May';
        numberOfDays = 31;
        break;
    case 5:
        mm = 'Jun';
        numberOfDays = 30;
        break;
    case 6:
        mm = 'Jul';
        numberOfDays = 31;
        break;
    case 7:
        mm = 'Aug';
        numberOfDays = 31;
        break;
    case 8:
        mm = 'Sept';
        numberOfDays = 30;
        break;
    case 9:
        mm = 'Oct';
        numberOfDays = 31;
        break;
    case 10:
        mm = 'Nov';
        numberOfDays = 30;
        break;
    case 11:
        mm = 'Dec';
        numberOfDays = 31;
        break;
}



let sun = new Date().getDay();
let next;

let list = [];
let j = 0;
for (let i = dd; i <= numberOfDays; i++) {



    switch (sun) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        default:
            day = "fault";
    }

    list.push({ date: `${i} ${mm}-${day}`, id: j, checkLunch: false, checkDinner: false });
    if (sun === 6) {
        sun = 0;
    }
    else {
        sun++;
    }

    if (i === numberOfDays) next = (1 + mont);
    j++;
}

switch (next) {
    case 0:
        mm = 'Jan';
        numberOfDays = 31
        break;
    case 1:
        mm = 'Feb';
        if (today.getFullYear % 4 == 0) numberOfDays = 29;
        else numberOfDays = 28
        break;
    case 2:
        mm = 'Mar';
        numberOfDays = 31;
        break;
    case 3:
        mm = 'Apr';
        numberOfDays = 30;
        break;
    case 4:
        mm = 'May';
        numberOfDays = 31;
        break;
    case 5:
        mm = 'Jun';
        numberOfDays = 30;
        break;
    case 6:
        mm = 'Jul';
        numberOfDays = 31;
        break;
    case 7:
        mm = 'Aug';
        numberOfDays = 31;
        break;
    case 8:
        mm = 'Sept';
        numberOfDays = 30;
        break;
    case 9:
        mm = 'Oct';
        numberOfDays = 31;
        break;
    case 10:
        mm = 'Nov';
        numberOfDays = 30;
        break;
    case 11:
        mm = 'Dec';
        numberOfDays = 31;
        break;
}



for (let i = 1; i <= numberOfDays; i++) {

    switch (sun) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        default:
            day = "fault";
    }

    list.push({ date: `${i} ${mm}-${day}`, id: j, checkLunch: false, checkDinner: false });
    if (sun === 6) {
        sun = 0;
    }
    else {
        sun++;
    }
    j++;
}

//let mealInfo = [];
let mealName;

class tiffinScreen extends Component {
    constructor() {
        super();
        this.state = {
            mealInfo: [],
            selectedMeal: '',
            list: list,
            x: 0,
            y: 0,
            mealId: 0,
            amountLunch: 0,
            amountDinner: 0
        }
    }

    checkLunchBox = (itemID) => {
        let temp = this.state.list;
        temp[itemID].checkLunch = !temp[itemID].checkLunch
        this.setState({ list: temp });

        let tempy = 0;
        for (let i = 0; i < list.length; i++) {
            if (this.state.list[i].checkLunch) tempy++;
        }
        this.setState({ x: tempy });


        let tempInfo = [];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].checkLunch || this.state.list[i].checkDinner && this.state.mealId) {
                tempInfo.push({
                    date: this.state.list[i].date,
                    ID: this.state.mealId,
                    mealLunch: (this.state.list[i].checkLunch) ? 'Lunch' : null,
                    mealDinner: (this.state.list[i].checkDinner) ? 'Dinner' : null,
                    amount: parseInt(this.state.selectedMeal)
                });
            }
        }
        this.setState({ mealInfo: tempInfo });


        console.log('yha se', ...this.state.mealInfo);
        let lunch = 0;
        for (let i = 0; i < this.state.mealInfo.length; i++) {
            if (this.state.mealInfo[i].mealLunch) lunch += this.state.mealInfo[i].amount;
        }
        this.setState({ amountLunch: lunch });
    }

    checkDinnerBox = (itemID) => {
        let temp = this.state.list;
        temp[itemID].checkDinner = !temp[itemID].checkDinner
        this.setState({ list: temp });

        let tempy = 0;
        for (let i = 0; i < list.length; i++) {
            if (this.state.list[i].checkDinner) tempy++;
        }
        this.setState({ y: tempy });


        let tempInfo = [];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].checkDinner || this.state.list[i].checkLunch && this.state.mealId) {
                tempInfo.push({
                    date: this.state.list[i].date,
                    ID: this.state.mealId,
                    mealLunch: (this.state.list[i].checkLunch) ? 'Lunch' : null,
                    mealDinner: (this.state.list[i].checkDinner) ? 'Dinner' : null,
                    amount: parseInt(this.state.selectedMeal)
                });
            }
        }
        this.setState({ mealInfo: tempInfo });


        console.log('yha se', ...this.state.mealInfo);
        let dinner = 0;
        for (let i = 0; i < this.state.mealInfo.length; i++) {
            if (this.state.mealInfo[i].mealDinner) dinner += this.state.mealInfo[i].amount;
        }
        this.setState({ amountDinner: dinner });
    }



    render() {
        //  const { navigate } = this.props.navigation.navigate;
        return (

            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: '#ffffe6' }} >
                    <View style={styles.headerStyle}>
                        <Image
                            style={{ height: 85, width: 100, resizeMode: 'contain', marginLeft: 10, marginTop: 15 }}
                            source={
                                require('../components/mealfi-logo.jpeg')
                            } />
                        <Text style={{ marginTop: 38, marginLeft: 20, color: '#4d2800' }} h3>Mess-Service</Text>
                    </View>
                    <View style={{ marginTop: 38, marginRight: 25 }}>
                        <TouchableOpacity onPress={() => {
                            call(args).catch(console.error)
                        }}>
                            <Ionicons name="md-call" size={42} color="#29a329" />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ borderColor: '#4d2800', borderWidth: 2 }} />
                <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
                    <View style={{ borderColor: 'white', borderBottomColor: '#4d2800', borderWidth: 3, marginTop: 2, marginHorizontal: phw / 15 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Order-meal</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 20, marginTop: 15 }}>Select meal</Text>
                        <View style={{ borderColor: '#4d2800', borderWidth: 2, borderTopColor: 'white', borderRadius: 10 }}>
                            <Picker
                                selectedValue={this.state.selectedMeal}
                                style={{ height: 50, width: 110 }}
                                onValueChange={(itemValue, itemIndex) => {
                                    let temp = this.state;
                                    temp.selectedMeal = itemValue;

                                    switch (itemIndex) {
                                        case 1:
                                            mealName = 'Roti-sabji'
                                            break;
                                        case 2:
                                            mealName = 'Chawal-dal'
                                            break;
                                        case 3:
                                            mealName = 'mach-bhat'
                                            break;
                                        case 4:
                                            mealName = 'murga-bhat'
                                            break;
                                    }

                                    temp.mealId = mealName;
                                    this.setState({ temp });
                                    // console.log(itemIndex);
                                }}
                            >
                                <Picker.Item label="Lists" value="kuchnai" />
                                <Picker.Item label="Roti-sabji" value="30" />
                                <Picker.Item label="Chawal-dal" value="35" />
                                <Picker.Item label="mach-bhat" value="50" />
                                <Picker.Item label="murga-bhat" value="60" />
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.boxStyle}>

                        <Calender list={list} onLunchChange={(itemID) => {
                            if (this.state.selectedMeal) {
                                this.checkLunchBox(itemID)
                            }
                        }}
                            onDinnerChange={(itemID) => {
                                if (this.state.selectedMeal) {
                                    this.checkDinnerBox(itemID)
                                }
                            }
                            } />

                    </View>

                    <View style={{ backgroundColor: 'green', width: phw - 60, marginVertical: 30, marginLeft: 30, borderRadius: 15 }}>
                        {(!this.state.selectedMeal) ? (<Text style={{ fontSize: 40, marginVertical: 50, color: 'white' }}> please select meal</Text>) : (<View style={{ margin: 20 }}>

                            <Text style={{ fontSize: 20, color: 'white' }}>Order-Summary</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 20, color: 'white', marginTop: 15 }}>Lunch * {this.state.x}</Text>
                                <Text style={{ fontSize: 20, color: 'white', marginTop: 15 }}>
                                    = Rs {this.state.amountLunch}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 20, color: 'white', marginTop: 15 }}>Dinner * {this.state.y}</Text>
                                <Text style={{ fontSize: 20, color: 'white', marginTop: 15 }}> = Rs {this.state.amountDinner}</Text>
                            </View>

                            <View style={{ borderColor: 'white', borderWidth: 1, marginTop: 10 }} />
                            <Text style={{ fontSize: 20, color: 'white', marginTop: 15, textAlign: 'center' }}>TOTAL
                            = {(this.state.amountLunch) + (this.state.amountDinner)}</Text>
                        </View>)}
                    </View>

                    <View style={{ backgroundColor: 'red', height: 50, width: phw - 100, marginLeft: 50, marginBottom: 15, borderRadius: 25 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('payment')}>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', marginTop: 10 }}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>

                    <View>

                        {this.state.mealInfo.map((item) => {
                            return (
                                <View key={item.date + item.mealDinner + item.mealLunch} style={{ flexDirection: 'row', textAlign: 30, justifyContent: 'space-around' }}>
                                    <Text style={{ margin: 10 }}>{item.date}</Text>
                                    <Text style={{ margin: 10 }}>{item.ID}</Text>
                                    {item.mealLunch ? <Text style={{ margin: 10 }}>Lunch</Text> :
                                        <Text style={{ margin: 10 }}>❌</Text>}
                                    {item.mealDinner ? <Text style={{ margin: 10 }}>Dinner</Text> :
                                        <Text style={{ margin: 10 }}>❌</Text>}
                                </View>
                            );
                        })}
                        {/* <FlatList

                            data={this.state.mealInfo}
                            keyExtractor={item => item.date + item.mealType}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ flexDirection: 'row', textAlign: 30, justifyContent: 'space-around' }}>
                                        <Text style={{ margin: 10 }}>{item.date}</Text>
                                        <Text style={{ margin: 10 }}>{item.ID}</Text>
                                        {item.mealLunch ? <Text style={{ margin: 10 }}>Lunch</Text> :
                                            <Text style={{ margin: 10 }}>❌</Text>}
                                        {item.mealDinner ? <Text style={{ margin: 10 }}>Dinner</Text> :
                                            <Text style={{ margin: 10 }}>❌</Text>}
                                    </View>
                                );
                            }} /> */}
                    </View>

                </ScrollView >
            </SafeAreaView >

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    boxStyle: {

        borderColor: '#4d2800',
        borderWidth: 4,
        height: phh / 4,
        width: phw - 30,
        marginLeft: 15,
        marginTop: 70,
        borderRadius: 15
    }
});

export default tiffinScreen;