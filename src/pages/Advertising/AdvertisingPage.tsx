import styles from './style'
import {View, Text, TouchableOpacity, StatusBar} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import React from "react";
import UserComponent from "../../components/Cards/User/UserComponent";
import {Routes} from "../../consts/routesNames";


type ParamsList = {
    params: {
        advertising: {
            id: number,
            text: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
}
const AdvertisingPage = ({navigation, route} : IProps) => {
    const title = route.params.advertising.text
    const communityDescription =
        `Не знаешь, чем себя занять?\nНе знаешь, что делать в свободное время?
                        \nМы ищем интересные мероприяия города и ходим на них все вместе: начиная от спортивного скалолазания, заканчивая играми в настольные игры. Если вам нравится делать все и сразу: будем вас ждать!`

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.block}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {communityDescription}
                </Text>
                <View style={styles.usersSection}>
                    <Text style={styles.popularUsers}>
                        Популярные люди в коммьнити
                    </Text>
                    <View style={styles.usersGrid}>
                        <UserComponent lightMode={true} navigation={navigation} id={1} name={'Вера Крутова'}/>
                        <UserComponent lightMode={true} navigation={navigation} id={2} name={'Вася Пупкин'}/>
                        <UserComponent lightMode={true} navigation={navigation} id={3} name={'Иван Иванов'}/>
                        <UserComponent lightMode={true} navigation={navigation} id={4} name={'Валерия Якушева'}/>
                    </View>
                </View>
            </View>
            <View style={styles.buttonPosition}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={() => navigation.navigate(Routes.COMMUNITY_ROUTE, {
                        community: {
                            id: route.params.advertising.id,
                            text: title
                        }})}
                >
                    <Text style={styles.buttonText}>
                        Присоединиться
                    </Text>
                </TouchableOpacity>
                <StatusBar
                    hidden={true}
                    barStyle={'light-content'}
                />
            </View>
        </Layout>
    )
}

export default AdvertisingPage