import {View, Text, TextInput, TouchableOpacity} from "react-native";
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import styles from "./style";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {AntDesign, Entypo} from "@expo/vector-icons";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import React, {useState} from "react";
import {Routes} from "../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any>
}

const VerificationPage = ({navigation}: IProps) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.block}>
                <HeaderWithBack navigation={navigation} title={'Верификация'}/>
                <View style={styles.sectionData}>
                    <Text style={styles.title}>
                        Верификация
                    </Text>
                    <Text style={styles.text}>
                        Вы не верифицированы!{"\n"}{"\n"}
                        Пройдите этап проверки данных, чтобы{"\n"}создавать события.
                    </Text>
                </View>
                <View style={styles.sectionData}>
                    <Text style={styles.sectionTitle}>
                        ФИО
                    </Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.sectionData}>
                    <Text style={styles.sectionTitle}>
                        Дата рождения
                    </Text>
                    <View style={styles.documentSection}>
                        <TextInput
                            keyboardType={'numeric'}
                            style={[styles.input, {width: '90%'}]}
                            defaultValue={date.toLocaleDateString('ru')}
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
                <View style={styles.sectionData}>
                    <Text style={styles.sectionTitle}>
                        Полный адрес
                    </Text>
                    <Text style={styles.description}>
                        Регион, город, улица, дом, квартира
                    </Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.sectionData}>
                    <Text style={styles.sectionTitle}>
                        Серия и номер паспорта
                    </Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.sectionData}>
                    <View style={styles.documentSection}>
                        <View style={styles.documentText}>
                            <Text style={styles.sectionTitle}>
                                Прикрепите свой паспорт
                            </Text>
                            <Text style={styles.description}>
                                Основная страница + прописка
                            </Text>
                        </View>
                        <View style={styles.addIcon}>
                            <TouchableOpacity
                                activeOpacity={0.6}>
                                <AntDesign name="plus" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => {
                    // save to localstorage verification status
                    navigation.pop()
                    navigation.navigate(Routes.CREATING_EVENT_ROUTE)
                }}
            >
                <Text style={styles.buttonText}>
                    Далее
                </Text>
            </TouchableOpacity>
        </Layout>
    )
}

export default VerificationPage