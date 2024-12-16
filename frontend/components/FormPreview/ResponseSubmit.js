import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ResponseSubmit = ({ questions, onSubmit }) => {
  const [responses, setResponses] = useState({});

  const handleSubmit = () => {
    onSubmit(responses);
  };

  return (
    <View>
      {questions.map((q, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Answer for: ${q.questionText}`}
          onChangeText={(text) => setResponses({ ...responses, [index]: text })}
        />
      ))}
      <Button title="Submit Responses" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});

export default ResponseSubmit;
