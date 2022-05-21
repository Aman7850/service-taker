import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, Input, Card, ScrollView, Modal, Avatar, FormControl, Button, HStack, Center, Pressable, Badge, Skeleton, MaterialIcons, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Dashboard = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [selected, setSelected] = React.useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      setTimeout(async() => {
        setIsLoading(false);
        
      }, 2000);
    }, []);

  return isLoading ? (
    <Skeleton>
      <Skeleton flex="1" h="150" rounded="md" startColor="indigo.300" />
    </Skeleton>
  ) : (
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

        <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', padding: 10, width: '100%'}}>
            <Card style={{backgroundColor: '#f0f9ff', alignItems: 'center', justifyContent: 'center', elevation: 10, width: '25%', marginLeft: -10}}>
                <Text style={{fontSize: 21, color: 'black', fontWeight: '900'}}>2</Text>
                <Text style={{color: 'black', fontWeight: '900', fontSize: 10}}>Appliances</Text>
            </Card>

            <Card style={{backgroundColor: 'white', alignItems: 'center', elevation: 10, justifyContent: 'center', width: '25%', marginLeft: 5}}>
                <Text style={{fontSize: 21, color: 'black', fontWeight: '900'}}>0</Text>
                <Text style={{color: 'black', fontWeight: '900', fontSize: 11}}>AMC</Text>
            </Card>

            <Card style={{backgroundColor: 'white', alignItems: 'center', elevation: 10, justifyContent: 'center', width: '25%', marginLeft: 5}}>
                <Text style={{fontSize: 21, color: 'black', fontWeight: '900'}}>0</Text>
                <Text style={{color: 'black', fontWeight: '900', fontSize: 11, textAlign: 'center'}}>Service Request</Text>
            </Card>

            <Card style={{backgroundColor: '#f0f9ff', alignItems: 'center', elevation: 10, justifyContent: 'center', width: '25%', marginLeft: 5}}>
                <Icon name={'open-in-browser'}  size={30} ml="2" color="black" />
                <Text style={{color: 'black', fontWeight: '900', fontSize: 11, textAlign: 'center'}}>Register Product</Text>
            </Card>
        </View>

        <View>
            <Card style={{backgroundColor: '#f0f9ff', padding: 10, elevation: 10, shadowColor: 'black'}}>
                <Text style={{fontSize: 22, fontWeight: '900', color: 'black'}}>AMC & Accessories</Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{justifyContent: 'center'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'app-registration'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto'}}>Buy AMC</Text>
                    </View>

                    <View style={{marginLeft: 15, justifyContent: 'center'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'category'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto'}}>Accessories</Text>
                    </View>

                    <View style={{marginLeft: 15, justifyContent: 'center'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'shopping-cart'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto'}}>My Orders</Text>
                    </View>

                    <View style={{marginLeft: 15, justifyContent: 'center'}}>
                      <View style={{alignItems: 'center', marginLeft: -30}}>
                        <Icon name={'add-moderator'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto', textAlign: 'center', width: '80%'}}>Promotional Warranty</Text>
                    </View>
                </View>
            </Card>
        </View>

        <View style={{marginTop: 10}}>
            <Card style={{backgroundColor: '#f0f9ff', padding: 10, elevation: 10, shadowColor: 'black'}}>
                <Text style={{fontSize: 22, fontWeight: '900', color: 'black'}}>Service</Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{width: '25%'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'get-app'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto', textAlign: 'center'}}>Installation/Repair</Text>
                    </View>

                    <View style={{width: '25%'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'location-on'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto', textAlign: 'center'}}>Track Service</Text>
                    </View>

                    <View style={{width: '25%'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'settings-applications'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto', textAlign: 'center'}}>OneTime Service</Text>
                    </View>

                    <View style={{width: '25%'}}>
                      <View style={{alignItems: 'center'}}>
                        <Icon name={'bolt'}  size={30} ml="2" color="black" />
                      </View>
                        <Text style={{color: 'black', fontFamily: 'Roboto', textAlign: 'center'}}>Electrical Service</Text>
                    </View>
                </View>
            </Card>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 22, fontWeight: '900', color: 'white'}}>My Appliances</Text>
            <Badge colorScheme="gold" alignSelf="center" borderRadius={10} marginLeft = {5}>
              VIEW ALL
            </Badge>
        </View>

        <Card style={{backgroundColor: '#ecfeff', marginTop: 10, elevation: 10}}>

            <Image
              style={styles.tinyLogo}
              source={require('./service_1.png')}
            />
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
            <TouchableWithoutFeedback>
                <Card style={{backgroundColor: '#4338ca', elevation: 10}}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: 'white', textAlign: 'center'}}>Service Request</Text>
                </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Card style={{backgroundColor: '#4338ca', elevation: 10}}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: 'white', textAlign: 'center'}}>Renew AMC</Text>
                </Card>
            </TouchableWithoutFeedback>
          </View>
        </Card>
      </View>

      <NativeBaseProvider>
      <Box flex={1}  safeAreaTop width="100%" alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => navigation.navigate('E_Shop')}>
            <Center>
              <Icon name={'shopping-bag'}  size={30} ml="2" color="red" />
              <Text color="red" fontSize="12">
                E-Shop
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon name={'bookmark-border'}  size={30} ml="2" color="red" />
              <Text color="red" fontSize="12">
                My Service
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
            <Icon name={'local-offer'}  size={30} ml="2" color="red" />
              <Text color="red" fontSize="12">
                Offer
              </Text>
            </Center>
          </Pressable>
          
        </HStack>
      </Box>
    </NativeBaseProvider>


    <Modal animationIn="slideInLeft" transparent={true} isOpen={showModal} onClose={() => setShowModal(false)} size={'xl'} marginLeft={-5} marginTop={-5}>
    <Modal.Content maxWidth="400px">
      
      <Modal.Header><TouchableOpacity onPress={() => setShowModal(false)}><Icon name={'close'}  size={32} ml="2" color="black" /></TouchableOpacity></Modal.Header>
      <Modal.Body>
        <Card style={{backgroundColor: 'lightgrey', elevation: 5}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar source={{
                uri: "https://cdn.xxl.thumbs.canstockphoto.com/male-default-placeholder-avatar-funny-person-with-long-orange-hair-profile-gray-picture-isolated-eps-vector_csp43256483.jpg"
              }} />
              <Text style={{fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 20}}>USER</Text>
            </View>
        </Card>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                <Icon name={'home'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Home</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'person'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>My Profile</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'add-moderator'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Promotional Warranty</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'local-mall'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>My Appliances</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'sync'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Re-sync Appliances</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'shopping-cart'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>My Cart</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'app-registration'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>My AMC</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'shopping-basket'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>My Orders</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'touch-app'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>My Actions</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'access-time'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Reminders</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'delete'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Delete Products</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'feedback'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Feedback</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Icon name={'support-agent'}  size={30} ml="2" color="#0ea5e9" />
                <Text style={{fontFamily: 'Roboto', color: 'black', fontSize: 15, fontWeight: '500', marginLeft: 10}}>Support</Text>
            </View>
        </TouchableOpacity>

      </Modal.Body>
      <Modal.Footer>
        
          <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
              <Card style={{backgroundColor: '#0284c7', width: '100%'}}>
                  <Text style={{textAlign: 'center', color: 'white', fontWeight: '900', fontSize: 18}}>LOGOUT</Text>
              </Card>
          </TouchableWithoutFeedback>
        
      </Modal.Footer>
    </Modal.Content>
  </Modal>  
    </ScrollView>

    
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#910d18',
    
  },
  tinyLogo: {
    width: 300,
    height: 180,
    alignSelf: 'center'
  }
});
export default Dashboard;
