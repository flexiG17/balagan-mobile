import {View, Text, TouchableOpacity} from "react-native";
import styles from './style'
import React from "react";

const PopularComponent = () => {
    return (
            <View style={styles('').block}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{width: '32%'}}
                >
                    <View style={styles('#3B285C').container}>
                        <Text style={styles('').text}>
                            Выставки
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
                            Кино
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
                            Театр
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
                            Дегустации
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
                            Свидания
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