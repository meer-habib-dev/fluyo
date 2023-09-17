import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../../../@lib/theme/theme';
import {styles} from './option_button_style';
type Props = {
  text: string;
  onPress: () => void;
  selected: boolean;
  answerSubmitted: boolean | null;
  isCorrect: boolean | null;
  selectedOpt: boolean;
};
const OptionsButton = ({
  text,
  onPress,
  selected,
  answerSubmitted,
  selectedOpt,
  isCorrect,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor:
            answerSubmitted && selectedOpt
              ? isCorrect
                ? theme.color.success
                : theme.color.error
              : answerSubmitted && !selectedOpt
              ? theme.color.disableButton
              : selected
              ? theme.color.selectEmpty
              : theme.color.textColor,
          // : theme.color.disableButton,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            color:
              selectedOpt && answerSubmitted
                ? theme.color.textColor
                : selected
                ? theme.color.selectEmpty
                : theme.color.secondary,
          },
          styles.text,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionsButton;
