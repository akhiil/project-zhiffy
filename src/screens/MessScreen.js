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

    list.push({ date: `${i} ${mm}-${day}`, id: j, checkLunch: false, checkDinner: false, foodLunch: '', foodDinner: '' });
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

    list.push({ date: `${i} ${mm}-${day}`, id: j, checkLunch: false, checkDinner: false, foodLunch: '', foodDinner: '' });
    if (sun === 6) {
        sun = 0;
    }
    else {
        sun++;
    }
    j++;
}


class messScreen extends Component {
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


    giveAmount = (item) => {
        switch (item) {
            case "Roti-sabji":
                return 30;
            case "Chawal-dal":
                return 35;
            case "mach-bhat":
                return 50;
            case "murga-bhat":
                return 60;
            case "Litti-chokha":
                return 25;
            case "paneer-dosa":
                return 55;
        }
    }

    checkLunchBox = (itemID) => {
        let temp = this.state.list;
        temp[itemID].checkLunch = !temp[itemID].checkLunch;
        temp[itemID].foodLunch = temp[itemID].checkLunch ? this.state.selectedMeal : '';
        this.setState({ list: temp });

        //  console.log(...list);

        let tempy = 0;
        for (let i = 0; i < list.length; i++) {
            if (this.state.list[i].checkLunch) tempy++;
        }
        this.setState({ x: tempy });


        let tempInfo = [];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].checkLunch && this.state.selectedMeal) {
                tempInfo.push({
                    date: this.state.list[i].date,
                    ID: this.state.list[i].foodLunch,
                    mealTime: 'Lunch',
                    amount: this.giveAmount(this.state.list[i].foodLunch)
                });
            }
        }


        //   let tempInfo = [];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].checkDinner && this.state.selectedMeal) {
                tempInfo.push({
                    date: this.state.list[i].date,
                    ID: this.state.list[i].foodDinner,
                    mealTime: 'Dinner',
                    amount: this.giveAmount(this.state.list[i].foodDinner)
                });
            }
        }

        this.setState({ mealInfo: tempInfo });


        // console.log('yha se', ...this.state.mealInfo);
        let lunch = 0;
        let dinner = 0;
        for (let i = 0; i < tempInfo.length; i++) {
            if (tempInfo[i].mealTime === 'Lunch') lunch += tempInfo[i].amount;
            if (tempInfo[i].mealTime === 'Dinner') dinner += tempInfo[i].amount;
        }
        this.setState({ amountLunch: lunch });
        this.setState({ amountDinner: dinner });
    }

    checkDinnerBox = (itemID) => {
        let temp = this.state.list;
        temp[itemID].checkDinner = !temp[itemID].checkDinner;
        temp[itemID].foodDinner = temp[itemID].checkDinner ? this.state.selectedMeal : '';
        this.setState({ list: temp });

        console.log(...list);

        let tempy = 0;
        for (let i = 0; i < list.length; i++) {
            if (this.state.list[i].checkDinner) tempy++;
        }
        this.setState({ y: tempy });


        let tempInfo = [];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].checkLunch && this.state.selectedMeal) {
                tempInfo.push({
                    date: this.state.list[i].date,
                    ID: this.state.list[i].foodLunch,
                    mealTime: 'Lunch',
                    amount: this.giveAmount(this.state.list[i].foodLunch)
                });
            }
        }


        //   let tempInfo = [];
        for (let i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].checkDinner && this.state.selectedMeal) {
                tempInfo.push({
                    date: this.state.list[i].date,
                    ID: this.state.list[i].foodDinner,
                    mealTime: 'Dinner',
                    amount: this.giveAmount(this.state.list[i].foodDinner)
                });
            }
        }

        this.setState({ mealInfo: tempInfo });


        //  console.log('yha se', ...this.state.mealInfo);
        let lunch = 0;
        let dinner = 0;
        for (let i = 0; i < tempInfo.length; i++) {
            if (tempInfo[i].mealTime === 'Lunch') lunch += tempInfo[i].amount;
            if (tempInfo[i].mealTime === 'Dinner') dinner += tempInfo[i].amount;
        }
        this.setState({ amountLunch: lunch });
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
                                    let temp = this.state.selectedMeal;
                                    temp = itemValue;
                                    this.setState({ selectedMeal: temp });
                                    //  console.log(temp.selectedMeal);
                                }}
                            >
                                <Picker.Item label="Lists" value="" />
                                <Picker.Item label="Roti-sabji  30" value="Roti-sabji" />
                                <Picker.Item label="Chawal-dal  35" value="Chawal-dal" />
                                <Picker.Item label="mach-bhat   50" value="mach-bhat" />
                                <Picker.Item label="murga-bhat   60" value="murga-bhat" />
                                <Picker.Item label="Litti-chokha   25" value="Litti-chokha" />
                                <Picker.Item label="paneer-dosa   55" value="paneer-dosa" />
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
                                <View key={item.date + item.mealTime} style={{ flexDirection: 'row', textAlign: 30, justifyContent: 'space-around' }}>
                                    <Text style={{ margin: 10 }}>{item.date}</Text>
                                    <Text style={{ margin: 10 }}>{item.ID}</Text>
                                    <Text style={{ margin: 10 }}>{item.mealTime}</Text>
                                    <Text style={{ margin: 10 }}>Rs {item.amount}</Text>
                                </View>
                            );
                        })}
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

export default messScreen;