import React from 'react'
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../theme/appTheme'

interface Props {
    iconName: string
}

export const TouchableIcon = ({iconName} : Props) => {

    const { changeFavouriteIcon } = useContext(AuthContext);
    
    return (
        <TouchableOpacity onPress={() =>{ changeFavouriteIcon(iconName) }}>
            <Icon 
                name={iconName}     
                size={ 80 } 
                color={ colores.primary } />
        </TouchableOpacity>
    )
}
