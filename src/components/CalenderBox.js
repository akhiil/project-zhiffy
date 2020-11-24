import React, { Component, useState } from 'react';
import { Text, Input } from 'react-native-elements';
// import Spacer from '../components/Spacer';

import {
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Image,
    Button,
    Dimensions,
    CheckBox,
    FlatList
} from 'react-native';

const phw = Dimensions.get('window').width;
const phh = Dimensions.get('window').height;



export default class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    }



    checkLunchBox = (itemID) => {
        let temp = this.state.list;
        temp[itemID].checkLunch = !temp[itemID].checkLunch
        this.setState({ list: temp });
    }

    checkDinnerBox = (itemID) => {
        let list = this.state.list
        list[itemID].checkDinner = !list[itemID].checkDinner
        this.setState({ list: list })
    }



    render() {
        return (
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                data={this.state.list}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text>{item.date}</Text>
                            <View style={styles.checkboxContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                        value={this.state.list[item.id].checkLunch}
                                        onValueChange={() => this.checkLunchBox(item.id)}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Lunch</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                        value={this.state.list[item.id].checkDinner}
                                        onValueChange={() => this.checkDinnerBox(item.id)}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Dinner</Text>
                                </View>
                            </View>
                        </View>
                    );
                }} />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        marginVertical: 10,
        marginHorizontal: 4,
        padding: 10
    },
    checkboxContainer: {
        marginVertical: 15
    },
    checkbox: {
        alignSelf: "center"
    },
    label: {
        margin: 8
    },
});