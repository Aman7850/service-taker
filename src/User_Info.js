import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, Input, Card, ScrollView, Button, HStack, MaterialIcons, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const User_Info = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setdate] = useState(
      '0' +
        (new Date().getMonth() + 1) +
        '/' +
        +new Date().getDate() +
        '/' +
        new Date().getFullYear(),
    );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const g = JSON.stringify(date);
    const g_array = g.slice(1, 11).split('-').reverse();
    const d = g_array[0];
    const m = g_array[1];
    const y = g_array[2];
    const togedate = m + '/' + d + '/' + y;
    console.log('A date has been picked:jhvhvhgvhg ', togedate);
    console.log('A date has been picked: ', typeof g);
    setdate(togedate);
    hideDatePicker();
};

  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={{alignItems: 'center', marginTop: 20}}>
          <Image
              style={styles.tinyLogo}
              source={require('./takerlogo.png')}
          />
      </View>

      <View style={{marginTop: 30, padding: 5 }}>
          <Text style={{color: 'white', fontSize: 23, fontWeight: '900'}}>Welcome</Text>
      </View>


        <View style={styles.SecondContainer}>
          <View style={{padding: 15}}>
            <View style={{marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Enter your Email ID</Text>
                <View style={{marginTop: 10}}>
                  <Input w={{
                    base: "75%",
                    md: "25%",
                  }} InputRightElement={<Icon name={'email'}  size={25} ml="2" color="black" />} variant="rounded" placeholder="Enter Email ID"/>
                </View>
            </View>

            <View style={{marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Enter your name</Text>
                <View style={{marginTop: 10}}>
                    <Input w={{
                      base: "75%",
                      md: "25%"
                    }} InputRightElement={<Icon name={'person'} size={25} ml="2" color="black" />} variant="rounded" placeholder="Enter your name" />
                </View>
            </View>

            <View style={{marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Enter your DOB</Text>
                <View style={{marginTop: 10}}>
                    <Button title={date} onPress={showDatePicker} style={{height: 50, borderRadius: 20, width: '75%'}}><Text style={{color: 'white', fontSize: 18, fontWeight:'900'}}>Pick Date</Text></Button>
                      <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                          // value = {handleConfirm} onChangeText = {(text) => handleConfirm(text)}
                      />
                </View>
            </View>

            <View style={{marginTop: 30, marginBottom: '66%'}}>
                <HStack space={6}>
                
                    <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
                    I accept the terms & conditions
                  </Checkbox>
                </HStack>
                
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard')}>
                        <Card style={{width: '100%', height: 55, backgroundColor: '#0e7490', borderRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20, elevation: 10}}>
                            <Text style={{fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center'}}>Agree and Continue</Text>
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
    
  },
  SecondContainer: {
    flex: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    maxHeight: '100%',
    
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
export default User_Info;