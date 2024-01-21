import {ImageBackground, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import React, {useState} from "react";
import BackgroundImage from "./assets/background.png";
import Layout from "../../components/layout/Layout";
import {Routes} from "../../consts/routesNames";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import getDates from "../../consts/dates";
import EventComponent from "../../components/Cards/Event/EventComponent";
import Search from "../../components/shared/search/Search";
import Pagination from "../../components/shared/pagination/Pagination";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const EventSearchPage = ({navigation}: IProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <Pressable
                    style={modalVisible && {backgroundColor: 'rgba(23,14,61,0.29)'}}
                >
                    <View style={styles.block}>
                        <HeaderWithBack navigation={navigation} title={'Поиск событий'}/>
                        <Search filterType={'event'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                        <View style={styles.calendarBlock}>
                            <View style={styles.calendarTextBlock}>
                                <Text style={styles.calendarMonth}>
                                    Январь
                                </Text>
                                <Text style={styles.calendarRange}>
                                    Выбрать промежуток
                                </Text>
                            </View>
                            <View style={styles.calendarDatePicker}>
                                {getDates().map(({day, text, isToday}) => {
                                    return <View key={day} style={styles.calendarDateBlock}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                        >
                                            <Text style={[styles.calendarDateText, isToday && styles.calendarCurrentDay]}>
                                                {day}
                                            </Text>
                                            <Text style={styles.calendarDateTextDescription}>
                                                {text}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                })}
                            </View>
                        </View>
                        <View style={styles.eventGrid}>
                            <EventComponent id={1} navigation={navigation}/>
                            <EventComponent id={1} navigation={navigation}/>
                            <EventComponent id={1} navigation={navigation}/>
                            <EventComponent id={1} navigation={navigation}/>
                            <EventComponent id={1} navigation={navigation}/>
                            <EventComponent id={1} navigation={navigation}/>
                        </View>
                        <Pagination/>
                    </View>
                </Pressable>
            </ImageBackground>
        </ScrollView>
    );
}

export default EventSearchPage