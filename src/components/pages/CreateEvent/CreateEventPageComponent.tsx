import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../../pages/CreateEvent/style";
import HeaderWithBack from "../../Header/HeaderWithBack/HeaderWithBack";
import {AntDesign} from "@expo/vector-icons";
import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import Map from "../../shared/map/Map";
import {Routes} from "../../../consts/routesNames";
import React, {Dispatch, SetStateAction, useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import ITag from "../../../interfaces/ITag";
import Chip from "../../shared/chip/Chip";
import ComponentSize from "../../../consts/componentSize";
import ICommunity from "../../../interfaces/ICommunity";
import CommunityComponent from "../../Cards/Community/CommunityComponent";
import {resultTagList} from "../../../pages/SelectFavourite/SelectFavouritePage";
import Loading from "../../shared/loading/Loading";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    communities: ICommunity[],
    isCommunitiesLoading: boolean,
    tags: ITag[],
    isTagsLoading: boolean,
    isEventLoading: boolean,
    createNewEvent: ({}) => any
}

const CreateEventPageComponent
    = ({navigation, tags, communities, isCommunitiesLoading, isTagsLoading, createNewEvent, isEventLoading}: IProps) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [name, setName] = useState('')
    const [place, setPlace] = useState('г. Екатеринбург, ул. Луначарского, 38')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [time, setTime] = useState('19:00')

    const onChangeDate = (event: DateTimePickerEvent, selectedDate: Date) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const handleCreateEvent = () => {
        createNewEvent({
            name,
            description,
            place,
            date: date.toLocaleDateString('ru'),
            time,
            price: +price,
            tags: resultTagList
        })
    }

    return (
        <View style={styles.block}>
            <HeaderWithBack navigation={navigation} title={'Создание мероприятия'}/>

            <View style={styles.inputBlock}>
                <Text style={styles.title}>
                    Название мероприятия
                </Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.search}
                />
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.title}>
                    Дата и время
                </Text>
                <View style={styles.inputWithIcon}>
                    <TextInput
                        keyboardType={'decimal-pad'}
                        style={[styles.search, {width: '90%'}]}
                        defaultValue={date.toLocaleDateString('ru')}
                        value={date.toLocaleDateString('ru')}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setShow(true)}
                    >
                        <AntDesign name="calendar" size={24} color="#623EA0" style={{marginTop: 2}}/>
                    </TouchableOpacity>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        // @ts-ignore
                        onChange={onChangeDate}
                    />
                )}
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.title}>
                    Место проведения
                </Text>
                <TextInput
                    value={place}
                    onChangeText={setPlace}
                    style={styles.search}
                    defaultValue={'г. Екатеринбург, ул. Луначарского, 38'}
                    editable={false}
                />
                <Map/>
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
                    Разделы
                </Text>
                {isTagsLoading
                    ?
                    <Loading/>
                    :
                    <View style={styles.sectionGrid}>
                    {tags.map((tag) => {
                        return <Chip name={tag.name} tag_id={tag.tag_id} size={ComponentSize.Small}/>
                    })}
                </View>}
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.title}>
                    Цена
                </Text>
                <TextInput
                    value={price}
                    onChangeText={setPrice}
                    style={styles.search}
                    placeholder={'указывается в рублях'}
                    placeholderTextColor={'#858585'}
                />
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.title}>
                    Лимит человек
                </Text>
                <TextInput
                    style={styles.search}
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
                    Мои коммьюнити
                </Text>
                {isCommunitiesLoading
                    ?
                    <Loading/>
                    :
                    <View style={styles.communityGrid}>
                    {communities.map(({community_id, name, image}) => {
                        return <CommunityComponent image={image} community_id={community_id} navigation={navigation}
                                                   name={name}/>
                    })}
                </View>}
            </View>
            {isEventLoading
                ?
                <Loading/>
                :
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.submitButton}
                onPress={handleCreateEvent}
            >
                <Text style={styles.submitButtonText}>
                    Создать
                </Text>
            </TouchableOpacity>}
        </View>
    )
}

export default CreateEventPageComponent