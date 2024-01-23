import styles from './style'
import BackgroundImage from './assets/background.png'
import Layout from "../../components/layout/Layout";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import {TextInput, View, Text, Switch, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {registrationOnEvent} from "../../actions/eventActions";
import Loading from "../../components/shared/loading/Loading";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

type RouteParamList = {
    params: {
        event: {
            event_id: string,
            name: string
        }
    }
}

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
    route: RouteProp<RouteParamList>
}

const RegistrationOnEventPage = ({route, navigation}: IProps) => {
    const event_id = route.params.event.event_id
    const eventName = route.params.event.name

    const [isFindCompany, setIsFindCompany] = useState(false);
    const [isDisplayInProfile, setIsDisplayInProfile] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const toggleSwitchFindCompany =
        () => setIsFindCompany(previousState => !previousState);

    const toggleSwitchDisplayInProfile =
        () => setIsDisplayInProfile(previousState => !previousState);

    const handleRegistration = () => {
        setIsLoading(true)
        const dataToSave = {
            event_id,
            name,
            number,
            is_found: isFindCompany,
            is_profile: isDisplayInProfile
        }

        registrationOnEvent(dataToSave)
            .then(({data}) => {
                setIsLoading(false)
                setModalVisible(true)
                setModalText('Вы успешно зарегистрировались на мероприятие!')
                setTimeout(() => {
                    navigation.goBack()
                }, 1500)
            })
            .catch((e) => {
                setIsLoading(false)
                setModalVisible(true)
                setModalText('Возникла проблема с регистрацией')
            })
    }

    return (
        <Layout background={BackgroundImage}>
            <CustomModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
            <View style={styles.block}>
                <HeaderWithBack navigation={navigation} title={`${eventName}`}/>
                <View style={styles.inputGroup}>
                    <Text style={styles.title}>
                        ФИО
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.title}>
                        Номер для связи
                    </Text>
                    <TextInput
                        value={number}
                        onChangeText={setNumber}
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
                {isLoading
                    ?
                    <Loading/>
                    :
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}
                                      onPress={handleRegistration}
                    >
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>}
            </View>
        </Layout>
    )
}

export default RegistrationOnEventPage