import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import React from "react";
import Layout from "../../components/layout/Layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import BackgroundImage from '../../assets/backgrounds/darkBackground.png';
import {AUTH_ROUTE} from "../../consts/routesNames";


const Registration = ({navigation} : NativeStackScreenProps<any, string> ) => {
    return (
        <ImageBackground source={BackgroundImage} style={styles.background}>
            <Layout>
                <View style={styles.container}>
                    <View style={styles.titlePosition}>
                        <Text style={styles.title}>
                            Регистрация
                        </Text>
                    </View>
                    <TextInput
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
                    {/*Я соглашаюсь на обработку ....*/}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(AUTH_ROUTE)
                        }}
                        activeOpacity={0.75}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                </View>
            </Layout>
        </ImageBackground>
    );
}

export default Registration