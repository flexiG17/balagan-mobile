import styles from './style'
import {
    ActivityIndicator,
    ImageBackground,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    View,
    RefreshControl
} from "react-native";
import BackgroundImage from "../../../assets/backgrounds/mainBackground.png";
import Header from "../../Header/Header";
import advertising from "../../../consts/advertising";
import AdvertisingComponent from "../../Cards/Advertising/AdvertisingComponent";
import CardSectionComponent from "../../Cards/CardSection/CardSectionComponent";
import EventComponent from "../../Cards/Event/EventComponent";
import PopularComponent from "../../Cards/Popular/PopularComponent";
import InterestingComponent from "../../Cards/Interesting/InterestingComponent";
import React, {Dispatch, SetStateAction} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import ICommunity from "../../../interfaces/ICommunity";
import IEvent from "../../../interfaces/IEvent";
import Loading from "../../shared/loading/Loading";
import ITag from "../../../interfaces/ITag";

interface IProps {
    navigation: NativeStackNavigationProp<any>,

    communities: ICommunity[],
    isCommunityLoading: boolean,
    setIsCommunityLoading: Dispatch<SetStateAction<boolean>>,
    communitiesCount: number,

    events: IEvent[],
    isEventLoading: boolean,
    setIsEventLoading: Dispatch<SetStateAction<boolean>>,
    eventsCount: number

    tags: ITag[],
    isTagLoading: boolean,
    setIsTagLoading: Dispatch<SetStateAction<boolean>>,
    tagsCount: number
}

const MainPageComponent = (props: IProps) => {

    return (
        <View style={styles.grid}>
            <Header title={'События'}
                    navigation={props.navigation}
                    searchAction={true}
                    createEventAction={true}
                    createType={'event'}
            />
            <View style={styles.advertising}>
                {props.isCommunityLoading
                    ?
                    <Loading/>
                    :
                    <>
                        {props.communities.map((community) => {
                            return <AdvertisingComponent community={community} navigation={props.navigation}/>
                        })}
                    </>}
            </View>
            <CardSectionComponent navigation={props.navigation} title={'Моя подборка'} count={props.eventsCount}>
                {props.isEventLoading
                    ?
                    <Loading/>
                    :
                    <>
                        {props.events.slice(0, 2).map((event) => {
                            return <EventComponent event={event} navigation={props.navigation}/>
                        })}
                    </>}
            </CardSectionComponent>
            <CardSectionComponent navigation={props.navigation} title={'Популярные разделы'} count={props.tagsCount}>
                {props.isTagLoading
                    ?
                    <Loading/>
                    :
                    <>
                        <PopularComponent tags={props.tags}/>
                    </>}
            </CardSectionComponent>
            <View style={styles.interesting}>
                <Text style={styles.interestingTitle}>
                    Интересно сейчас
                </Text>
                {props.isEventLoading
                    ?
                    <Loading/>
                    :
                    <>
                        {props.events.map((event) => {
                            return <InterestingComponent event={event} navigation={props.navigation}/>
                        })}
                    </>}
            </View>
        </View>
    )
}

export default MainPageComponent