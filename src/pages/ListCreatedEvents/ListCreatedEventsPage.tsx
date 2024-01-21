import styles from './style'
import {ImageBackground, Pressable, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useRef, useState} from "react";
import BackgroundImage from "./assets/background.png";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import Search from "../../components/shared/search/Search";
import {Feather} from '@expo/vector-icons';
import EventComponent from "../../components/Cards/Event/EventComponent";
import EventStatus from "../../consts/eventStatus";
import Pagination from "../../components/shared/pagination/Pagination";
import {Routes} from "../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const ListCreatedEventsPage = ({navigation}: IProps) => {
    const [isCompletedHidden, setTsCompletedHidden] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const scrollRef = useRef(null);

    return (
        <ScrollView
            ref={scrollRef}
            scrollEnabled={!isCompletedHidden}
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
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
                            <EventComponent isEditMode={true} status={EventStatus.Agreed} navigation={navigation} id={1}/>
                            <EventComponent isEditMode={true} status={EventStatus.NoAgreed} navigation={navigation} id={2}/>
                            <EventComponent isEditMode={true} status={EventStatus.Wait} navigation={navigation} id={3}/>
                            <EventComponent isEditMode={true} status={EventStatus.Wait} navigation={navigation} id={4}/>
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
                            <EventComponent isEditMode={true} status={EventStatus.Completed} navigation={navigation}
                                            id={5}/>
                            <EventComponent isEditMode={true} status={EventStatus.Completed} navigation={navigation}
                                            id={6}/>
                        </View>}
                    </View>
                </Pressable>
            </ImageBackground>
        </ScrollView>

    )
}

export default ListCreatedEventsPage