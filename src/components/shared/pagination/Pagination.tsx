import styles from './style'
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

const Pagination = () => {
    return (
        <View style={styles.pagination}>
            <View style={styles.paginationSelectedPage}>
                <TouchableOpacity>
                    <Text style={styles.paginationSelectedText}>
                        1
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.paginationPage}>
                    2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.paginationPage}>
                    3
                </Text>
            </TouchableOpacity>
            <Text style={styles.paginationPage}>
                ...
            </Text>
            <TouchableOpacity>
                <Text style={styles.paginationText}>
                    Следующая страница &gt;
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Pagination