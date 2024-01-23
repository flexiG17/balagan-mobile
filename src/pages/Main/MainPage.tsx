import {ImageBackground, Platform, RefreshControl, ScrollView, StatusBar, Text, View} from "react-native";
import BackgroundImage from '../../assets/backgrounds/mainBackground.png';
import styles from './style'
import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import advertising from "../../consts/advertising";
import CardSectionComponent from "../../components/Cards/CardSection/CardSectionComponent";
import EventComponent from "../../components/Cards/Event/EventComponent";
import PopularComponent from "../../components/Cards/Popular/PopularComponent";
import InterestingComponent from "../../components/Cards/Interesting/InterestingComponent";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import AdvertisingComponent from "../../components/Cards/Advertising/AdvertisingComponent";
import MainPageComponent from "../../components/pages/Main/MainPageComponent";
import ICommunity from "../../interfaces/ICommunity";
import {getCommunities} from "../../actions/communityActions";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import IEvent from "../../interfaces/IEvent";
import ITag from "../../interfaces/ITag";
import {getTags} from "../../actions/tagActions";
import {getEvents} from "../../actions/eventActions";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>
}

const MainPage = ({navigation}: IProps) => {
    const [communities, setCommunities] = useState<ICommunity[]>([])
    const [isCommunityLoading, setIsCommunityLoading] = useState(true)

    const [events, setEvents] = useState<IEvent[]>([])
    const [isEventLoading, setIsEventLoading] = useState(true)

    const [tags, setTags] = useState<ITag[]>([])
    const [isTagLoading, setIsTagLoading] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [refreshing, setRefreshing] = React.useState(false);

    const [communitiesCount, setCommunitiesCount] = useState(0)
    const [tagsCount, setTagsCount] = useState(0)
    const [eventsCount, setEventsCount] = useState(0)

    const getCommunitiesAction = () => {
        setIsCommunityLoading(true)
        getCommunities(4, 0, 0)
            .then(({data}) => {
                setCommunitiesCount(data.count)
                setIsCommunityLoading(false)
                setCommunities(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsCommunityLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }

    const getEventsAction = () => {
        setIsEventLoading(true)
        getEvents(4, 1, 0, 0)
            .then(({data}) => {
                setEventsCount(data.count)
                setIsEventLoading(false)
                setEvents(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsEventLoading(false)
                setModalText('Возникла проблема с получением ивентов')
            })
    }

    const getTagsAction = () => {
        setIsTagLoading(true)
        getTags(5, 2)
            .then(({data}) => {
                setTagsCount(data.count)
                setIsTagLoading(false)
                setTags(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsTagLoading(false)
                setModalText('Возникла проблема с получением разделов')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getCommunitiesAction()
        getEventsAction()
        getTagsAction()

        setRefreshing(false);
    }, []);

    useEffect(() => {
        getCommunitiesAction()
    }, []);

    useEffect(() => {
        getEventsAction()
    }, []);

    useEffect(() => {
        getTagsAction()
    }, []);

    return (

        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <StatusBar
                    barStyle={
                        Platform.OS === 'ios'
                            ? 'dark-content'
                            : 'light-content'
                    }
                />
                <CustomModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
                <MainPageComponent
                    communities={communities} isCommunityLoading={isCommunityLoading}
                    setIsCommunityLoading={setIsCommunityLoading} communitiesCount={communitiesCount}
                    events={events} isEventLoading={isEventLoading}
                    setIsEventLoading={setIsEventLoading} eventsCount={eventsCount}
                    tags={tags} isTagLoading={isTagLoading}
                    setIsTagLoading={setIsTagLoading} tagsCount={tagsCount}
                    navigation={navigation}/>
            </ImageBackground>
        </ScrollView>
    )
}

export default MainPage