import {ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import BackgroundImage from './assets/background.png'
import styles from "./style";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import React, {useEffect, useState} from "react";
import {Entypo} from "@expo/vector-icons";
import EventComponent from "../../components/Cards/Event/EventComponent";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import UserComponent from "../../components/Cards/User/UserComponent";
import {Routes} from "../../consts/routesNames";
import {getCommunities, getSingleCommunity} from "../../actions/communityActions";
import ICommunity from "../../interfaces/ICommunity";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import CommunityPageComponent from "../../components/pages/Community/CommunityPageComponent";

type ParamsList = {
    params: {
        community: {
            community_id: string,
            name: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
}

const CommunityPage = ({navigation, route}: IProps) => {
    const [community, setCommunity]
        = useState<ICommunity>({community_id: '', name: '', image: ''})
    const [isLoading, setIsLoading]
        = useState(true)

    const [modalVisible, setModalVisible]
        = useState(false);
    const [modalText, setModalText]
        = useState('');

    const [refreshing, setRefreshing]
        = useState(false);

    const {name, community_id} = route.params.community

    const getCommunityAction = () => {
        setIsLoading(true)
        getSingleCommunity(community_id)
            .then(({data}) => {
                setIsLoading(false)
                setCommunity(data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getCommunityAction()

        setRefreshing(false);
    }, []);

    useEffect(() => {
        getCommunityAction()
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
                <CommunityPageComponent navigation={navigation} community={community} isLoading={isLoading}/>
            </ImageBackground>
        </ScrollView>
    )
}

export default CommunityPage