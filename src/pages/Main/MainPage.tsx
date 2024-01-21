import {ImageBackground, Platform, ScrollView, StatusBar, Text, View} from "react-native";
import BackgroundImage from '../../assets/backgrounds/mainBackground.png';
import styles from './style'
import React from "react";
import Header from "../../components/Header/Header";
import advertising from "../../consts/advertising";
import CardSectionComponent from "../../components/Cards/CardSection/CardSectionComponent";
import EventComponent from "../../components/Cards/Event/EventComponent";
import PopularComponent from "../../components/Cards/Popular/PopularComponent";
import InterestingComponent from "../../components/Cards/Interesting/InterestingComponent";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import AdvertisingComponent from "../../components/Cards/Advertising/AdvertisingComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>
}

const MainPage = ({navigation}: IProps) => {

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <StatusBar
                    barStyle={
                        Platform.OS === 'ios'
                            ? 'dark-content'
                            : 'light-content'
                    }
                />
                <View style={styles.grid}>
                    <Header title={'События'}
                            navigation={navigation}
                            searchAction={true}
                            createEventAction={true}
                            createType={'event'}
                    />
                    <View style={styles.advertising}>
                        {advertising.map(({id, title}) => {
                            return <AdvertisingComponent key={id} id={id} text={title} navigation={navigation}/>
                        })}
                    </View>
                    <CardSectionComponent navigation={navigation} title={'Моя подборка'} count={45}>
                        <EventComponent id={1} navigation={navigation}/>
                        <EventComponent id={2} navigation={navigation}/>
                    </CardSectionComponent>
                    <CardSectionComponent navigation={navigation} title={'Популярные разделы'} count={13}>
                        <PopularComponent/>
                    </CardSectionComponent>
                    <View style={styles.interesting}>
                        <Text style={styles.interestingTitle}>
                            Интересно сейчас
                        </Text>
                        <InterestingComponent id={1} navigation={navigation}/>
                        <InterestingComponent id={2} navigation={navigation}/>
                        <InterestingComponent id={3} navigation={navigation}/>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default MainPage