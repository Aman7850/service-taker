import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, Input, Card, ScrollView, Button, HStack, Skeleton, MaterialIcons, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Notification = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={{elevation: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ecfeff', padding: 15}}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon name={'keyboard-backspace'}  size={35} ml="2" color="#0891b2" /></TouchableOpacity>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#0891b2', marginLeft: 20, marginTop: 5}}>Notification</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    
  });
export default Notification;
