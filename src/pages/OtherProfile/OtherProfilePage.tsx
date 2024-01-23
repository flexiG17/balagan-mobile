import {View, Text, RefreshControl, ScrollView, ImageBackground} from "react-native";
import styles from './style'
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import CardSectionComponent from "../../components/Cards/CardSection/CardSectionComponent";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import EventComponent from "../../components/Cards/Event/EventComponent";
import {Feather} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import ICommunity from "../../interfaces/ICommunity";
import {getSingleCommunity} from "../../actions/communityActions";
import IUser from "../../interfaces/IUser";
import {getProfile} from "../../actions/userAction";
import OtherUserPageComponent from "../../components/pages/OtherUser/OtherUserPageComponent";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

type ParamsList = {
    params: {
        user: {
            user_id: string,
            name: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
}

const OtherProfilePage = ({navigation, route}: IProps) => {
    const [user, setUser]
        = useState<IUser>({user_id: '', name: ''})
    const [isLoading, setIsLoading]
        = useState(true)

    const [modalVisible, setModalVisible]
        = useState(false);
    const [modalText, setModalText]
        = useState('');

    const [refreshing, setRefreshing]
        = useState(false);

    const user_id = route.params.user.user_id

    const getProfileAction = () => {
        setIsLoading(true)
        getProfile(user_id)
            .then(({data}) => {
                setIsLoading(false)
                setUser(data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением профиля')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getProfileAction()

        setRefreshing(false);
    }, []);

    useEffect(() => {
        getProfileAction()
    }, []);


    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
            <CustomModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <OtherUserPageComponent navigation={navigation} user={user} isLoading={isLoading} route={route}/>
            </ImageBackground>
        </ScrollView>
    )
}

export default OtherProfilePage