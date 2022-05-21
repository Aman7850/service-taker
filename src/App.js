import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from "react-native-modal-datetime-picker";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
// import LottieView from 'lottie-react-native';
import StartScreen from './StartScreen';
import OTP from './OTP';
import User_Info from './User_Info';
import Dashboard from './Dashboard';
import SearchScreen from './SearchScreen';
import Notification from './Notification';
import E_Shop from './E_Shop';
import Error from './Error';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  

  
  useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      
    }, 2000);
  }, []);

  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#910d18'}}>
        <Image
                  style={styles.tinyLogo}
                  source={require('./takerlogo.png')}
                  autoPlay loop duration={2000}/>
      </View>
    )
    }
    return(
      
        <NavigationContainer independent={true}>
        
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'StartScreen'}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="User_Info" component={User_Info} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="E_Shop" component={E_Shop} />
          <Stack.Screen name="Error" component={Error} />
          
            </Stack.Navigator>
        
      </NavigationContainer>
     
     
    )
}
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f6',
    
  },
  tinyLogo: {
    width: '85%',
    height: 100
},
});

export default App;