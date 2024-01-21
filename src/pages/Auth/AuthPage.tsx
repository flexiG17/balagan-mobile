import {Pressable, Text, TextInput, View} from 'react-native';
import styles from "./style";
import React from "react";
import BackgroundImage from "../../assets/backgrounds/darkBackground.png";
import Layout from "../../components/layout/Layout";
import {Routes} from "../../consts/routesNames";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const AuthPage = ({navigation}: NativeStackScreenProps<any, string> ) => {
    return (
            <Layout background={BackgroundImage}>
                <View style={styles.container}>
                    <View style={styles.titlePosition}>
                        <Text style={styles.title}>
                            Войти
                        </Text>
                    </View>
                    <TextInput
                        autoComplete={'email'}
                        style={styles.input}
                        keyboardType={"email-address"}
                        placeholder="Логин"
                        placeholderTextColor={'#72777A'}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Пароль"
                        placeholderTextColor={'#72777A'}
                        secureTextEntry={true}/>
                    <Text style={styles.error}>
                        Забыли пароль?
                    </Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate(Routes.SELECT_FAVORITE_ROUTE)
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Войти
                        </Text>
                    </Pressable>
                </View>
            </Layout>
    );
}

export default AuthPage