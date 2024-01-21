import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import Chip from "../../components/shared/chip/Chip";
import {sections} from '../../consts/sections'
import React from "react";
import Layout from "../../components/layout/Layout";
import BackgroundImage from "../../assets/backgrounds/secondDarkBackground.png";
import {Routes} from "../../consts/routesNames";
import ComponentSize from "../../consts/componentSize";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>
}

const SelectFavouritePage = ({navigation}: IProps) => {

    return (
        <Layout background={BackgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Выбери минимум три раздела, которые интересны тебе больше остальных
                </Text>
                <TextInput
                    style={styles.search}
                    placeholder={'Поиск'}
                    placeholderTextColor={'#0F0D1E'}
                />
                <View style={styles.chips}>
                    {sections.map((section) => {
                        return <Chip key={section} title={section} size={ComponentSize.Big}/>
                    })}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Routes.NAVIGATION_ROUTE)
                    }}
                    activeOpacity={0.75}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Далее</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default SelectFavouritePage