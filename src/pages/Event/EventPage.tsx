import styles from './style'
import BackgroundImage from './assets/background.png'
import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
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

type RouteParamList = {
    params: {
        eventId: number
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
    route: RouteProp<RouteParamList>
}

const EventPage = ({route, navigation}: IProps) => {
    const eventId = route.params.eventId
    const eventName = 'Дегустация сыра'
    const isFavorite = false
    const stats = 245
    const price = 300
    const date = new Date().toLocaleDateString('ru')
    const registeredUsers = 32
    const text =
        `Погрузитесь в мир дегустации прямо на мероприятии!
         \nНайдите себе компанию и проведите время на 5+, наслаждаясь вкуснейшими напитками, сделанными на Урале.
         `
    const mapDescription =
        `Город Екатеринбург, ул. Луначарского, 38
\nВход с улицы Луначарского. Если возникли вопросы со входом, обратитесь за помощью к администратору: +79087608234`

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <View style={styles.block}>
                    <HeaderWithBack navigation={navigation} title={`${eventName} ${eventId}`}/>
                    <View style={styles.image}>
                        <View style={styles.imageIcons}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <AntDesign name={isFavorite ? 'heart' : 'hearto'}
                                           size={24} color="#3B285C"/>
                            </TouchableOpacity>
                            <View style={styles.eventStats}>
                                <Text style={styles.statsText}>
                                    {stats} просмотров
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.eventData}>
                        <View style={[styles.dataBlock, {width: 100}]}>
                            <Text style={styles.dataTitle}>
                                {price} р
                            </Text>
                            <Text style={styles.dataDescription}>
                                цена
                                {"\n"}
                                мероприятия
                            </Text>
                        </View>
                        <View style={styles.separatorLine}/>
                        <View style={styles.dataBlock}>
                            <Text style={styles.dataTitle}>
                                {date} в 15:00
                            </Text>
                            <Text style={styles.dataDescription}>
                                дата
                                {"\n"}
                                проведения
                            </Text>
                        </View>
                        <View style={styles.separatorLine}/>
                        <View style={[styles.dataBlock, {width: 125}]}>
                            <Text style={styles.dataTitle}>
                                {registeredUsers}
                            </Text>
                            <Text style={styles.dataDescription}>
                                зарегистрированных
                                {"\n"}
                                участника
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.description}>
                        {text}
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => navigation.push(Routes.REGISTRATION_ON_EVENT_ROUTE,
                            {
                                event: {
                                    id: eventId,
                                    title: eventName
                                }
                            })}
                    >
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.groupDataBlock}>
                        <View style={styles.profileGrid}>
                            <Text style={styles.newEvent}>
                                Предложить событие{"\n"}
                                коммьюнити
                            </Text>
                            <View style={styles.addPhotoIcon}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                >
                                    <AntDesign name="plus" size={20} color="#fff"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Отзывы и оценки
                        </Text>
                        <Text style={styles.sectionText}>
                            Отзывов еще нет, будьте первым!
                        </Text>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Как нас найти?
                        </Text>
                        <Text style={styles.sectionText}>
                            {mapDescription}
                        </Text>
                        <Map/>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Ищут компанию
                        </Text>
                        <View style={styles.profileGrid}>
                            <UserComponent name={'Вера крутова'} id={1} navigation={navigation}/>
                            <UserComponent name={'Вася Пупкин'} id={1} navigation={navigation}/>
                            <UserComponent name={'Иван Иванов'} id={1} navigation={navigation}/>
                            <UserComponent name={'Валерия Якушева'} id={1} navigation={navigation}/>
                        </View>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Коммьюнити
                        </Text>
                        <Text style={[styles.sectionText, {fontWeight: '600'}]}>
                            Коммьюнити, которые уже добавили мероприятие к себе
                        </Text>
                        <View style={styles.profileGrid}>
                            <CommunityComponent text={'Все о хмели'} size={ComponentSize.Big} id={5} navigation={navigation}/>
                            <CommunityComponent text={'Скучно жить?'} size={ComponentSize.Big} id={6} navigation={navigation}/>
                            <CommunityComponent text={'Скучно жить?'} size={ComponentSize.Big} id={7} navigation={navigation}/>
                            <View style={styles.iconBlock}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <Entypo name="chevron-thin-right" size={14} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Популярно на этой неделе
                        </Text>
                        <View style={styles.profileGrid}>
                            <EventComponent navigation={navigation} id={3}/>
                            <EventComponent navigation={navigation} id={4} isFavorite={true}/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default EventPage