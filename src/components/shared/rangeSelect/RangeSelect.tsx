import {View, Text, TextInput} from "react-native";
import styles from './style'

const RangeSelect = ({type} : {type : 'price' | 'users'}) => {
    return(
        <View style={styles.block}>
            <Text style={styles.text}>
                От
            </Text>
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholder={'min'}
                placeholderTextColor={'#7D7D7D'}
            />
            <Text style={styles.text}>
                до
            </Text>
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholder={'max'}
                placeholderTextColor={'#7D7D7D'}
            />
            <Text style={styles.text}>
                {type === 'price' ? 'рублей' : 'человек'}
            </Text>
        </View>
    )
}

export default RangeSelect