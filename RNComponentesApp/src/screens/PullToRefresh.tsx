import React, { useState } from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

export const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [mensaje, setmensaje] = useState("Datos Iniciales")
    const { top }  = useSafeAreaInsets();

    const onRefresh = () => {
        setRefreshing(true);
        setmensaje("Cargando...");
        setTimeout(() => {
            console.log("Terminado");
            setRefreshing(false);
            setmensaje("Datos Cargados");
        }, 3500);
    }

    return (
        <ScrollView style={{
            marginTop: refreshing ? top : 0
        }}
            refreshControl = {
                <RefreshControl                     
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white','red','orange']}
                    style={{
                        backgroundColor:'#5856D6'                        
                    }}
                    title = 'Cargando Datos...'
                    titleColor = "#5856D6"                    
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to Refresh' />
                <Text style={styles.title}>{mensaje}</Text>
            </View>           
        </ScrollView>
    )
}
