import {View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, Switch} from "react-native";
import BackgroundImage from "./assets/background.png";
import styles from "./style";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import React, {useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {AntDesign} from "@expo/vector-icons";
import {sections} from "../../consts/sections";
import Chip from "../../components/shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";
import {Routes} from "../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
}

const CreateCommunityPage = ({navigation}: IProps) => {
    const [isOpenCommunity, setIsOpenCommunity] = useState(false);

    const toggleSwitchIsOpenCommunity =
        () => setIsOpenCommunity(previousState => !previousState);

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <View style={styles.block}>
                    <HeaderWithBack navigation={navigation}
                                    title={'Создание коммьюнити'}/>

                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Название коммьюнити
                        </Text>
                        <TextInput
                            style={styles.search}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Описание
                        </Text>
                        <Text style={styles.description}>
                            макс. знаков = 500
                        </Text>
                        <TextInput
                            style={[styles.search, styles.multiline]}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Добавить фото
                        </Text>
                        <View style={styles.addPhotoIcon}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                            >
                                <AntDesign name="plus" size={24} color="#fff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.title}>
                            Разделы
                        </Text>
                        <View style={styles.sectionGrid}>
                            {sections.map((section) => {
                                return <Chip key={section} title={section} size={ComponentSize.Small}/>
                            })}
                        </View>
                    </View>
                    <View style={styles.inputBlock}>
                        <View style={styles.textWithSwitch}>
                            <View style={styles.switchTextPosition}>
                                <Text style={styles.title}>
                                    Открытое коммьюнити
                                </Text>
                            </View>
                            <Switch
                                trackColor={{false: '#b7b1ee', true: '#b7b1ee'}}
                                thumbColor={isOpenCommunity ? '#ADF5B9' : '#FFAAAA'}
                                onValueChange={toggleSwitchIsOpenCommunity}
                                value={isOpenCommunity}/>
                        </View>
                        <Text style={styles.description}>
                            Если коммтюнити закрытое, то участники не могут вступить без разрешения владельца
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={() => navigation.navigate(Routes.COMMUNITY_LIST_ROUTE)}
                    >
                        <Text style={styles.buttonText}>
                            Создать
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default CreateCommunityPage