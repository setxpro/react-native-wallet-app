import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import COLORS from '../src/Styles/theme'


import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'

import {
    DMSans_400Regular
} from "@expo-google-fonts/dm-sans"

import {
    DMSerifDisplay_400Regular
} from '@expo-google-fonts/dm-serif-display'
import { Container } from './Screens/styles';


export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading/>
    }

  return (
    <ThemeProvider theme={COLORS}>
        <View>
        <StatusBar style="dark" translucent backgroundColor='cyan'/>
        <Container>
            <Text>
                Hello World!!
            </Text>
        </Container>
        </View>
    </ThemeProvider>
  );
}

