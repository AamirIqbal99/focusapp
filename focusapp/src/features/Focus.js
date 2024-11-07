import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import React, { useState } from 'react';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          onChangeText={ (setSubject) } 
          label="what would you like to focus on?"
        />
        <View style={styles.roundedButton}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: 5,
  },
  roundedButton: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});