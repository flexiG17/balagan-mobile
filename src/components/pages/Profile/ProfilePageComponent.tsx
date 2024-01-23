import styles from "./style";
import Header from "../../Header/Header";
import {Text, TouchableOpacity, View} from "react-native";
import {Routes} from "../../../consts/routesNames";
import {AntDesign, Entypo, Feather} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import ICommunity from "../../../interfaces/ICommunity";
import {getSingleCommunity} from "../../../actions/communityActions";
import IUser from "../../../interfaces/IUser";
import {getProfile} from "../../../actions/userAction";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import Loading from "../../shared/loading/Loading";
import Chip from "../../shared/chip/Chip";
import ComponentSize from "../../../consts/componentSize";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    isLoading: boolean,
    user: IUser
}

const ProfilePageComponent = ({navigation, isLoading, user}: IProps) => {

    return (
        <View style={styles.block}>
            <Header
                title={'Профиль'}
                navigation={navigation}
                settingsAction={true}
            />
            {isLoading
                ?
                <Loading/>
                :
                <>
                    <View style={styles.profile}>
                        <View style={styles.profilePhoto}></View>
                        <Text style={styles.profileName}>
                            {user.name}
                        </Text>
                        <Text style={styles.profileDescription}>
                            Контактные данные не указаны
                        </Text>
                    </View>
                    <View style={styles.status}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.push(Routes.FAVORITE_ROUTE)}
                        >
                            <View style={styles.statusContainer}>
                                <View style={styles.statusTextWithIcon}>
                                    <AntDesign
                                        name="heart"
                                        size={16}
                                        color="#3B285C"
                                        style={{marginTop: 1}}/>
                                    <Text style={styles.statusTitle}>
                                        Избранное
                                    </Text>
                                </View>
                                <Text style={styles.statusDescription}>
                                    {user.events?.count} мероприятий и коммьюнити
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                        >
                            <View style={styles.statusContainer}>
                                <View style={styles.statusTextWithIcon}>
                                    <Entypo
                                        name="star"
                                        size={16}
                                        color="#3B285C"
                                        style={{marginTop: 1}}/>
                                    <Text style={styles.statusTitle}>
                                        Ждут оценки
                                    </Text>
                                </View>
                                <Text style={styles.statusDescription}>
                                    10 посещенных мероприятий
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.favorite}>
                        <View style={styles.statusTextWithIcon}>
                            <Text style={styles.favoriteTitle}>
                                Предпочтения
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.6}>
                                <AntDesign name="edit" size={16} color="black"
                                           style={{marginTop: 2}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.favoriteChipContainer}>
                            {user.tags?.data.map((tag) => {
                                return <Chip key={tag.tag_id} tag_id={tag.tag_id} name={tag.name} isEditMode={false}
                                             size={ComponentSize.Small}/>
                            })}
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => {
                                navigation.push(Routes.LIST_CREATED_EVENTS_ROUTE)
                            }}
                        >
                            <View style={styles.actionBlock}>
                                <AntDesign name="idcard" size={24} color="black"/>
                                <View style={styles.actionClickableSection}>
                                    <Text style={styles.actionClickableSectionText}>
                                        Созданные мероприятия
                                    </Text>
                                    <Entypo
                                        name="chevron-thin-right"
                                        size={18}
                                        color="black"
                                        style={{marginTop: 2}}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                        >
                            <View style={styles.actionBlock}>
                                <Feather name="edit" size={24} color="black"/>
                                <View style={styles.actionClickableSection}>
                                    <Text style={styles.actionClickableSectionText}>
                                        Управление контентом
                                    </Text>
                                    <Entypo
                                        name="chevron-thin-right"
                                        size={18}
                                        color="black"
                                        style={{marginTop: 2}}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                        >
                            <View style={styles.actionBlock}>
                                <AntDesign name="mail" size={24} color="black"/>
                                <View style={styles.actionClickableSection}>
                                    <Text style={styles.actionClickableSectionText}>
                                        Приглашения
                                    </Text>
                                    <Entypo
                                        name="chevron-thin-right"
                                        size={18}
                                        color="black"
                                        style={{marginTop: 2}}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>}
        </View>
    )
}

export default ProfilePageComponent