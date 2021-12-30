import React from 'react';
import { StatusBar, SafeAreaView, View, } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/componentes/telas/Cesta';
import mock from './src/telas/componentes/componentes/mocks/cesta'

export default function App() {
  const [ fonteCarregada ] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MonteserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }
 

  return (
    <SafeAreaView style={{ flex: 1}} >
      <StatusBar />
      <Cesta {...mock} />
      </SafeAreaView>
  );
}
