import {
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import styles from "./style";
import Chip from "../../components/shared/chip/Chip";
import sections from '../../consts/sections'
import React from "react";
import Layout from "../../components/layout/Layout";
import BackgroundImage from "../../assets/backgrounds/secondDarkBackground.png";

const SelectFavourite = ({navigation} : any) => {

    return (
        <ImageBackground
            source={BackgroundImage}
            style={styles.background}
        >
            <Layout>
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
                            return <Chip title={section}/>
                        })}
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Registration')
                        }}
                        activeOpacity={0.75}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Далее</Text>
                        </View>
                    </TouchableOpacity >
                </View>
            </Layout>
        </ImageBackground>
    )
}

export default SelectFavourite