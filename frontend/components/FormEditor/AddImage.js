import React from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddImage = ({ onImageSelected }) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      onImageSelected(result.uri);
    }
  };

  return (
    <View>
      <Button title="Add Image" onPress={pickImage} />
    </View>
  );
};

export default AddImage;
