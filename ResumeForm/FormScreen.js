import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton, Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const FormScreen = ({ navigation }) => {
  const [Name, SetName] = useState('');
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [clg, Setclg] = useState('');
  const [education, setEducation] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setChosenDate(selectedDate);
    }
  };

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const validateDetails = () => {
    if (Name && chosenDate && selectedValue && clg && education && department && location && isChecked) {
      return true;
    } else {
      alert("Please enter all fields");
      return false;
    }
  };

  const handleNext = () => {
    const detailsValid = validateDetails();
    if (detailsValid) {
      navigation.navigate('Details',{
        Name,chosenDate,selectedValue,clg,education,department,location
      });
    }
  };

  return (
    <View>
      <Image
        source={require('../assets/profileavator.png')}
        style={styles.img}
      />
      <Text style={styles.resumetxt}>Resume Form</Text>
      <TextInput
        style={styles.nameinput}
        placeholder="Name"
        value={Name}
        onChangeText={SetName}
      />
      <Text style={styles.datetxt}>Date Of Birth</Text>
      <TouchableOpacity
        onPress={showPicker}
        style={styles.datebtn}
      >
        <Text style={{ left: 85, top: 5 }}>Select Date </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={chosenDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.dateContainer}>
        <Text>Selected Date: {chosenDate.toDateString()}</Text>
      </View>

      <View style={{ flexDirection: "row", top: 20 }}>
        <Text style={{ left: 20 }}>Select your gender:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', top: 20, left: -20 }}>
          <RadioButton
            value="male"
            status={selectedValue === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('male')}
          />
          <Text>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', top: 20, left: -15 }}>
          <RadioButton
            value="female"
            status={selectedValue === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('female')}
          />
          <Text>Female</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', top: 20, left: -10 }}>
          <RadioButton
            value="other"
            status={selectedValue === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('other')}
          />
          <Text>Other</Text>
        </View>
      </View>

      <Text style={{ top: 45, left: 15 }}>College Name:</Text>
      <TextInput
        value={clg}
        onChangeText={Setclg}
        style={styles.clginput}
        placeholder="College Name"
      />

      <View style={{ top: 80 }}>
        <RNPickerSelect
          placeholder={{ label: 'Select Education', value: '' }}
          value={education}
          onValueChange={(itemValue) => setEducation(itemValue)}
          items={[
            { label: "Bachelor's", value: "Bachelor's" },
            { label: "Master's", value: "Master's" },
            { label: "Doctoral", value: "Doctoral" },
          ]}
          style={{
            ...pickerSelectStyles,
            inputAndroid: {
              color: education ? '#39ab09' : '#1d2918',
            },
          }}
        />
        <RNPickerSelect
          placeholder={{ label: 'Select Department', value: '' }}
          value={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          items={[
            { label: 'Engineering', value: 'Engineering' },
            { label: 'Medical', value: 'Medical' },
            { label: 'Agriculture', value: 'Agriculture' },
            { label: 'Arts & Science', value: 'Arts & Science' }
          ]}
          style={{
            ...pickerSelectStyles,
            inputAndroid: {
              color: education ? '#c90ea4' : '#1d2918',
            },
          }}
        />
        <RNPickerSelect
          placeholder={{ label: 'Select Location', value: '' }}
          value={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
          items={[
            { label: 'Madurai', value: 'Madurai' },
            { label: 'Chennai', value: 'Chennai' },
            { label: 'Coimbatore', value: 'Coimbatore' },
            { label: 'Bangalore', value: 'Bangalore' }
          ]}
          style={{
            ...pickerSelectStyles,
            inputAndroid: {
              color: education ? '#062e70' : '#1d2918',
            },
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', top: 100 ,left:10 }}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text>All Details Are Valid </Text>
      </View>

      <TouchableOpacity
        style={styles.nxt}
        onPress={handleNext}
      >
        <Text style={styles.nxttext}>Next ⋙</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 75,
    height: 150,
    width: 150,
    left: 120,
    top: 25
  },
  resumetxt: {
    left: 135,
    top: 35,
    fontSize: 18
  },
  nameinput: {
    borderWidth: 1,
    width: 350,
    top: 65,
    left: 25,
    borderRadius: 5,
    paddingLeft: 10
  },
  dateContainer: {
    marginTop: 110,
    alignItems: 'center',
    left: -15
  },
  datetxt: {
    top: 80,
    left: 20
  },
  datebtn: {
    top: 90,
    borderWidth: 1,
    width: 250,
    height: 30,
    left: 50
  },
  clginput: {
    borderWidth: 1,
    width: 350,
    top: 60,
    left: 25,
    borderRadius: 5,
    paddingLeft: 10
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 90,
    left: 65,
  },
  checkBox: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e4eded'
  },
  checkBoxLabel: {
    fontSize: 12,
    color: 'black',
  },
  nxt: {
    borderWidth: 0.5,
    width: 70,
    height: 38,
    top: 55,
    left: 280,
    backgroundColor: 'black',
    borderRadius: 5
  },
  nxttext: {
    color: '#39e629',
    top: 8,
    left: 6
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'Black',
  },
});
