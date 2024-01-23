import styles from './style'
import {View, Text, TouchableOpacity, StatusBar} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import React from "react";
import UserComponent from "../../components/Cards/User/UserComponent";
import {Routes} from "../../consts/routesNames";
import ICommunity from "../../interfaces/ICommunity";
import IUser from "../../interfaces/IUser";


type ParamsList = {
    params: {
        advertising : ICommunity
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
}
const AdvertisingPage = ({navigation, route} : IProps) => {
    const props = route.params.advertising

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.block}>
                <Text style={styles.title}>
                    {props.name}
                </Text>
                <Text style={styles.text}>
                    {props.description}
                </Text>
                <View style={styles.usersSection}>
                    <Text style={styles.popularUsers}>
                        Популярные люди в коммьнити
                    </Text>
                    <View style={styles.usersGrid}>
                        {props.users?.data.splice(0,4).map(({user_id, name}) => {
                            return <UserComponent lightMode={true} navigation={navigation} user_id={user_id} name={name}/>
                        })}
                    </View>
                </View>
            </View>
            <View style={styles.buttonPosition}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={() => navigation.navigate(Routes.COMMUNITY_ROUTE, {
                        community: {
                            community_id: route.params.advertising.community_id,
                            name: props.name
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