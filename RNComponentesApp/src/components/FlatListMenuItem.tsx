import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity activeOpacity={0.5} 
         onPress={() => { navigation.navigate(menuItem.component)}} >
            <View style={styles.container}>
                <Icon name={menuItem.icon} color='#5856D6' size={17} />
                <Text style={styles.itemTex}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon name="chevron-forward-outline" color='#5856D6' size={17} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemTex: {
        marginLeft: 10,
        fontSize: 17
    }
});
