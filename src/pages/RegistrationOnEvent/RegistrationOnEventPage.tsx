import styles from './style'
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import {TextInput, View, Text, Switch, TouchableOpacity} from "react-native";
import {useState} from "react";

type RouteParamList = {
    params: {
        event: {
            id: number,
            title: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
    route: RouteProp<RouteParamList>
}

const RegistrationOnEventPage = ({route, navigation}: IProps) => {
    const eventId = route.params.event.id
    const eventName = route.params.event.title
    const [isFindCompany, setIsFindCompany] = useState(false);
    const [isDisplayInProfile, setIsDisplayInProfile] = useState(false);
    const toggleSwitchFindCompany =
        () => setIsFindCompany(previousState => !previousState);

    const toggleSwitchDisplayInProfile =
        () => setIsDisplayInProfile(previousState => !previousState);

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.block}>
                <HeaderWithBack navigation={navigation} title={`${eventName} ${eventId}`}/>
                <View style={styles.inputGroup}>
                    <Text style={styles.title}>
                        ФИО
                    </Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.title}>
                        Номер для связи
                    </Text>
                    <TextInput
                        placeholder={'В формате, +79086315480'}
                        placeholderTextColor={'#858585'}
                        style={styles.input}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={{gap: 20}}>
                    <View style={styles.textWithSwitch}>
                        <View style={styles.switchTextPosition}>
                            <Text style={styles.title}>
                                Ищу компанию
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#b7b1ee', true: '#b7b1ee'}}
                            thumbColor={isFindCompany ? '#ADF5B9' : '#FFAAAA'}
                            onValueChange={toggleSwitchFindCompany}
                            value={isFindCompany}/>
                    </View>
                    <View style={styles.textWithSwitch}>
                        <View style={styles.switchTextPosition}>
                            <Text style={styles.title}>
                                Отображать в профиле
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#b7b1ee', true: '#b7b1ee'}}
                            thumbColor={isDisplayInProfile ? '#ADF5B9' : '#FFAAAA'}
                            onValueChange={toggleSwitchDisplayInProfile}
                            value={isDisplayInProfile}/>
                    </View>
                </View>
            </View>
            <View style={styles.buttonPosition}>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}
                onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default RegistrationOnEventPage