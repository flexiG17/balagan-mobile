import {ActivityIndicator, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./style";
import Chip from "../../components/shared/chip/Chip";
import {sections} from '../../consts/sections'
import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/Layout";
import BackgroundImage from "../../assets/backgrounds/secondDarkBackground.png";
import {Routes} from "../../consts/routesNames";
import ComponentSize from "../../consts/componentSize";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import ITag from "../../interfaces/ITag";
import {getTags, pushTags} from "../../actions/tagActions";
import CustomModalComponent from "../../components/shared/modal/CustomModalComponent";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>
}

export const resultTagList: string[] = []

export const getResultTagList = (tag_id: string) => {
    const index = resultTagList.indexOf(tag_id)
    if (index === -1)
        resultTagList.push(tag_id.toString())
    else
        resultTagList.splice(index, 1)
}

const SelectFavouritePage = ({navigation}: IProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalButton, setModalButton] = useState(true);

    const [isLoading, setIsLoading] = useState(true)

    const [searchData, setSearchData] = useState('')
    const [tags, setTags] = useState<ITag[]>([])

    useEffect(() => {
        getTags(100, 0)
            .then(({data}: { data: { data: ITag[] } }) => {
                setIsLoading(false)
                setTags(data.data)
            })
    }, []);

    const handleClick = () => {
        setIsLoading(true)
        pushTags(resultTagList)
            .then((data) => {
                setModalVisible(true)
                setModalText('Ваши интересы будут учтены!')
                setModalButton(false)
                setIsLoading(false)

                setTimeout(() => {
                    setModalVisible(false)
                    navigation.navigate(Routes.NAVIGATION_ROUTE)
                }, 1500)
            })
            .catch((data) => {
                setIsLoading(false)
                setModalText(data.response.data.message)
                setModalVisible(true)
            })
    }

    return (
        <ScrollView
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
            >
                <CustomModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} text={modalText}/>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Выбери минимум три раздела, которые интересны тебе больше остальных
                    </Text>
                    <TextInput
                        value={searchData}
                        onChangeText={setSearchData}
                        style={styles.search}
                        placeholder={'Поиск'}
                        placeholderTextColor={'#0F0D1E'}
                    />
                    <View style={styles.chips}>
                        {isLoading
                            ?
                            <ActivityIndicator size="large" color="#AA69B7" style={{marginTop: 40}}/>
                            :
                            <>
                                {tags
                                    .filter((({name}) => name?.toLowerCase().includes(searchData.toLowerCase())))
                                    .map(({tag_id, name}) => {
                                        return <Chip
                                            key={tag_id}
                                            name={name}
                                            tag_id={tag_id}
                                            size={ComponentSize.Big}/>
                                    })}
                            </>
                        }
                    </View>
                    {!isLoading && <TouchableOpacity
                        onPress={handleClick}
                        activeOpacity={0.75}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Далее</Text>
                        </View>
                    </TouchableOpacity>}
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default SelectFavouritePage