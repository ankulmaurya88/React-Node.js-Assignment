import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormRenderer = ({ form }) => {
  return (
    <View>
      {form.header && <Text style={styles.header}>{form.header}</Text>}
      {form.questions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text>{q.questionText}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  questionContainer: { marginBottom: 10 },
});

export default FormRenderer;
