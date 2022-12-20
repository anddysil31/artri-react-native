import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, ImageBackground, PixelRatio } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CuriosityScreen from './components/CuriosityScreen';


const logo = require('./assets/logo.png')
const nologo= require('./assets/nologo.png')

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground style={styles.backgroundImage} source={require('./assets/background.png')}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.textLogo}>Bienvenido</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Button
        title="Go to Curiosity"
        onPress={() => navigation.navigate('Curiosity')}
      />
      </ImageBackground>
  
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Curiosity" component={CuriosityScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backgroundImage:{
    flex: 1,
    width:'100%',
    alignItems:'center',
  
  },
  image:{
    width:210,
    height:210
  },
  textLogo:{
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'bold'
  }
});

