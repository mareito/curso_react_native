import React from 'react'
import { SafeAreaView, View } from 'react-native';
import { BoxObjectScreen } from './src/screens/BoxObjectScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexDirection } from './src/screens/FlexDirection';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
       <TareaScreen />
    </SafeAreaView>    
  )
}

 export default App;
