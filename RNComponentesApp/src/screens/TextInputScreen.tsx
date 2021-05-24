import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/AppTheme'

export const TextInputScreen = () => {


    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Text Input' />
                        <TextInput
                            style={localStyles.textInputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize='words'
                            textContentType='password'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={localStyles.textInputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={(value) => onChange(value, 'email')}
                        />
                        <TextInput
                            style={localStyles.textInputStyle}
                            placeholder="Ingrese su telefono"
                            autoCorrect={false}
                            keyboardType='phone-pad'
                            onChangeText={(value) => onChange(value, 'phone')}
                        />                       
                        <View style={localStyles.switchRow}>
                            <Text style={localStyles.switchText}>Suscribirse</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>
                        <View style={{ height: 20 }} />
                        <HeaderTitle title={
                            JSON.stringify(form, null, 3)
                        } />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const localStyles = StyleSheet.create({
    textInputStyle: {
        height: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.5)',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center'
    }
});
