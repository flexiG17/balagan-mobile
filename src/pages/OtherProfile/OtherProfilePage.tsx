import {View, Text} from "react-native";
import styles from './style'
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import CardSectionComponent from "../../components/Cards/CardSection/CardSectionComponent";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import EventComponent from "../../components/Cards/Event/EventComponent";
import {Feather} from "@expo/vector-icons";

type ParamsList = {
    params: {
        user: {
            id: number,
            name: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    route: RouteProp<ParamsList>,
}
const OtherProfilePage = ({navigation, route} : IProps) => {
    const userGeo = 'Площадь 1905 года'

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.block}>
                <HeaderWithBack navigation={navigation} title={'Профиль пользователя'}/>
                <View style={styles.userDataBlock}>
                    <View style={styles.photo}/>
                    <View style={styles.userData}>
                        <Text style={styles.userName}>
                            {route.params.user.name}
                        </Text>
                        <View style={styles.textWithIcon}>
                            <Feather name="map-pin" size={24} color="black" />
                            <Text style={styles.userGeo}>
                                {userGeo}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionGrid}>
                    <Chip isEditMode={false} title={'Выставки'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'С детьми'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'Странное'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'Театр'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'Мастер-классы'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'Фото'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'Готовка'} size={ComponentSize.Small}/>
                    <Chip isEditMode={false} title={'Блогинг'} size={ComponentSize.Small}/>
                </View>
                <CardSectionComponent navigation={navigation} title={'Коммьюнити'} count={17}>
                    <CommunityComponent navigation={navigation} text={'Все о хмели'} id={1}/>
                    <CommunityComponent navigation={navigation} text={'Скучно жить?'} id={2}/>
                    <CommunityComponent navigation={navigation} text={'Фото на телефон'} id={3}/>
                    <CommunityComponent navigation={navigation} text={'Кукинг'} id={4}/>
                </CardSectionComponent>
                <View style={styles.sectionData}>
                    <Text style={styles.title}>
                        Контакт для связи
                    </Text>
                    <Text style={styles.description}>
                        krutova@mail.ru
                    </Text>
                </View>
                <CardSectionComponent navigation={navigation} title={'Мероприятия'} count={45}>
                    <EventComponent navigation={navigation} id={1}/>
                    <EventComponent navigation={navigation} id={2}/>
                </CardSectionComponent>
            </View>
        </Layout>
    )
}

export default OtherProfilePage