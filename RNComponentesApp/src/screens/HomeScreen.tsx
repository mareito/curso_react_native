import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'
import { menuItems } from '../data/menuItems'
import { MenuItem } from '../interfaces/appInterfaces'
import { styles } from '../theme/AppTheme'

export const HomeScreen = () => {
           
    

    return (
        <View style={{ flex: 1, ...styles.globalMargin}}>
            <FlatList
                ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú"/>}     
                ItemSeparatorComponent={() => <ItemSeparator />}        
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name} />
        </View>
    )
}
