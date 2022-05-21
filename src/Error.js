import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {
  NativeBaseProvider,
  Text,
  Box,
  Input,
  Button,
  Card,
  ScrollView,
  HStack,
  Skeleton,
  VStack,
  MaterialIcons,
  Select,
  CheckIcon,
  useToast,
  Checkbox,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Error = (props) => {
  const navigation = useNavigation();
  let [service, setService] = useState('');
  const [text, setText] = useState('xyz');
  const toast = useToast();

  return (
    <View style={styles.container}>
      <Input
        bgColor={'white'}
        style={styles.input}
        onChangeText = {(value) => setText(value)}
        placeholder="Enter text here..."
      />

      <View style={{marginTop: 10}}>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service..."
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </View>

      <View style={{marginTop: 10}}>
        <Button colorScheme="error" onPress={() => toast.show({
          title: <Text>{text}</Text>,
          status: "error",
          description: "Please create a support ticket from the support page"
        })}>
            Submit
          </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e7490',
    padding: 25,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: '85%',
    height: 100,
  },
});
export default Error;
