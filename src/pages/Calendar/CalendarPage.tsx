import {ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import React, {useEffect, useState} from "react";
import BackgroundImage from "./assets/background.png";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Header from "../../components/Header/Header";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import {EvilIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {Routes} from "../../consts/routesNames";
import CalendarPageComponent from "../../components/pages/Calendar/CalendarPageComponent";
import {getEvents} from "../../actions/eventActions";
import IEvent from "../../interfaces/IEvent";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}
const CalendarPage = ({navigation}: IProps) => {
    const [isLoading, setLoading] = useState(true)
    const [events, setEvents] = useState<IEvent[]>([])

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [refreshing, setRefreshing] = React.useState(false);

    const request = () => {
        getEvents(2,0,1,0)
            .then(({data}) => {
                setLoading(false)
                setEvents(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setLoading(false)
                setModalText('Возникла проблема с получением ивентов')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        request()

        setRefreshing(false);
    }, []);
    useEffect(() => {
        request()
    }, []);

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <CustomModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
                <CalendarPageComponent navigation={navigation} isLoading={isLoading} events={events}/>
            </ImageBackground>
        </ScrollView>
    );
}

export default CalendarPage