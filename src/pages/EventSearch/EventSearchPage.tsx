import {
    ImageBackground,
    Pressable,
    RefreshControl,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import styles from "./style";
import React, {useEffect, useState} from "react";
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
import EventSearchComponent from "../../components/pages/EventSearch/EventSearchComponent";
import IEvent from "../../interfaces/IEvent";
import {getEvents} from "../../actions/eventActions";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const EventSearchPage = ({navigation}: IProps) => {
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [refreshing, setRefreshing] = React.useState(false);
    const [offsetCount, setOffsetCount] = useState(0)

    const limit = 6

    const getEventsAction = (limit : number, offset : number, is_me: 0 | 1, is_favorite: 0 | 1)  => {
        setIsLoading(true)
        getEvents(limit, offsetCount, is_me, is_favorite)
            .then(({data}) => {
                setIsLoading(false)
                setEvents(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setModalText('Возникла проблема с получением ивентов')
            })
    }

    useEffect(() => {
        getEventsAction(limit, 0,0,0)
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getEventsAction(limit, 0,0,0)

        setRefreshing(false);
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
                <EventSearchComponent navigation={navigation} isLoading={isLoading} events={events} getEventsAction={getEventsAction}/>
            </ImageBackground>
        </ScrollView>
    );
}

export default EventSearchPage