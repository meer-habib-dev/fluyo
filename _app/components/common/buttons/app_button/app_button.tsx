import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../../../@lib/theme/theme';
import {styles} from './app_button_style';

type Props = {
  text: string;
  onPress: () => void;
  optionCheck: boolean | null;
};
const AppButton = ({text, onPress, optionCheck}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: optionCheck
            ? theme.color.success
            : theme.color.selectEmpty,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
