import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { shareAsync } from 'expo-sharing';
import { printToFileAsync } from 'expo-print';

const DetailRow = ({ label, value }) => (
  <View style={styles.row}>
    <View style={styles.column}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View style={[styles.column, styles.dataColumn]}>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const Details = ({ route }) => {
  const { Name, ChosenDate, selectedValue, clg, education, department, location } = route.params;

  const html = `<html>
  <body>
  <h1>Name:${Name}</h1>
  <h1>DateOfBirth:${ChosenDate}</h1>
  <h1>Genter:${selectedValue}</h1>
  <h1>College:${clg}</h1>
  <h1>Education:${education}</h1>
  <h1>Department:${department}</h1>
  <h1>Location:${location}</h1>
  </body>
   </html>`;

   let gentrate = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false
    })
    await shareAsync(file.uri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESUME DETAILS</Text>
      <View style={styles.table}>
        <DetailRow label="Name:" value={Name} />
        <DetailRow label="Date of Birth:" value={ChosenDate} />
        <DetailRow label="Gender:" value={selectedValue} />
        <DetailRow label="College:" value={clg} />
        <DetailRow label="Education:" value={education} />
        <DetailRow label="Department:" value={department} />
        <DetailRow label="Location:" value={location} />
      </View>
      <TouchableOpacity style={styles.downloadButton} onPress={gentrate}>
        <Text style={styles.buttonText}>Download PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'darkgreen',
    fontWeight:'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginLeft: -1, 
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  dataColumn: {
    borderLeftWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'right',
  },
  downloadButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 'auto',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Details;