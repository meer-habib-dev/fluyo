import {StyleSheet} from 'react-native';
import {theme} from '../../../../@lib/theme/theme';

export const styles = StyleSheet.create({
  btn: {
    borderRadius: theme.border[5],
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 80,
  },
  text: {
    textAlign: 'center',
    color: theme.color.textColor,
    fontWeight: '600',
  },
});
