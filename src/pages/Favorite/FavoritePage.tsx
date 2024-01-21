import styles from './style'
import {ImageBackground, Pressable, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useRef, useState} from "react";
import HeaderWithBack from "../../components/Header/HeaderWithBack/HeaderWithBack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import Search from "../../components/shared/search/Search";
import {Feather} from '@expo/vector-icons';
import EventComponent from "../../components/Cards/Event/EventComponent";
import EventStatus from "../../consts/eventStatus";
import Pagination from "../../components/shared/pagination/Pagination";
import BackgroundImage from './assets/background.png'

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const FavoritePage = ({navigation}: IProps) => {
    const [isCompletedHidden, setTsCompletedHidden] = useState(false)
    const scrollRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView
            ref={scrollRef}
            scrollEnabled={!isCompletedHidden}
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <Pressable
                    style={modalVisible && {
                        backgroundColor: 'rgba(23,14,61,0.29)'
                    }}
                >
                    <View style={styles.block}>
                        <HeaderWithBack navigation={navigation} title={'Избранное'}/>
                        <Search filterType={'event'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                        <TouchableOpacity
                            activeOpacity={0.7}
                        >
                        </TouchableOpacity>

                        <View style={styles.grid}>
                            <EventComponent id={1} navigation={navigation} isFavorite={true}/>
                            <EventComponent id={2} navigation={navigation} isFavorite={true}/>
                            <EventComponent id={3} navigation={navigation} isFavorite={true}/>
                            <EventComponent id={4} navigation={navigation} isFavorite={true}/>
                        </View>
                        <Pagination/>

                        <View style={styles.titleWithIcon}>
                            <Text style={styles.endedTitle}>
                                Завершенные
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    setTsCompletedHidden(!isCompletedHidden)
                                    // @ts-ignore
                                    scrollRef.current?.scrollTo({
                                        y: 0,
                                        animated: true,
                                    });
                                }}
                            >
                                {isCompletedHidden
                                    ? <Feather name="eye" size={20} color="black"/>
                                    : <Feather name="eye-off" size={20} color="black"/>}
                            </TouchableOpacity>
                        </View>
                        {!isCompletedHidden &&
                            <View style={styles.grid}>
                                <EventComponent id={5} navigation={navigation} isFavorite={true}/>
                                <EventComponent id={6} navigation={navigation} isFavorite={true}/>
                                <Pagination/>
                            </View>}
                    </View>
                </Pressable>
            </ImageBackground>
        </ScrollView>

    )
}

export default FavoritePage