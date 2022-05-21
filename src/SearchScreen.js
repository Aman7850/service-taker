import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeBaseProvider, Text, Box, Input, Card, ScrollView, Button, HStack, Skeleton, MaterialIcons, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SearchScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Card style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', elevation: 5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon name={'keyboard-backspace'}  size={35} ml="2" color="black" /></TouchableOpacity>
            <Input mx="3" placeholder="Search here..." w="75%" maxWidth="300px" bgColor={'#ecfeff'}/>
            <TouchableOpacity><Icon name={'search'}  size={35} ml="2" color="black" /></TouchableOpacity>
        </Card>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '60%'}}>
                <Text style={{opacity: 0.1, fontSize: 22, fontWeight: '900'}}>No Product Match</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10
    },
    
  });
export default SearchScreen;
