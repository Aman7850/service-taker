import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, Input, Card,
         ScrollView, Button, HStack, Skeleton, VStack, MaterialIcons, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const E_Shop = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <ScrollView>
            <View style={{backgroundColor: '#cffafe', padding: 10, flexDirection: 'row', justifyContent: 'space-between', elevation: 10, shadowOpacity: 0.1, shadowColor: 'black'}}>
            <View style={{flexDirection: 'row'}}>
                <Icon name={'menu'}  size={32} ml="2" color="black"  onPress={() => setShowModal(true)}/>
                <Text style={{fontSize: 22, color: 'tomato', fontWeight: '900', marginTop: 8, marginLeft: 5}}>Service Taker</Text>
            </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchScreen')}><Icon name={'search'}  size={32} ml="2" color="black" /></TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Notification')}><Icon name={'notifications-active'}  size={30} ml="2" color="black" /></TouchableWithoutFeedback>
                </View>
            </View>

            <View style={{backgroundColor: '#910d18', padding: 10, paddingBottom: 80}}>
                <Text style={{fontSize: 20, fontWeight: '900', color: 'white', marginTop: 10, fontFamily: 'Roboto'}}>I am looking for..</Text>
                <Text style={{fontSize: 16, color: 'white', marginTop: 10}}>Recommended for you</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: '-20%'}}>
                <Card style={{width: '50%', borderTopEndRadius: 10}}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('./shop1.png')}
                    />
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400', marginTop: 10}}>Improve the refrigerant level in the AC unit and increase the cooling...</Text>
                    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '900', marginTop: 10}}>Gas Refill</Text>

                    <View style={{padding: 10}}>
                        <TouchableWithoutFeedback>
                            <Card style={{padding: 10, backgroundColor: '#0ea5e9'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <Icon name={'shopping-cart'}  size={25} ml="2" color="white" />
                                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400', color: 'white'}}>Book Now</Text>
                            </View>
                            </Card>
                        </TouchableWithoutFeedback>
                    </View>

                    <Text style={{fontSize: 15, fontWeight: '400', opacity: 0.7, textAlign: 'center'}}>Add to Compare</Text>
                </Card>

                <Card style={{width: '50%', borderTopEndRadius: 10}}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('./shop2.png')}
                    />
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400', marginTop: 10}}>Our skilled and certified AC repair technicians provide a comprehensiveness...</Text>
                    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '900', marginTop: 10}}>AC Repair</Text>

                    <View style={{padding: 10}}>
                        <TouchableWithoutFeedback>
                            <Card style={{padding: 10, backgroundColor: '#0ea5e9'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <Icon name={'shopping-cart'}  size={25} ml="2" color="white" />
                                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400', color: 'white'}}>Book Now</Text>
                            </View>
                            </Card>
                        </TouchableWithoutFeedback>
                    </View>

                    <Text style={{fontSize: 15, fontWeight: '400', opacity: 0.7, textAlign: 'center'}}>Add to Compare</Text>
                </Card>
            </View>
        
            <Image
                style={styles.Logo}
                source={require('./banner.png')}
            />

            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 20, color: '#910d18', fontWeight: '900', textAlign: 'center'}}>Why Choose Servicetaker?</Text>
                <Text style={{fontSize: 12, color: 'black', fontWeight: '900', textAlign: 'center'}}>Get more for your print when you upgrade to a subscription plan</Text>

                <VStack space={4} alignItems="center">
                    <Card style={{alignItems: 'center', width: '80%'}}>
                        <Icon name={'local-shipping'}  size={105} ml="2" color="#910d18" />
                        <Text style={{fontSize: 20, color: 'black', fontWeight: '900', textAlign: 'center'}}>Quick Turnaround</Text>
                        <Text style={{fontSize: 18, color: 'black', fontWeight: '400', textAlign: 'center'}}>At Printaz.co.uk our goal is to get you what you need as soon as possible</Text>
                    </Card>

                    <Card style={{alignItems: 'center', width: '80%'}}>
                        <Icon name={'star-border'}  size={105} ml="2" color="#910d18" />
                        <Text style={{fontSize: 20, color: 'black', fontWeight: '900', textAlign: 'center'}}>High Quality</Text>
                        <Text style={{fontSize: 18, color: 'black', fontWeight: '400', textAlign: 'center'}}>We strive to achieve high quality digital and offset printing at affordable pricing that wont break the bank.</Text>
                    </Card>

                    <Card style={{alignItems: 'center', width: '80%'}}>
                        <Icon name={'border-color'}  size={100} ml="2" color="#910d18" />
                        <Text style={{fontSize: 20, color: 'black', fontWeight: '900', textAlign: 'center', marginTop: 10}}>Easy To Order</Text>
                        <Text style={{fontSize: 18, color: 'black', fontWeight: '400', textAlign: 'center'}}>Choose a Product, Upload a Design, Checkout, get FREE Delivery.</Text>
                    </Card>

                    <Card style={{alignItems: 'center', width: '80%'}}>
                        <Icon name={'support-agent'}  size={105} ml="2" color="#910d18" />
                        <Text style={{fontSize: 20, color: 'black', fontWeight: '900', textAlign: 'center'}}>Artwork Support</Text>
                        <Text style={{fontSize: 18, color: 'black', fontWeight: '400', textAlign: 'center'}}>With a team of designers at Printaz - we can help bring your ideas to life.</Text>
                    </Card>
                </VStack>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 22, fontWeight: '900', color: 'black', marginTop: 30, marginLeft: 10}}>Google Reviews</Text>
                    <Image
                        style={styles.google}
                        source={require('./google.png')}
                    />
                </View>

                <VStack space={4} alignItems="center" padding={10}>
                    <Card style={{backgroundColor: '#ecfeff', borderRadius: 15, elevation: 10}}>
                        <Text style={{fontSize: 16, fontWeight: '300', textAlign: 'center', color: 'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</Text>
                        <Text style={{fontSize: 20, fontWeight: '600', color: 'red', textDecorationColor:'underline', fontStyle: 'italic', marginTop: 20}}>Sushil kumar</Text>
                    </Card>

                    <Card style={{backgroundColor: '#ecfeff', borderRadius: 15, elevation: 10}}>
                        <Text style={{fontSize: 22, fontWeight: '900', color: 'black', textAlign: 'center'}}>Excellent service and quality printing</Text>
                        <Text style={{fontSize: 16, fontWeight: '300', textAlign: 'center', color: 'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</Text>
                        <Text style={{fontSize: 20, fontWeight: '600', color: 'red', textDecorationColor:'underline', fontStyle: 'italic', marginTop: 20}}>Natalie</Text>
                    </Card>

                    <Card style={{backgroundColor: '#ecfeff', borderRadius: 15, elevation: 10}}>
                        <Text style={{fontSize: 16, fontWeight: '300', textAlign: 'center', color: 'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</Text>
                        <Text style={{fontSize: 20, fontWeight: '600', color: 'red', textDecorationColor:'underline', fontStyle: 'italic', marginTop: 20}}>Radhey</Text>
                    </Card>
                </VStack>

                <View style={{backgroundColor: '#910d18', padding: 10}}>
                    <Text style={{fontSize: 22, fontWeight: '900', color: 'white', textAlign: 'center'}}>Subscribe to Newsletter</Text>
                    <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>Sign up for the Newsletter for special offers, news and inspiration</Text>

                    <View style={{flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>
                        <Input w="75%" maxW="350px" bgColor={'white'} variant="outline" placeholder="Enter your mail" />
                        <TouchableWithoutFeedback>
                            <Card style={{backgroundColor: 'black', height: 50}}>
                                <Icon name={'chevron-right'}  size={25} ml="2" color="white" />
                            </Card>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>Quick Links</Text>
            </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    tinyLogo: {
        width: 190,
        height: 170,
        alignSelf: 'center',
        marginTop: -7,
        borderRadius: 10
        
    },
    Logo: {
        width: '100%',
        height: 100,
        opacity: 0.8,
        alignSelf: 'center',
        marginTop: 10
    },
    google: {
        marginTop: 15
    }
  });
export default E_Shop;
