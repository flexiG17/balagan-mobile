import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Switch,
    RefreshControl
} from "react-native";
import BackgroundImage from "./assets/background.png";
import styles from "./style";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import React, {useEffect, useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {AntDesign} from "@expo/vector-icons";
import {sections} from "../../consts/sections";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import {Routes} from "../../consts/routesNames";
import CreateCommunityPageComponent from "../../components/pages/CreateCommunity/CreateCommunityPageComponent";
import ICommunity from "../../interfaces/ICommunity";
import {createCommunity, getSingleCommunity} from "../../actions/communityActions";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import ITag from "../../interfaces/ITag";
import {getTags} from "../../actions/tagActions";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
}

const CreateCommunityPage = ({navigation}: IProps) => {
    const [tags, setTags]
        = useState<ITag[]>([])
    const [isLoading, setIsLoading]
        = useState(true)
    const [isLoadingCommunityCreated, setIsLoadingCommunityCreated] = useState(false)

    const [modalVisible, setModalVisible]
        = useState(false);
    const [modalText, setModalText]
        = useState('');

    const [refreshing, setRefreshing]
        = useState(false);

    const getTagsAction = () => {
        setIsLoading(true)
        getTags(50, 0)
            .then(({data}) => {
                setIsLoading(false)
                setTags(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }

    const createNewCommunity = (dataToSave : {name: string, description: string, tags: string[], visible: boolean}) => {
        setIsLoadingCommunityCreated(true)
        createCommunity(dataToSave)
            .then(({data}) => {
                setIsLoadingCommunityCreated(false)
                setModalVisible(true)
                setModalText('Коммьюнити успешно создано!')
                setTags(data.data)

                setTimeout(() => {
                    setModalVisible(false)
                    navigation.pop()
                    navigation.navigate(Routes.COMMUNITY_LIST_ROUTE)
                }, 1500)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoadingCommunityCreated(false)
                setModalText('Возникла проблема с созданием коммьюнити')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getTagsAction()

        setRefreshing(false);
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
            <CustomModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <CreateCommunityPageComponent
                    navigation={navigation}
                    createCommunity={createNewCommunity} isLoadingCommunityCreated={isLoadingCommunityCreated}
                    tags={tags} isLoading={isLoading}/>
            </ImageBackground>
        </ScrollView>
    )
}

export default CreateCommunityPage