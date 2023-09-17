import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../@lib/theme/theme';
import {styles} from './report_button_style';

type Props = {
  isCorrect: boolean | null;
  resetExercise: () => void;
  exerciseReport: string;
};
const ReportButton = ({
  isCorrect,
  resetExercise,
  exerciseReport,
}: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isCorrect ? theme.color.success : theme.color.error,
        },
      ]}>
      <Text style={styles.reportText}>{exerciseReport}</Text>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: theme.color.textColor,
          },
        ]}
        onPress={resetExercise}>
        <Text
          style={[
            styles.text,
            {
              color: isCorrect ? theme.color.success : theme.color.error,
            },
          ]}>
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportButton;
