import {View, Text, TouchableOpacity} from "react-native";
import styles from './style'
import React from "react";
import ITag from "../../../interfaces/ITag";

const PopularComponent = ({tags}: { tags: ITag[] }) => {

    return (
        <View style={styles('').block}>

            <TouchableOpacity
                activeOpacity={0.8}
                style={{width: '32%'}}
            >
                <View style={styles('#3B285C').container}>
                    <Text style={styles('').text}>
                        {Boolean(tags[0]) ? tags[0].name : ''}
                    </Text>
                    <Text style={styles('').text}>
                        &gt;
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{width: '32%'}}
            >
                <View style={styles('#584F8D').container}>
                    <Text style={styles('').text}>
                        {Boolean(tags[1]) ? tags[1].name : ''}
                    </Text>
                    <Text style={styles('').text}>
                        &gt;
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{width: '32%'}}
            >
                <View style={styles('#B19FD1').container}>
                    <Text style={styles('').text}>
                        {Boolean(tags[2]) ? tags[2].name : ''}
                    </Text>
                    <Text style={styles('').text}>
                        &gt;
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{width: '48.7%'}}
            >
                <View style={styles('#B19FD1').bigContainer}>
                    <Text style={styles('').text}>
                        {Boolean(tags[3]) ? tags[3].name : ''}
                    </Text>
                    <Text style={styles('').text}>
                        &gt;
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{width: '48.7%'}}
            >
                <View style={styles('#3B285C').bigContainer}>
                    <Text style={styles('').text}>
                        {Boolean(tags[4]) ? tags[4].name : ''}
                    </Text>
                    <Text style={styles('').text}>
                        &gt;
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PopularComponent