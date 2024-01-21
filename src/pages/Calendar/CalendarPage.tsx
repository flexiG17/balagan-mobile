import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import React, {useState} from "react";
import BackgroundImage from "./assets/background.png";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Header from "../../components/Header/Header";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import {EvilIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {Routes} from "../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

LocaleConfig.locales['ru'] = {
    monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ],
    monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    today: "Сегодня"
};

LocaleConfig.defaultLocale = 'ru';

const CalendarPage = ({navigation}: IProps) => {
    const [selected, setSelected] = useState('');

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <View style={styles.block}>
                    <Header
                        navigation={navigation}
                        title={'Календарь'}
                        searchAction={true}
                        calendarAction={true}
                    />
                    <Calendar
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markingType={'multi-dot'}
                        markedDates={{
                            '2024-01-02': {dots: [{color: '#3B285C'}, {color: '#3B285C'}]},
                            '2024-01-04': {dots: [{color: '#3B285C'}]},
                            '2024-01-05': {dots: [{color: '#3B285C'}, {color: '#3B285C'}]},
                            '2024-01-10': {dots: [{color: '#3B285C'}, {color: '#3B285C'}]},
                            '2024-01-19': {dots: [{color: '#fff'}, {color: '#fff'}]},

                            [selected]: {selected: true},
                        }}
                        style={styles.calendar}
                        theme={{
                            /*backgroundColor: '#39ff00',*/
                            calendarBackground: 'rgba(255,255,255,0)',
                            textSectionTitleColor: '#3B285C',
                            selectedDayBackgroundColor: '#3B285C',
                            selectedDayTextColor: '#fff',
                            todayTextColor: '#fff',
                            todayBackgroundColor: '#3B285C',
                            dayTextColor: '#805BC1',
                            textDisabledColor: '#AA8CC8',
                            arrowColor: '#805BC1',
                        }}
                    />
                    <View style={styles.event}>
                        <View style={styles.eventBlock}>
                            <Text style={styles.eventTime}>
                                16:00
                            </Text>
                            <View style={styles.eventDescription}>
                                <Text style={styles.eventTitle}>
                                    Модернизм
                                </Text>
                                <Text style={styles.eventText}>
                                    Выставки · Свидания
                                </Text>
                                <View style={styles.eventTicket}>
                                    <Text style={styles.eventTicketText}>
                                        Билет куплен
                                    </Text>
                                </View>
                                <Text style={styles.eventCommunity}>
                                    Коммьюнити
                                </Text>
                                <Text style={styles.eventCommunityText}>
                                    Коммьюнити, которые уже добавили мероприятие к себе
                                </Text>
                                <View style={styles.eventCommunityBlock}>
                                    <CommunityComponent id={1} navigation={navigation} text={'Все о хмели'}
                                                        size={ComponentSize.Small}/>
                                    <CommunityComponent id={2} navigation={navigation} text={'Скучно'}
                                                        size={ComponentSize.Small}/>
                                    <CommunityComponent id={3} navigation={navigation} text={'Веселье'}
                                                        size={ComponentSize.Small}/>
                                    <TouchableOpacity
                                        activeOpacity={0.6}>
                                        <View style={styles.eventCommunityIcon}>
                                            <EvilIcons name="chevron-right" size={20} color="#fff"/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.eventText}>
                                    Как пройти на мероприятие?
                                </Text>
                                <Text style={styles.eventCommunityDescription}>
                                    Город Екатеринбург, ул. Мира, 47
                                    {"\n"}
                                    {"\n"}
                                    Вход с улицы Малышева. Если возникли вопросы со {"\n"}
                                    входом, обратитесь за помощью к администратору: {"\n"}+79087608234
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.push(Routes.EVENT_ROUTE,
                                        {
                                            eventId: 1
                                        })}
                                >
                                    <Text style={styles.moreInfo}>
                                        Подробнее о мероприятии
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.separator}>
                            <Entypo name="dot-single" size={20} color="#3B285C"/>
                            <View style={styles.line}/>
                            <Entypo name="dot-single" size={20} color="#3B285C"/>
                        </View>
                        <View style={styles.eventBlock}>
                            <Text style={styles.eventTime}>
                                20:00
                            </Text>
                            <View style={styles.eventDescription}>
                                <Text style={styles.eventTitle}>
                                    Что-то другое
                                </Text>
                                <Text style={styles.eventText}>
                                    Стендап · С друзья
                                </Text>
                                <View style={styles.eventTicket}>
                                    <Text style={styles.eventTicketText}>
                                        Билет куплен
                                    </Text>
                                </View>
                                <Text style={styles.eventCommunity}>
                                    Коммьюнити
                                </Text>
                                <Text style={styles.eventCommunityText}>
                                    Коммьюнити, которые уже добавили мероприятие к себе
                                </Text>
                                <View style={styles.eventCommunityBlock}>
                                    <CommunityComponent id={4} navigation={navigation} text={'Компания'}
                                                        size={ComponentSize.Small}/>
                                    <CommunityComponent id={5} navigation={navigation} text={'Юмор'}
                                                        size={ComponentSize.Small}/>
                                    <CommunityComponent id={6} navigation={navigation} text={'На вечер'}
                                                        size={ComponentSize.Small}/>
                                    <TouchableOpacity
                                        activeOpacity={0.6}>
                                        <View style={styles.eventCommunityIcon}>
                                            <EvilIcons name="chevron-right" size={20} color="#fff"/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.eventText}>
                                    Как пройти на мероприятие?
                                </Text>
                                <Text style={styles.eventCommunityDescription}>
                                    Город Екатеринбург, ул. Мира, 47
                                    {"\n"}
                                    {"\n"}
                                    Вход с улицы Малышева. Если возникли вопросы со {"\n"}
                                    входом, обратитесь за помощью к администратору: {"\n"}+79087608234
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.push(Routes.EVENT_ROUTE, {
                                        eventId: 2
                                    })}>
                                    <Text style={styles.moreInfo}>
                                        Подробнее о мероприятии
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

export default CalendarPage