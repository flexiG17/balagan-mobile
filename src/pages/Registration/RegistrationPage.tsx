import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import React from "react";
import Layout from "../../components/layout/Layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import BackgroundImage from '../../assets/backgrounds/darkBackground.png';
import {Routes} from "../../consts/routesNames";


const RegistrationPage = ({navigation}: NativeStackScreenProps<any, string>) => {
    return (
        <Layout background={BackgroundImage}>
            <View style={styles.container}>
                <View style={styles.titlePosition}>
                    <Text style={styles.title}>
                        Регистрация
                    </Text>
                </View>
                <TextInput
                    autoComplete={'name'}
                    style={styles.input}
                    keyboardType={"default"}
                    placeholder="Имя"
                    placeholderTextColor={'#72777A'}/>
                <TextInput
                    autoComplete={'name'}
                    style={styles.input}
                    keyboardType={"default"}
                    placeholder="Фамилия"
                    placeholderTextColor={'#72777A'}/>
                <TextInput
                    autoComplete={'email'}
                    style={styles.input}
                    keyboardType={"email-address"}
                    placeholder="Логин"
                    placeholderTextColor={'#72777A'}/>
                <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    placeholderTextColor={'#72777A'}/>
                <TextInput
                    style={styles.input}
                    placeholder="Подтверждение пароля"
                    secureTextEntry={true}
                    placeholderTextColor={'#72777A'}/>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Routes.AUTH_ROUTE)
                    }}
                    activeOpacity={0.75}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar
                barStyle={'light-content'}
            />
        </Layout>
    );
}

export default RegistrationPage