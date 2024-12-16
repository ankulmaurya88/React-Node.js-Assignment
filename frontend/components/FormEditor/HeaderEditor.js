import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const HeaderEditor = ({ onHeaderChange }) => {
  const [header, setHeader] = useState('');

  const handleSave = () => {
    onHeaderChange(header);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter header text"
        value={header}
        onChangeText={setHeader}
      />
      <Button title="Save Header" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});

export default HeaderEditor;
