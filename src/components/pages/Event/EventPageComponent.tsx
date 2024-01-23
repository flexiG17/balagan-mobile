import styles from "./style";
import HeaderWithBack from "../../Header/HeaderWithBack/HeaderWithBack";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {Routes} from "../../../consts/routesNames";
import Map from "../../shared/map/Map";
import CommunityComponent from "../../Cards/Community/CommunityComponent";
import ComponentSize from "../../../consts/componentSize";
import React from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import IEvent from "../../../interfaces/IEvent";
import Loading from "../../shared/loading/Loading";
import EventComponent from "../../Cards/Event/EventComponent";
import UserComponent from "../../Cards/User/UserComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    event: IEvent,
    popularEvents: IEvent[],
    isPopularEventsLoading: boolean,
    isLoading: boolean
}

const EventPageComponent = (props: IProps) => {
    console.log(props.event);
    return (
        <View style={styles.block}>
            <HeaderWithBack navigation={props.navigation} title={`${props.event.name}`}/>
            {props.isLoading
                ?
                <Loading/>
                :
                <>
                    <ImageBackground
                        source={{uri: props.event.image}}
                        style={styles.image}>
                        <View style={styles.imageIcons}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <AntDesign name={props.event.isFavorite ? 'heart' : 'hearto'}
                                           size={24} color="#3B285C"/>
                            </TouchableOpacity>
                            <View style={styles.eventStats}>
                                <Text style={styles.statsText}>
                                    {105} просмотров
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.eventData}>
                        <View style={[styles.dataBlock, {width: 100}]}>
                            <Text style={styles.dataTitle}>
                                {props.event.price} р
                            </Text>
                            <Text style={styles.dataDescription}>
                                цена
                                {"\n"}
                                мероприятия
                            </Text>
                        </View>
                        <View style={styles.separatorLine}/>
                        <View style={styles.dataBlock}>
                            <Text style={styles.dataTitle}>
                                {props.event.date} в {props.event.time}
                            </Text>
                            <Text style={styles.dataDescription}>
                                дата
                                {"\n"}
                                проведения
                            </Text>
                        </View>
                        <View style={styles.separatorLine}/>
                        <View style={[styles.dataBlock, {width: 125}]}>
                            <Text style={styles.dataTitle}>
                                {props.event.participants?.count}
                            </Text>
                            <Text style={styles.dataDescription}>
                                зарегистрированных
                                {"\n"}
                                участника
                            </Text>
                        </View>
                    </View>
                    {props.event.description && <Text style={styles.description}>
                        {props.event.description}
                    </Text>}
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => props.navigation.push(Routes.REGISTRATION_ON_EVENT_ROUTE,
                            {
                                event: {
                                    event_id: props.event.event_id,
                                    name: props.event.name
                                }
                            })}
                    >
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.groupDataBlock}>
                        <View style={styles.profileGrid}>
                            <Text style={styles.newEvent}>
                                Предложить событие{"\n"}
                                коммьюнити
                            </Text>
                            <View style={styles.addPhotoIcon}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                >
                                    <AntDesign name="plus" size={20} color="#fff"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Отзывы и оценки
                        </Text>
                        <Text style={styles.sectionText}>
                            Отзывов еще нет, будьте первым!
                        </Text>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Как нас найти?
                        </Text>
                        <Text style={styles.sectionText}>
                            {props.event.place}
                        </Text>
                        <Map/>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Ищут компанию
                        </Text>
                        <View style={styles.profileGrid}>
                            {props.event.participants?.data.map((user) => {
                                return <UserComponent navigation={props.navigation} name={user.name} user_id={user.user_id}/>
                            })}
                        </View>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Коммьюнити
                        </Text>
                        <Text style={[styles.sectionText, {fontWeight: '600'}]}>
                            Коммьюнити, которые уже добавили мероприятие к себе
                        </Text>
                        <View style={styles.profileGrid}>
                            {props.event.communities?.data.map(({community_id, name, image}) => {
                                return <CommunityComponent
                                    key={community_id} community_id={community_id} name={name}
                                    size={ComponentSize.Big} image={image}
                                    navigation={props.navigation}/>
                            })}
                            {Boolean(props.event.communities?.count) && <View style={styles.iconBlock}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <Entypo name="chevron-thin-right" size={14} color="#fff"/>
                                </TouchableOpacity>
                            </View>}
                        </View>
                    </View>
                    <View style={styles.groupDataBlock}>
                        <Text style={styles.sectionTitle}>
                            Популярно на этой неделе
                        </Text>
                        <View style={styles.profileGrid}>
                            {props.isPopularEventsLoading
                            ?
                            <Loading/>
                            :
                                <>
                                    {props.popularEvents
                                        .map((event) => {
                                            return <EventComponent key={event.event_id} navigation={props.navigation} event={event}/>
                                        })}
                                </>
                            }
                        </View>
                    </View>
                </>
            }
        </View>
    )
}

export default EventPageComponent