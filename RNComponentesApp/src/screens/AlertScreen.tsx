import React from 'react'
import { StyleSheet } from 'react-native'
import { Platform } from 'react-native'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {

    const showAlert = () => {

        Alert.alert(
            "Titulo de la Alerta",
            "Este es el mensaje de la Alerta",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Aceptar", onPress: () => console.log("OK Pressed") }
            ]
        )
    }

    const showPrompt = () => {

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button title="Mostrar alerta" onPress={showAlert} />
            <View style={{ height: 10 }} />
            <Button title="Mostrar Prompt (IOS)" onPress={showPrompt} />
        </View>
    )
}
const locaStyles = StyleSheet.create({
    button: {
        marginVertical: 5
    }
});
