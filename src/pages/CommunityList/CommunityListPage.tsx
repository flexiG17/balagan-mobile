import {View} from 'react-native';
import styles from "./style";
import React, {useState} from "react";
import BackgroundImage from "./assets/background.png";
import Layout from "../../components/layout/Layout";
import Header from "../../components/Header/Header";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import CommunityComponent from "../../components/Cards/Community/CommunityComponent";
import ComponentSize from "../../consts/componentSize";
import Search from "../../components/shared/search/Search";
import CardSectionComponent from "../../components/Cards/CardSection/CardSectionComponent";
import advertising from "../../consts/advertising";
import AdvertisingComponent from "../../components/Cards/Advertising/AdvertisingComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
}

const CommunityListPage = ({navigation}: IProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Layout background={BackgroundImage} isModalActivated={modalVisible}>
            <View style={styles.block}>
                <Header
                    navigation={navigation}
                    title={'Коммьюнити'}
                    createEventAction={true}
                    createType={'community'}
                />
                <View style={styles.cardGrid}>
                    {advertising.map(({id, title}) => {
                        return <AdvertisingComponent key={id} id={id} text={title} navigation={navigation}/>
                    })}
                </View>
                <Search filterType={'community'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                <CardSectionComponent navigation={navigation} title={'Мои коммьюнити'} count={45}>
                    <CommunityComponent text={'Люди бегут'} size={ComponentSize.Medium} navigation={navigation} id={5}/>
                    <CommunityComponent text={'Туда-сюда'} size={ComponentSize.Medium} navigation={navigation} id={6}/>
                    <CommunityComponent text={'Только пятки'} size={ComponentSize.Medium} navigation={navigation} id={7}/>
                    <CommunityComponent text={'Сверкают'} size={ComponentSize.Medium} navigation={navigation} id={8}/>
                </CardSectionComponent>
                <View style={{marginTop: 10}}>
                    <CardSectionComponent navigation={navigation} title={'Популярное'} count={22}>
                        <CommunityComponent text={'Эти люди'} size={ComponentSize.Medium} navigation={navigation} id={9}/>
                        <CommunityComponent text={'Всегда'} size={ComponentSize.Medium} navigation={navigation} id={10}/>
                        <CommunityComponent text={'Что делать'} size={ComponentSize.Medium} navigation={navigation} id={11}/>
                        <CommunityComponent text={'Знают'} size={ComponentSize.Medium} navigation={navigation} id={12}/>
                    </CardSectionComponent>
                </View>
            </View>
        </Layout>
    );
}

export default CommunityListPage