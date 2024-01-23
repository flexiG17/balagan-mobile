import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import HeaderWithBack from "../../Header/HeaderWithBack/HeaderWithBack";
import {EvilIcons, Feather} from "@expo/vector-icons";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import IUser from "../../../interfaces/IUser";
import Loading from "../../shared/loading/Loading";
import Chip from "../../shared/chip/Chip";
import ComponentSize from "../../../consts/componentSize";
import CardSectionComponent from "../../Cards/CardSection/CardSectionComponent";
import CommunityComponent from "../../Cards/Community/CommunityComponent";
import EventComponent from "../../Cards/Event/EventComponent";


type ParamsList = {
    params: {
        user: {
            user_id: string,
            name: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
    user: IUser,
    isLoading: boolean
}

const OtherUserPageComponent = (props: IProps) => {
    return (
        <View style={styles.block}>
            <HeaderWithBack navigation={props.navigation} title={'Профиль пользователя'}/>
            {props.isLoading
                ?
                <Loading/>
                :
                <>
                    <View style={styles.userDataBlock}>
                        <View style={styles.photo}/>
                        <View style={styles.userData}>
                            <Text style={styles.userName}>
                                {props.user.name}
                            </Text>
                            <View style={styles.textWithIcon}>
                                <Feather name="map-pin" size={24} color="black"/>
                                <Text style={styles.userGeo}>
                                    {props.user.city}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonsGroup}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.socialButton}>
                            <Text style={styles.buttonText}>
                                Написать в
                            </Text>
                            <EvilIcons style={[styles.icon, {marginTop: -6}]}
                                       name="sc-telegram" size={28} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.socialButton}>
                            <Text style={styles.buttonText}>
                                Написать в
                            </Text>
                            <EvilIcons style={[styles.icon, {marginTop: -8}]}
                                name="sc-vk" size={28} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionGrid}>
                        {props.user.tags?.data.map(({name, tag_id}) => {
                            return <Chip isEditMode={false} key={tag_id} size={ComponentSize.Small} tag_id={tag_id}
                                         name={name}/>
                        })}
                    </View>
                    <CardSectionComponent navigation={props.navigation} title={'Коммьюнити'}
                                          count={props.user.community?.count}>
                        {props.user.community?.data.map(({community_id, name, image}) => {
                            return <CommunityComponent key={community_id}
                                                       navigation={props.navigation} community_id={community_id}
                                                       name={name} image={image}/>
                        })}
                    </CardSectionComponent>
                    <View style={styles.sectionData}>
                        <Text style={styles.title}>
                            Контакт для связи
                        </Text>
                        <Text style={styles.description}>
                            krutova@mail.ru
                        </Text>
                    </View>
                    <CardSectionComponent navigation={props.navigation} title={'Мероприятия'}
                                          count={props.user.events?.count}>
                        {props.user.events?.data.slice(0, 4).map((event) => {
                            return <EventComponent key={event.event_id} navigation={props.navigation} event={event}/>
                        })}
                    </CardSectionComponent>
                </>}
        </View>)
}

export default OtherUserPageComponent