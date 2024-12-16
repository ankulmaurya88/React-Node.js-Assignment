import React, { useState } from 'react';
import { View, Button } from 'react-native';
import QuestionEditor from '../components/FormEditor/QuestionEditor';
import HeaderEditor from '../components/FormEditor/HeaderEditor';

const FormEditorScreen = ({ navigation }) => {
  const [form, setForm] = useState({ header: '', questions: [] });

  const handleHeaderChange = (header) => {
    setForm((prev) => ({ ...prev, header }));
  };

  const handleAddQuestion = (question) => {
    setForm((prev) => ({ ...prev, questions: [...prev.questions, question] }));
  };

  const handleSave = () => {
    // Save form to backend using API
    navigation.navigate('Preview', { form });
  };

  return (
    <View>
      <HeaderEditor onHeaderChange={handleHeaderChange} />
      <QuestionEditor onAddQuestion={handleAddQuestion} />
      <Button title="Save Form" onPress={handleSave} />
    </View>
  );
};

export default FormEditorScreen;
