import styles from './style'
import BackgroundImage from './assets/background.png'
import {ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {AntDesign, Entypo} from '@expo/vector-icons';
import Map from "../../components/shared/map/Map";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import EventComponent from "../../components/Cards/Event/EventComponent";
import {Routes} from "../../consts/routesNames";
import UserComponent from "../../components/Cards/User/UserComponent";
import EventPageComponent from "../../components/pages/Event/EventPageComponent";
import {getEvents, getSingleEvent} from "../../actions/eventActions";
import IEvent from "../../interfaces/IEvent";
import Loading from "../../components/shared/loading/Loading";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

type RouteParamList = {
    params: {
        event_id: string
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
    route: RouteProp<RouteParamList>
}

const EventPage = ({route, navigation}: IProps) => {
    const [event, setEvent] = useState<IEvent>({event_id: '', name: ''})
    const [isLoading, setIsLoading] = useState(true)

    const [popularEvents, setPopularEvents] = useState<IEvent[]>([])
    const [isEventLoading, setIsEventLoading] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [refreshing, setRefreshing] = React.useState(false);
    const event_id = route.params.event_id

    const getSingleEventAction = (event_id: string) => {
        setIsLoading(true)
        getSingleEvent(event_id)
            .then(({data}) => {
                setIsLoading(false)
                setEvent(data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением ивента')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getSingleEventAction(event_id)

        setRefreshing(false);
    }, []);

    useEffect(() => {
        getSingleEventAction(event_id)
    }, []);

    useEffect(() => {
        getEvents(2, 7, 0, 0)
            .then(({data}) => {
                setIsEventLoading(false)
                setPopularEvents(data.data)
            })
            .catch((e) => {
                setIsLoading(false)
                setModalVisible(true)
                setModalText('Возникла проблема с получением ивентов')
            })
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

                <EventPageComponent isLoading={isLoading} navigation={navigation} event={event}
                                    isPopularEventsLoading={isEventLoading} popularEvents={popularEvents}/>
            </ImageBackground>
        </ScrollView>
    )
}

export default EventPage