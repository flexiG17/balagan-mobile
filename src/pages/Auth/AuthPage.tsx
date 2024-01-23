import {ActivityIndicator, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import React, {useEffect, useState} from "react";
import BackgroundImage from "../../assets/backgrounds/darkBackground.png";
import Layout from "../../components/layout/Layout";
import {Routes} from "../../consts/routesNames";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import {loginRequest} from "../../actions/userAction";

const AuthPage = ({navigation}: NativeStackScreenProps<any, string>) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalButton, setModalButton] = useState(true);

    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {

        if (login === '' || login === null) {
            setModalText('Логин не может быть пустым')
            setModalVisible(true)
        } else if (password === '' || password === null) {
            setModalText('Пароль не может быть пустым')
            setModalVisible(true)
        } else {
            setIsLoading(true)
            loginRequest(login, password)
                .then(() => {
                    setModalVisible(true)
                    setModalText('Успешная авторизация!')
                    setModalButton(false)
                    setIsLoading(false)

                    setTimeout(() => {
                        setModalVisible(false)
                        navigation.navigate(Routes.SELECT_FAVORITE_ROUTE)
                    }, 1500)
                })
                .catch((data) => {
                    setIsLoading(false)
                    setModalText(data.response.data)
                    setModalVisible(true)
                })
        }
    }

    return (
        <Layout background={BackgroundImage}>
            <CustomModalComponent withButton={modalButton} modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
            <View style={styles.container}>
                <View style={styles.titlePosition}>
                    <Text style={styles.title}>
                        Войти
                    </Text>
                </View>
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
                    placeholderTextColor={'#72777A'}
                    secureTextEntry={true}/>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.REGISTRATION_ROUTE)} style={{marginLeft: "auto"}}>
                    <Text style={styles.error}>
                        Нет аккаунта
                    </Text>
                </TouchableOpacity>
                {isLoading
                    ?
                    <ActivityIndicator size="large" color="#AA69B7" style={{marginTop: 40}}/>
                    :
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={handleClick}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Войти
                        </Text>
                    </TouchableOpacity>}
            </View>
        </Layout>
    );
}

export default AuthPage