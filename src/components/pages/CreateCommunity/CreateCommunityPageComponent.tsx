import {Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./style";
import HeaderWithBack from "../../Header/HeaderWithBack/HeaderWithBack";
import {AntDesign} from "@expo/vector-icons";
import {Routes} from "../../../consts/routesNames";
import React, {useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import ITag from "../../../interfaces/ITag";
import Loading from "../../shared/loading/Loading";
import ComponentSize from "../../../consts/componentSize";
import Chip from "../../shared/chip/Chip";
import {resultTagList} from "../../../pages/SelectFavourite/SelectFavouritePage";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    isLoading: boolean,
    isLoadingCommunityCreated: boolean,
    tags: ITag[],
    createCommunity: (dataToSave : {name: string, description: string, tags: string[], visible: boolean}) => void
}


const CreateCommunityPageComponent = ({
                                          navigation,
                                          isLoading,
                                          tags,
                                          createCommunity,
                                          isLoadingCommunityCreated
                                      }: IProps) => {
    const [isOpenCommunity, setIsCloseCommunity] = useState(true);

    const toggleSwitchIsOpenCommunity =
        () => setIsCloseCommunity(previousState => !previousState);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        const dataToSave = {
            name,
            description,
            tags: resultTagList,
            visible: isOpenCommunity
        }
        createCommunity(dataToSave)
    }

    return (
        <View style={styles.block}>
            <HeaderWithBack navigation={navigation}
                            title={'Создание коммьюнити'}/>

            <View style={styles.inputBlock}>
                <Text style={styles.title}>
                    Название коммьюнити
                </Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
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
                    value={description}
                    onChangeText={setDescription}
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
                    {isLoading
                        ?
                        <Loading/>
                        :
                        <>
                            {tags?.map(({tag_id, name, image}) => {
                                return <Chip image={image} key={tag_id} name={name} tag_id={tag_id}
                                             size={ComponentSize.Small}/>
                            })}
                        </>
                    }
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
            {isLoadingCommunityCreated
                ?
                <Loading/>
                :
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        Создать
                    </Text>
                </TouchableOpacity>}
        </View>
    )
}

export default CreateCommunityPageComponent