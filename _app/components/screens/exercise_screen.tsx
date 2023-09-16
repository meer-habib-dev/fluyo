import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
interface Exercise {
  english: string;
  german: string;
}
const ExerciseScreen = () => {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.englishText}>Fill in the missing word</Text>
      <Text style={styles.englishText}>
        The <Text>house</Text> is small
      </Text>
      <Text style={styles.englishText}>{exercise?.english}</Text>
      <Text style={styles.germanText}>Das _______ ist klein.</Text>

      {exercisee.options.map((option: string, index: number) => (
        <TouchableOpacity key={index} onPress={() => setSelectedOption(option)}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Submit" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  englishText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  germanText: {
    fontSize: 20,
  },
  textInput: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
});

export default ExerciseScreen;
const exercisee = {
  options: ['foigen', 'schaf', 'bereiden', 'house'],
};
