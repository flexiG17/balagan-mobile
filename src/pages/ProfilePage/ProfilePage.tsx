import {ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import BackgroundImage from "./assets/profileBackground.png";
import Layout from "../../components/layout/Layout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Header from "../../components/Header/Header";
import styles from "./style";
import {AntDesign, Entypo, Feather} from '@expo/vector-icons';
import {favoriteSections} from "../../consts/sections";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import {Routes} from "../../consts/routesNames";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import CommunityPageComponent from "../../components/pages/Community/CommunityPageComponent";
import IUser from "../../interfaces/IUser";
import {getMyProfile, getProfile} from "../../actions/userAction";
import ProfilePageComponent from "../../components/pages/Profile/ProfilePageComponent";

const ProfilePage = ({navigation}: NativeStackScreenProps<any, string>) => {
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

    const getProfileDataAction = () => {
        setIsLoading(true)
        getMyProfile()
            .then(({data}) => {
                setIsLoading(false)
                setUser(data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением личного кабинета')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getProfileDataAction()
        setRefreshing(false);
    }, []);

    useEffect(() => {
        getProfileDataAction()
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
                <ProfilePageComponent navigation={navigation} isLoading={isLoading} user={user}/>
            </ImageBackground>
        </ScrollView>
    );
}

export default ProfilePage