import React from 'react';
import { View } from 'react-native';
import FormRenderer from '../components/FormPreview/FormRenderer';

const PreviewScreen = ({ route }) => {
  const { form } = route.params;

  return (
    <View>
      <FormRenderer form={form} />
    </View>
  );
};

export default PreviewScreen;
