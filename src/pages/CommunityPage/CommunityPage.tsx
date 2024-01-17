import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import styles from "./style";
import React from "react";
import BackgroundImage from "../../assets/backgrounds/darkBackground.png";
import Layout from "../../components/layout/Layout";
import {Routes} from "../../consts/routesNames";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const CommunityPage = ({navigation}: NativeStackScreenProps<any, string> ) => {
    return (
            <Layout background={BackgroundImage}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        КОММЬЮНИТИИИИ
                    </Text>
                </View>
            </Layout>
    );
}

export default CommunityPage