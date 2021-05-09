import React from 'react'
import { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {

    const { authState, logout } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumsScreen</Text>
            {
                authState.isLoggedIn && <Button title="Logout" onPress={logout} />
            }
            
        </View>
    )
}
