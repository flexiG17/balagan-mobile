import {ImageBackground, RefreshControl, ScrollView, View} from 'react-native';
import styles from "./style";
import React, {useEffect, useState} from "react";
import BackgroundImage from "./assets/background.png";
import Layout from "../../components/layout/Layout";
import Header from "../../components/Header/Header";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import Search from "../../components/shared/search/Search";
import CardSectionComponent from "../../components/Cards/CardSection/CardSectionComponent";
import advertising from "../../consts/advertising";
import AdvertisingComponent from "../../components/Cards/Advertising/AdvertisingComponent";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";
import CommunityPageComponent from "../../components/pages/Community/CommunityPageComponent";
import ICommunity from "../../interfaces/ICommunity";
import {getCommunities, getSingleCommunity} from "../../actions/communityActions";
import Loading from "../../components/shared/loading/Loading";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const CommunityListPage = ({navigation}: IProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [communities, setCommunities] = useState<ICommunity[]>([])
    const [isLoading, setIsLoading]
        = useState(true)

    const [onlyMyCommunities, setOnlyMyCommunities] = useState<ICommunity[]>([])
    const [isMyCommunitiesLoading, setIsMyCommunitiesLoading]
        = useState(true)

    const [filterModalVisible, setFilterModalVisible]
        = useState(false);
    const [modalText, setModalText]
        = useState('');

    const [refreshing, setRefreshing]
        = useState(false);

    const getCommunitiesAction = () => {
        setIsLoading(true)
        getCommunities(8, 0, 0)
            .then(({data}) => {
                setIsLoading(false)
                setCommunities(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }
    const getOnlyMyCommunities = () => {
        setIsMyCommunitiesLoading(true)
        getCommunities(20, 0, 1)
            .then(({data}) => {
                setIsMyCommunitiesLoading(false)
                setOnlyMyCommunities(data.data)
            })
            .catch((e) => {
                setModalVisible(true)
                setIsMyCommunitiesLoading(false)
                setModalText('Возникла проблема с получением коммьюнити')
            })
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getCommunitiesAction()
        getOnlyMyCommunities()
        setRefreshing(false);
    }, []);

    useEffect(() => {
        getCommunitiesAction()
    }, []);

    useEffect(() => {
        getOnlyMyCommunities()
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
                <View style={styles.block}>
                    <Header
                        navigation={navigation}
                        title={'Коммьюнити'}
                        createEventAction={true}
                        createType={'community'}
                    />

                    <View style={styles.cardGrid}>
                        {isLoading
                            ?
                            <Loading/>
                            :
                            <>
                                {communities.slice(0, 4).map((community) => {
                                    return <AdvertisingComponent community={community} navigation={navigation}
                                                                 key={community.community_id}/>
                                })}
                            </>
                        }
                    </View>
                    <Search filterType={'community'} modalVisible={filterModalVisible}
                            setModalVisible={setFilterModalVisible}/>
                    <CardSectionComponent navigation={navigation} title={'Мои коммьюнити'} count={onlyMyCommunities.length}>
                        {isMyCommunitiesLoading
                            ?
                            <Loading/>
                            :
                            <>
                                {onlyMyCommunities.map(({community_id, name, image}) => {
                                    return <CommunityComponent community_id={community_id} key={community_id}
                                                               navigation={navigation} image={image} name={name}/>
                                })}
                            </>
                        }
                    </CardSectionComponent>
                    <CardSectionComponent navigation={navigation} title={'Популярное'} count={communities.length}>
                        {isLoading
                            ?
                            <Loading/>
                            :
                            <>
                                {communities.slice(4, 8).map(({community_id, name, image}) => {
                                    return <CommunityComponent community_id={community_id} key={community_id}
                                                               navigation={navigation} image={image} name={name}/>
                                })}
                            </>
                        }
                    </CardSectionComponent>

                </View>
            </ImageBackground>
        </ScrollView>
    );
}

export default CommunityListPage