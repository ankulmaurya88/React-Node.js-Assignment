import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Create Form" onPress={() => navigation.navigate('FormEditor')} />
      <Button title="Preview Form" onPress={() => navigation.navigate('Preview')} />
      <Button title="View Responses" onPress={() => navigation.navigate('Responses')} />
    </View>
  );
};

export default HomeScreen;
