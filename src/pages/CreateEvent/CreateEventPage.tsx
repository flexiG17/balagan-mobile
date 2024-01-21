import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import BackgroundImage from "./assets/background.png";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import styles from './style'
import React, {useState} from "react";
import {AntDesign} from '@expo/vector-icons';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {sections} from "../../consts/sections";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import Map from "../../components/shared/map/Map";
import {Routes} from "../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>
}

const CreateEventPage = ({navigation}: IProps) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate : Date) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <View style={styles.block}>
                    <HeaderWithBack navigation={navigation} title={'Создание мероприятия'}/>

                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Название мероприятия
                        </Text>
                        <TextInput
                            style={styles.search}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Дата и время
                        </Text>
                        <View style={styles.inputWithIcon}>
                            <TextInput
                                keyboardType={'decimal-pad'}
                                style={[styles.search, {width: '90%'}]}
                                defaultValue={date.toLocaleDateString('ru')}
                                value={date.toLocaleDateString('ru')}
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setShow(true)}
                            >
                                <AntDesign name="calendar" size={24} color="#623EA0" style={{marginTop: 2}}/>
                            </TouchableOpacity>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                // @ts-ignore
                                onChange={onChange}
                            />
                        )}
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Место проведения
                        </Text>
                        <TextInput
                            style={styles.search}
                            defaultValue={'г. Екатеринбург, ул. Луначарского, 38'}
                            editable={false}
                        />
                        <Map/>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Описание
                        </Text>
                        <Text style={styles.description}>
                            макс. знаков = 500
                        </Text>
                        <TextInput
                            style={[styles.search, styles.multiline]}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Разделы
                        </Text>
                        <View style={styles.sectionGrid}>
                            {sections.map((section) => {
                                return <Chip title={section} size={ComponentSize.Small}/>
                            })}
                        </View>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Цена
                        </Text>
                        <TextInput
                            style={styles.search}
                            placeholder={'указывается в рублях'}
                            placeholderTextColor={'#858585'}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Лимит человек
                        </Text>
                        <TextInput
                            style={styles.search}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Добавить фото
                        </Text>
                        <View style={styles.addPhotoIcon}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                            >
                                <AntDesign name="plus" size={24} color="#fff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Мои коммьюнити
                        </Text>
                        <View style={styles.communityGrid}>
                            <CommunityComponent id={1} navigation={navigation} text={'Все о хмели'}/>
                            <CommunityComponent id={2} navigation={navigation} text={'Скучно жить?'}/>
                            <CommunityComponent id={3} navigation={navigation} text={'Скучно жить?'}/>
                            <CommunityComponent id={4} navigation={navigation} text={'Скучно жить?'}/>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.submitButton}
                        onPress={() => navigation.navigate(Routes.LIST_CREATED_EVENTS_ROUTE)}
                    >
                        <Text style={styles.submitButtonText}>
                            Создать
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default CreateEventPage