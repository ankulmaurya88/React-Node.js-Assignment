import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchResponses } from '../utils/api';

const ResponseScreen = ({ route }) => {
  const { formId } = route.params;
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResponses = async () => {
      try {
        const data = await fetchResponses(formId);
        setResponses(data);
      } catch (error) {
        console.error('Error loading responses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadResponses();
  }, [formId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading responses...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responses for Form {formId}</Text>
      <FlatList
        data={responses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.responseContainer}>
            <Text style={styles.responseIndex}>Response {index + 1}</Text>
            {Object.entries(item).map(([question, answer], idx) => (
              <Text key={idx} style={styles.responseText}>
                {question}: {answer}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  responseContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  responseIndex: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  responseText: {
    fontSize: 14,
    marginVertical: 4,
  },
});

export default ResponseScreen;
