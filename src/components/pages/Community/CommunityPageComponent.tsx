import {Text, TouchableOpacity, View, Image} from "react-native";
import styles from "./style";
import HeaderWithBack from "../../Header/HeaderWithBack/HeaderWithBack";
import {Routes} from "../../../consts/routesNames";
import {Entypo} from "@expo/vector-icons";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {useState} from "react";
import ICommunity from "../../../interfaces/ICommunity";
import Loading from "../../shared/loading/Loading";
import EventComponent from "../../Cards/Event/EventComponent";
import UserComponent from "../../Cards/User/UserComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    community: ICommunity,
    isLoading: boolean
}

const CommunityPageComponent = (props: IProps) => {
    const [isEventBlock, setIsEventBlock] = useState(true)

    return (

        <View style={styles.block}>
            {props.isLoading
                ?
                <Loading/>
                :
                <>
                    <HeaderWithBack navigation={props.navigation} title={props.community.name}/>
                    <Image source={{uri: props.community.image}} style={styles.image}/>
                    <Text style={styles.title}>
                        {props.community.name}
                    </Text>
                    <Text style={styles.description}>
                        {props.community.description}
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => props.navigation.navigate(Routes.COMMUNITY_LIST_ROUTE)}
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
                                {props.community.events?.data.map((event) => {
                                    return <EventComponent navigation={props.navigation} event={event}/>
                                })}
                            </View>
                        </>
                    }
                    {!isEventBlock &&
                        <View style={styles.eventsGrid}>
                            {props.community.users?.data.map(({user_id, name}) => {
                                return <UserComponent navigation={props.navigation} user_id={user_id} name={name}/>
                            })}
                        </View>
                    }

                </>}
        </View>
    )
}

export default CommunityPageComponent