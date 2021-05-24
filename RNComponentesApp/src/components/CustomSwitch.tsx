import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
    isOn:boolean,
    onChange: (isEnabled:boolean) => void
}

export const CustomSwitch = ({isOn, onChange} : Props) => {

    const [isEnabled, setisEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setisEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
            thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
