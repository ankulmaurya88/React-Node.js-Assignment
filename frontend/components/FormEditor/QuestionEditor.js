import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const QuestionEditor = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('text'); // Default to text type

  const handleAdd = () => {
    onAddQuestion({ type, questionText: question });
    setQuestion('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter question text"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter question type (text/grid/checkbox)"
        value={type}
        onChangeText={setType}
      />
      <Button title="Add Question" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});

export default QuestionEditor;
