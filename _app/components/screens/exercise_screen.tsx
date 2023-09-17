import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {theme} from '../../@lib/theme/theme';
import OptionsButton from '../common/buttons/option_button/option_button';
import AppButton from '../common/buttons/app_button/app_button';
import ReportButton from '../common/buttons/report_button/report_button';
import {styles} from './exercise_screen_style';
import {ExerciseType} from '../../firebase/seedData';

const introText: string = 'Fill in the missing word';

const ExerciseScreen = (): JSX.Element => {
  const [exercise, setExercise] = useState<ExerciseType[] | null>(null);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState<boolean | null>(null);
  const [exerciseReport, setExerciseReport] = useState<string>('');

  // Checking correct
  const checkAnswer = () => {
    if (selectedOption === exercise?.[activeExerciseIndex]?.answer) {
      setIsCorrect(true);
      setExerciseReport('Good Job!');
    } else {
      setIsCorrect(false);
      setExerciseReport('Answer: ' + exercise?.[activeExerciseIndex]?.answer!);
    }
    setAnswerSubmitted(true);
  };

  // Resetting exercise based on answer
  const resetExercise = async () => {
    if (exercise!.length - 1 === activeExerciseIndex) {
      setIsCorrect(null);
      setSelectedIndex(null);
      setSelectedOption(null);
      setAnswerSubmitted(null);
      setExerciseReport('');
      setActiveExerciseIndex(0);
    } else if (!isCorrect) {
      setActiveExerciseIndex(prev => prev);
      setIsCorrect(null);
      setSelectedIndex(null);
      setSelectedOption(null);
      setAnswerSubmitted(null);
      setExerciseReport('');
    } else {
      setActiveExerciseIndex(prev => prev + 1);
      setIsCorrect(null);
      setSelectedIndex(null);
      setSelectedOption(null);
      setAnswerSubmitted(null);
      setExerciseReport('');
    }
  };

  // fetching exercise data on mount
  useEffect(() => {
    const getData = async () => {
      const response = await firestore().collection('exercises').get();
      const exercises: ExerciseType[] = response.docs.map(
        doc => doc.data() as ExerciseType,
      );
      setExercise(exercises);
    };
    getData();
  }, []);

  if (!exercise) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={theme.color.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.titleText}>{introText}</Text>
        <View>
          <View style={styles.mainTextWrapper}>
            <Text style={styles.exampleText}>
              {exercise[activeExerciseIndex]?.exampleText}
            </Text>

            {/* Question Section */}
            {selectedOption ? (
              <View style={styles.selectedOPT}>
                {exercise[activeExerciseIndex].questionText?.map(
                  (item, index) => {
                    return (
                      <View key={index}>
                        {item === 'blank' ? (
                          <OptionsButton
                            selected={false}
                            answerSubmitted={answerSubmitted}
                            isCorrect={isCorrect}
                            onPress={() => null}
                            text={selectedOption!!}
                            selectedOpt
                          />
                        ) : (
                          <Text style={styles.questionText}>{item}</Text>
                        )}
                      </View>
                    );
                  },
                )}
              </View>
            ) : (
              <Text style={styles.questionTextMain}>
                {exercise[activeExerciseIndex]?.question}
              </Text>
            )}

            {/* Option Section */}
            <View style={styles.optionWrapper}>
              {exercise[activeExerciseIndex]?.options.map(
                (option: string, index: number) => (
                  <OptionsButton
                    key={index}
                    selected={index === selectedIndex}
                    answerSubmitted={answerSubmitted}
                    onPress={() => {
                      setSelectedOption(option);
                      setSelectedIndex(index);
                      setAnswerSubmitted(null);
                    }}
                    text={option}
                    isCorrect={null}
                    selectedOpt={false}
                  />
                ),
              )}
            </View>
          </View>

          {/* Report Section */}
          <View>
            {answerSubmitted === null ? (
              <AppButton
                onPress={checkAnswer}
                optionCheck={!!selectedOption}
                text={selectedOption ? 'CHECK ANSWER' : 'CONTINUE'}
              />
            ) : (
              <ReportButton
                isCorrect={isCorrect}
                resetExercise={resetExercise}
                exerciseReport={exerciseReport}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExerciseScreen;
