import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import BackgroundImage from './assets/background.png'
import styles from "./style";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {useState} from "react";
import {Entypo} from "@expo/vector-icons";
import EventComponent from "../../components/Cards/Event/EventComponent";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import UserComponent from "../../components/Cards/User/UserComponent";
import {Routes} from "../../consts/routesNames";

type ParamsList = {
    params: {
        community: {
            id: number,
            text: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
}

const CommunityPage = ({navigation, route}: IProps) => {
    const [isEventBlock, setIsEventBlock] = useState(true)

    const communityName = route.params.community.text
    const communityDescription =
        `Не знаешь, чем себя занять? Не знаешь, что делать в свободное время?
                        \nМы ищем интересные мероприяия города и ходим на них все вместе: начиная от спортивного скалолазания, заканчивая играми в настольные игры. Если вам нравится делать все и сразу: будем вас ждать!`

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <View style={styles.block}>
                    <HeaderWithBack navigation={navigation} title={communityName}/>
                    <View style={styles.image}>
                    </View>
                    <Text style={styles.title}>
                        {communityName}
                    </Text>
                    <Text style={styles.description}>
                        {communityDescription}
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.navigate(Routes.COMMUNITY_LIST_ROUTE)}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Присоединиться
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.navigationBlock}>
                        <TouchableOpacity
                            onPress={() => setIsEventBlock(true)}
                            activeOpacity={0.6} style={{width: '50%'}}>
                            <View style={[styles.eventBlock, isEventBlock && styles.selectedBlock]}>
                                <Text style={[styles.navigationTitle, isEventBlock && styles.selectedBlockText]}>
                                    Мероприятия
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setIsEventBlock(false)}
                            activeOpacity={0.5} style={{width: '50%'}}>
                            <View style={[styles.eventBlock, !isEventBlock && styles.selectedBlock]}>
                                <Text style={[styles.navigationTitle, !isEventBlock && styles.selectedBlockText]}>
                                    Люди
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {isEventBlock &&
                        <>
                            <View style={styles.textWithIcon}>
                                <Text style={styles.title}>
                                    Предложить событие
                                </Text>
                                <View style={styles.addIcon}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}>
                                        <Entypo name="plus" size={16} color="#fff"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.eventsGrid}>
                                <EventComponent navigation={navigation} id={1} isFavorite={true}/>
                                <EventComponent navigation={navigation} id={2} isFavorite={true}/>
                            </View>
                        </>
                    }
                    {!isEventBlock &&
                        <View style={styles.eventsGrid}>
                            <UserComponent
                                navigation={navigation}
                                name={'Вера Крутова'}
                                id={1}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Вася Пупкин'}
                                id={2}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Иван Иванов'}
                                id={3}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Валерия Якушева'}
                                id={4}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Вера Крутова'}
                                id={5}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Вася Пупкин'}
                                id={6}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Иван Иванов'}
                                id={7}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Валерия Якушева'}
                                id={8}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Вера Крутова'}
                                id={9}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Вася Пупкин'}
                                id={10}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Иван Иванов'}
                                id={1}
                            />
                            <UserComponent
                                navigation={navigation}
                                name={'Валерия Якушева'}
                                id={12}
                            />
                        </View>
                    }
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default CommunityPage