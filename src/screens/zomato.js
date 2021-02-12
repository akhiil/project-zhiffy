import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, FlatList, ImageBackground, Image } from 'react-native'
import Dash from 'react-native-dash';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const array = [
    {
        name: 'Filters',
        icon: <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
    },
    {
        name: 'Rating 4.0+'
    }, {
        name: 'Takeaway'
    }, {
        name: 'Fastest Delivery'
    }, {
        name: 'Rating'
    }, {
        name: 'cost'
    }
]

const images = [
    {
        id: '1',
        name: 'name-1',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '2',
        name: 'name-2',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '3',
        name: 'name-3',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '4',
        name: 'name-4',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '5',
        name: 'name-5',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '6',
        name: 'name-6',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '7',
        name: 'name-7',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }, {
        id: '8',
        name: 'name-8',
        src: <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100 }} source={{ uri: 'https://picsum.photos/60' }} />
    }
]

export default class zomato extends Component {
    render() {
        return (
            <>
                <View style={{ marginTop: '10%' }}>
                    <Octicons name="location" size={24} color="black" style={{ marginTop: '12%', marginLeft: 15 }} />
                    <View style={{ paddingHorizontal: 30, marginTop: '-7.5%', marginRight: 45, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>Ashok Nagar, Lohia Nag...</Text>
                        <Dash dashColor='gray' style={{ height: 1, }} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#d9d9d9', marginHorizontal: 15, height: 45, borderRadius: 20, marginTop: '6%' }}>
                    <Feather name="search" size={23} color="#f54040" style={{ marginLeft: 13, marginTop: '2.5%' }} />
                    <TextInput placeholder="Resturant Name, Cuisine or a dish..." style={{ paddingHorizontal: 10, marginBottom: '1%' }} />
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={array}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => {

                            return (
                                <View style={{
                                    borderColor: 'lightgray',
                                    borderWidth: 1,
                                    paddingVertical: 3.5,
                                    marginHorizontal: 10,
                                    borderRadius: 20,
                                    paddingHorizontal: 10,
                                    flexDirection: 'row',
                                    marginVertical: 18
                                }}>
                                    {item.icon ? <View style={{ marginRight: 4 }}>{item.icon}</View> : null}
                                    <Text style={{ color: 'gray', marginTop: 1 }}>{item.name}</Text>
                                </View>
                            )
                        }} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '90%' }}>
                        <Image style={{ height: 190, width: 335, marginLeft: 12 }} source={require('../../assets/image1.png')} />
                    </View>

                    <View style={{ marginLeft: 12, marginTop: 20 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#4f4e4e' }}>Eat what makes you happy</Text>
                    </View>

                    <View style={{ marginTop: 7 }}>
                        <FlatList data={images}
                            numColumns={4}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginHorizontal: '4%', marginVertical: 8 }}>
                                        <View style={{ marginVertical: 5 }}>
                                            {item.src}
                                        </View>
                                        <Text style={{ marginLeft: 10, color: '#666666', marginTop: 4 }}>{item.name}</Text>
                                    </View>
                                );
                            }} />
                    </View>
                    <View style={{
                        paddingVertical: 6, alignItems: 'center', justifyContent: 'center', marginVertical: 12,
                        flexDirection: 'row', borderWidth: 1, borderColor: '#c7c7c7', marginHorizontal: 10, borderRadius: 8
                    }}>
                        <Text style={{}}>see more</Text>
                        <AntDesign name="down" size={18} color="black" />
                    </View>

                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 12 }}>328 resturants around You</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                            <ImageBackground
                                style={{ width: 350, height: 200, resizeMode: 'contain' }}
                                source={{ uri: 'https://picsum.photos/340/200' }}
                                imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 15 }}>
                                <View style={{ backgroundColor: 'white', height: 35, width: 35, marginLeft: '87%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 4, marginTop: 15 }}>
                                    <FontAwesome5 style={{}} name="bookmark" size={20} color="black" />
                                </View>
                                <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: '#1566e8', paddingHorizontal: 5, paddingVertical: 2, borderBottomEndRadius: 4, borderTopRightRadius: 4 }}>
                                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13 }}>35% OFF</Text>
                                    </View>
                                    <View style={{ backgroundColor: 'lightgray', paddingVertical: 1, paddingHorizontal: 6, borderRadius: 4, marginRight: 6 }}>
                                        <Text style={{ fontSize: 13 }}>43 mins</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ paddingBottom: 8, borderWidth: 2, borderTopColor: 'white', marginHorizontal: 5, borderColor: 'lightgray', borderBottomEndRadius: 7, borderBottomLeftRadius: 7 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginVertical: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto' }}>Harilal's</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Fontisto name="star" size={18} color="red" />
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 4 }}>4.4</Text><Text style={{ color: 'gray', marginTop: 3 }}>/5</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 2 }}>
                                <Text style={{ fontSize: 16, color: 'gray' }}>Mithai, street food, fast food</Text>
                                <Text style={{ fontSize: 16, color: 'gray' }}>Rs 100 for one</Text>
                            </View>
                            <View style={{ borderColor: 'lightgray', borderWidth: .5, marginHorizontal: 15, marginTop: 15, marginBottom: 7 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 24, height: 24, borderRadius: 20, backgroundColor: '#6ea1f0', padding: 3 }}>
                                        <SimpleLineIcons name="graph" size={17} color="white" />
                                    </View>
                                    <Text style={{ marginLeft: 5, color: 'gray' }}>43575+ people ordered from </Text>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ height: 22, width: 22, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 2 }}>
                                        <MaterialCommunityIcons name="shield-check" size={16} color="yellow" />
                                    </View>
                                    <View style={{ backgroundColor: '#dae02d', paddingHorizontal: 6, borderWidth: 2, borderLeftColor: 'green', height: 19, marginTop: 3, marginLeft: -2, borderRadius: 4 }}>
                                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}>MAX</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                            <ImageBackground
                                style={{ width: 350, height: 200, resizeMode: 'contain' }}
                                source={{ uri: 'https://picsum.photos/340/200' }}
                                imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 15 }}>
                                <View style={{ backgroundColor: 'white', height: 35, width: 35, marginLeft: '87%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 4, marginTop: 15 }}>
                                    <FontAwesome5 style={{}} name="bookmark" size={20} color="black" />
                                </View>
                                <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: '#1566e8', paddingHorizontal: 5, paddingVertical: 2, borderBottomEndRadius: 4, borderTopRightRadius: 4 }}>
                                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13 }}>50% OFF</Text>
                                    </View>
                                    <View style={{ backgroundColor: 'lightgray', paddingVertical: 1, paddingHorizontal: 6, borderRadius: 4, marginRight: 6 }}>
                                        <Text style={{ fontSize: 13 }}>38 mins</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ paddingBottom: 8, borderWidth: 2, borderTopColor: 'white', marginHorizontal: 5, borderColor: 'lightgray', borderBottomEndRadius: 7, borderBottomLeftRadius: 7 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginVertical: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto' }}>Zhiffy chat shop</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Fontisto name="star" size={18} color="red" />
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 4 }}>4.1</Text><Text style={{ color: 'gray', marginTop: 3 }}>/5</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 2 }}>
                                <Text style={{ fontSize: 16, color: 'gray' }}>Chat shop, spicy masala</Text>
                                <Text style={{ fontSize: 16, color: 'gray' }}>Rs 60 for one</Text>
                            </View>
                            <View style={{ borderColor: 'lightgray', borderWidth: .5, marginHorizontal: 15, marginTop: 15, marginBottom: 7 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 24, height: 24, borderRadius: 20, backgroundColor: '#6ea1f0', padding: 3 }}>
                                        <SimpleLineIcons name="graph" size={17} color="white" />
                                    </View>
                                    <Text style={{ marginLeft: 5, color: 'gray' }}>28975+ people ordered from here </Text>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ height: 22, width: 22, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 2 }}>
                                        <MaterialCommunityIcons name="shield-check" size={16} color="yellow" />
                                    </View>
                                    <View style={{ backgroundColor: '#dae02d', paddingHorizontal: 6, borderWidth: 2, borderLeftColor: 'green', height: 19, marginTop: 3, marginLeft: -2, borderRadius: 4 }}>
                                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}>MAX</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                    </View>

                </ScrollView>
            </>
        )
    }
}
