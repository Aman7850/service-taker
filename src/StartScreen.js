import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, ScrollView, Input, CheckIcon, Card } from 'native-base';

const StartScreen = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.Header}>
                <Image
                    style={styles.tinyLogo}
                    source={require('./takerlogo.png')}
                />

                <View style={{marginTop: 20, padding: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'white', fontFamily: 'Roboto'}}>1. Create your own account with only a few clicks.</Text>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'white', marginTop: 20, fontFamily: 'Roboto'}}>2. Your personal data is secured with us! Login and registration are SSL secured.</Text>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'white', marginTop: 20, fontFamily: 'Roboto'}}>3. We only use you personal information for the processing of your order.</Text>
                        <View style={{marginTop: 20, alignItems: 'center'}}>
                            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', fontFamily: 'Roboto'}}> Further information can be found in our</Text>
                            <Text style={{fontSize: 14, fontWeight: '600', color: 'blue', fontFamily: 'Roboto'}}> data protection declaration.</Text>
                        </View>
                 </View>

                 <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center', fontSize: 18, color: 'black'}}>or</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>

                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'white', fontFamily: 'Roboto'}}>Enter your mobile number</Text>

                    <View style={{alignItems: 'center', marginTop: 20}}>
                
                        <Input
                            placeholder='Enter mobile number'
                            value={text}
                            variant="rounded"
                            w="100%"
                            maxWidth="500px" 
                            bgColor={'white'}
                            keyboardType='numeric'
                            onChangeText={text => setText(text)}
                            
                        />
                    </View>

                    <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 20}}>
                    
                        <Text style={{color: 'white'}}>Terms and conditions apply  </Text>
                        
                    </View>

                    <View style={{marginTop: 20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Error')}>
                    <Card style={{width: 300, height: 55, backgroundColor: '#fff', borderRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 15, fontWeight: '500', color: 'black', textAlign: 'center'}}>Put OTP</Text>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
                </View>
            </View>
    

    
    
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#910d18',
      padding: 10
    },
    tinyLogo: {
        width: '85%',
        height: 100
    },
    Header: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    }
  });
export default StartScreen;