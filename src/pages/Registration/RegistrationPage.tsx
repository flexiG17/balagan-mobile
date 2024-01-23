import {ActivityIndicator, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style";
import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/Layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import BackgroundImage from '../../assets/backgrounds/darkBackground.png';
import {Routes} from "../../consts/routesNames";
import {registration} from "../../actions/userAction";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

const RegistrationPage = ({navigation}: NativeStackScreenProps<any, string>) => {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [isLoading, setIsLoading] = useState(false)

    const handleRegistration = () => {
        if (name === '' || name === null) {
            setModalText('Имя не может быть пустым')
            setModalVisible(true)
        } else if (login === '' || login === null) {
            setModalText('Логин не может быть пустым')
            setModalVisible(true)
        } else if (password === '' || password === null) {
            setModalText('Пароль не может быть пустым')
            setModalVisible(true)
        } else if (secondPassword !== password) {
            setModalText('Пароли не совпадают')
            setModalVisible(true)
        } else {
            setIsLoading(true)
            registration({login, password, name})
                .then(() => {
                    setIsLoading(false)
                    setModalText('Вы успешно зарегистрировались')
                    setModalVisible(true)
                    setTimeout(() => {
                        setModalVisible(false)
                        navigation.navigate(Routes.AUTH_ROUTE)
                    }, 1500)
                })
                .catch((data) => {
                    setIsLoading(false)
                    setModalText(data.response.data)
                    setModalVisible(true)
                })
        }
    }

    const isPasswordsSame =
        password === secondPassword
        && (password !== null && secondPassword !== null)

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.container}>
                <CustomModalComponent
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    text={modalText}
                />
                <View style={styles.titlePosition}>
                    <Text style={styles.title}>
                        Регистрация
                    </Text>
                </View>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    autoComplete={'name'}
                    style={styles.input}
                    keyboardType={"default"}
                    placeholder="Имя"
                    placeholderTextColor={'#72777A'}/>
                {/*<TextInput
                    autoComplete={'name'}
                    style={styles.input}
                    keyboardType={"default"}
                    placeholder="Фамилия"
                    placeholderTextColor={'#72777A'}/>*/}
                <TextInput
                    value={login}
                    onChangeText={setLogin}
                    autoComplete={'email'}
                    style={styles.input}
                    keyboardType={"email-address"}
                    placeholder="Логин"
                    placeholderTextColor={'#72777A'}/>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    placeholderTextColor={'#72777A'}/>
                <TextInput
                    value={secondPassword}
                    onChangeText={setSecondPassword}
                    style={[styles.input, !isPasswordsSame && {borderColor: 'red', borderWidth: 3}]}
                    placeholder="Подтверждение пароля"
                    secureTextEntry={true}
                    placeholderTextColor={'#72777A'}/>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate(Routes.AUTH_ROUTE)}>
                    <Text style={styles.helpText}>
                        У меня есть аккаунт
                    </Text>
                </TouchableOpacity>
                {isLoading
                    ?
                    <ActivityIndicator size="large" color="#AA69B7" style={{marginTop: 40}}/>
                    :
                    <TouchableOpacity
                        onPress={handleRegistration}
                        activeOpacity={0.75}
                        style={styles.submitButton}>
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>}
            </View>
            <StatusBar
                barStyle={'light-content'}
            />
        </Layout>
    );
}

export default RegistrationPage