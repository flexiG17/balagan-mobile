import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {
    ImageBackground, Platform,
    RefreshControl,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import BackgroundImage from "./assets/background.png";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import styles from './style'
import React, {useEffect, useState} from "react";
import {AntDesign} from '@expo/vector-icons';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {sections} from "../../consts/sections";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import Map from "../../components/shared/map/Map";
import {Routes} from "../../consts/routesNames";
import CreateEventPageComponent from "../../components/pages/CreateEvent/CreateEventPageComponent";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import MainPageComponent from "../../components/pages/Main/MainPageComponent";
import ICommunity from "../../interfaces/ICommunity";
import IEvent from "../../interfaces/IEvent";
import ITag from "../../interfaces/ITag";
import {getCommunities} from "../../actions/communityActions";
import {createEvent, getEvents} from "../../actions/eventActions";
import {getTags} from "../../actions/tagActions";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>
}

const CreateEventPage = ({navigation}: IProps) => {
    const [communities, setCommunities] = useState<ICommunity[]>([])
    const [isCommunityLoading, setIsCommunityLoading] = useState(true)

    const [tags, setTags] = useState<ITag[]>([])
    const [isTagLoading, setIsTagLoading] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [refreshing, setRefreshing] = React.useState(false);

    const [isEventLoading, setIsEventLoading] = useState(false)

    const getCommunitiesAction = () => {
        setIsCommunityLoading(true)
        getCommunities(4, 0, 1)
            .then(({data}) => {
                setIsCommunityLoading(false)
                setCommunities(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsCommunityLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }

    const getTagsAction = () => {
        setIsTagLoading(true)
        getTags(50, 0)
            .then(({data}) => {
                setIsTagLoading(false)
                setTags(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsTagLoading(false)
                setModalText('Возникла проблема с получением разделов')
            })
    }

    const createNewEvent = (dataToSave : {}) => {
        setIsEventLoading(true)
        createEvent(dataToSave)
            .then(({data}) => {
                console.log(data);
                setIsEventLoading(false)
                setModalVisible(true)
                setModalText('Ваше мероприятие успешно создано!')

                setTimeout(() => {
                    setModalVisible(false)
                    navigation.pop()
                    navigation.navigate(Routes.LIST_CREATED_EVENTS_ROUTE)
                }, 1500)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsEventLoading(false)
                setModalText('Возникла проблема с созданием мероприятия')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getCommunitiesAction()
        getTagsAction()

        setRefreshing(false);
    }, []);

    useEffect(() => {
        getCommunitiesAction()
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
                <CreateEventPageComponent navigation={navigation} createNewEvent={createNewEvent}
                    communities={communities} isCommunitiesLoading={isCommunityLoading}
                    tags={tags} isTagsLoading={isTagLoading} isEventLoading={isEventLoading}/>
            </ImageBackground>
        </ScrollView>
    )
}

export default CreateEventPage