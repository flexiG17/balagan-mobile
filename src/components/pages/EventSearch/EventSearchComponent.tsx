import styles from "./style";
import HeaderWithBack from "../../Header/HeaderWithBack/HeaderWithBack";
import Search from "../../shared/search/Search";
import {Pressable, Text, TouchableOpacity, View} from "react-native";
import getDates from "../../../consts/dates";
import Pagination from "../../shared/pagination/Pagination";
import React, {Dispatch, SetStateAction, useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import IEvent from "../../../interfaces/IEvent";
import Loading from "../../shared/loading/Loading";
import EventComponent from "../../Cards/Event/EventComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
    events: IEvent[],
    isLoading: boolean,
    getEventsAction: (limit : number, offset : number, is_me: 0 | 1, is_favorite: 0 | 1) => any
}

let clickMoreEventsCount = 1

const EventSearchComponent = ({navigation, events, isLoading, getEventsAction}: IProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickTakeMore = () => {
        clickMoreEventsCount+= 1
        getEventsAction(6 * clickMoreEventsCount, 0, 0, 0)
    }

    return (
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
                {isLoading
                    ?
                    <Loading/>
                    :
                    <View style={styles.eventGrid}>
                        {events.map((event) => {
                            return <EventComponent event={event} navigation={navigation}/>
                        })}
                </View>}
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={handleClickTakeMore}
                >
                    <Text style={styles.buttonText}>
                        Загрузить ещё
                    </Text>
                    {isLoading && <Loading size={20} color={'#fff'}/>}
                </TouchableOpacity>
                {/*<Pagination/>*/}
            </View>
        </Pressable>
    )
}

export default EventSearchComponent