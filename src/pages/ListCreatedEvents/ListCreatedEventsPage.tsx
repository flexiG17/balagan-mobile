import styles from './style'
import {ImageBackground, Pressable, RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import BackgroundImage from "./assets/background.png";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import Search from "../../components/shared/search/Search";
import {Feather} from '@expo/vector-icons';
import EventComponent from "../../components/Cards/Event/EventComponent";
import EventStatus from "../../consts/eventStatus";
import Pagination from "../../components/shared/pagination/Pagination";
import {Routes} from "../../consts/routesNames";
import {getEvents} from "../../actions/eventActions";
import axios from "axios";
import {AUTH_TOKEN, AXIOS_URL} from "../../consts/systemConsts";
import IEvent from "../../interfaces/IEvent";
import Loading from "../../components/shared/loading/Loading";
import * as events from "events";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const ListCreatedEventsPage = ({navigation}: IProps) => {
    const [isCompletedHidden, setTsCompletedHidden] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const scrollRef = useRef(null);

    const [modalPopupVisible, setModalPopupVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const getModeratorEvents = async (limit: number, offset: number, is_me: boolean) => {
        return await axios.get(`${AXIOS_URL}/events/check`, {
            headers: {
                'Authorization': AUTH_TOKEN,
                "Content-Type": 'application/json',
            },
            params: {
                limit,
                offset,
                is_me
            }
        })
    }

    useEffect(() => {
        getModeratorEvents(20, 0, true)
            .then(({data}) => {
                console.log(data);
                setEvents(data.data)
                setIsLoading(false)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }, []);


    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getModeratorEvents(20, 0, true)

        setRefreshing(false);
    }, []);

    return (
        <ScrollView
            ref={scrollRef}
            scrollEnabled={!isCompletedHidden}
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
            <CustomModalComponent modalVisible={modalPopupVisible} setModalVisible={setModalPopupVisible}
                                  text={modalText}/>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <Pressable
                    style={modalVisible && {
                        backgroundColor: 'rgba(23,14,61,0.29)'
                    }}
                >
                    <View style={styles.block}>
                        <HeaderWithBack navigation={navigation} title={'Созданные мероприятия'}/>
                        <Search filterType={'event'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                navigation.push(Routes.CREATING_EVENT_ROUTE)
                            }}
                        >
                            <View style={styles.createEvent}>
                                <Feather name="plus-square" size={20} color="#fff" style={{paddingTop: 5}}/>
                                <Text style={styles.createEventText}>
                                    Создать мероприятие
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.grid}>
                            {isLoading
                                ?
                                <Loading/>
                                :
                                <>
                                    {events.map((event) => {
                                        return <EventComponent key={event.event_id} event={event}
                                                               navigation={navigation} isEditMode={true}/>
                                    })}
                                </>}
                        </View>
                        <Pagination/>

                        <View style={styles.titleWithIcon}>
                            <Text style={styles.endedTitle}>
                                Завершенные
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    setTsCompletedHidden(!isCompletedHidden)

                                    // @ts-ignore
                                    scrollRef.current?.scrollTo({
                                        y: 0,
                                        animated: true,
                                    });
                                }}
                            >
                                {isCompletedHidden
                                    ? <Feather name="eye" size={20} color="black"/>
                                    : <Feather name="eye-off" size={20} color="black"/>}
                            </TouchableOpacity>
                        </View>
                        {!isCompletedHidden && <View style={styles.grid}>
                            {/*<EventComponent isEditMode={true} status={EventStatus.Completed} navigation={navigation}
                                            id={5}/>
                            <EventComponent isEditMode={true} status={EventStatus.Completed} navigation={navigation}
                                            id={6}/>*/}
                        </View>}
                    </View>
                </Pressable>
            </ImageBackground>
        </ScrollView>

    )
}

export default ListCreatedEventsPage