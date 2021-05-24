import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    const showModal = () =>{
        setIsVisible(true);
    }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modal Screen' />
            <Button title='Abrir Modal' onPress={showModal} />

            <Modal 
                animationType='fade'
                visible={isVisible}
                transparent={true}                
                >
                    <View style={{       
                        flex: 1,             
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center',                                            
                        
                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            width: 350,
                            height: 200,
                            borderRadius: 10,
                            padding: 15,
                            shadowOffset: {
                                width: 0,
                                height: 10
                            },
                            shadowOpacity:0.25,
                            elevation: 10                           
                        }}>
                            
                            <Text style={{fontSize: 20, fontWeight:'bold'}}>Modal</Text>
                            <Text style={{fontSize: 16, fontWeight: '300', marginBottom:20  }}>Cuerpo del Modal</Text>
                            <Button title='Cerrar' onPress={() =>{setIsVisible(false)}}  />
                        </View>
                    </View>
            </Modal>
        </View>
    )
}
