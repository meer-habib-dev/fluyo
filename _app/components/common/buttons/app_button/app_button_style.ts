import {StyleSheet} from 'react-native';
import {theme} from '../../../../@lib/theme/theme';

export const styles = StyleSheet.create({
  btn: {
    borderRadius: theme.border[5],
    paddingVertical: theme.border[2],
    marginHorizontal: theme.border[2],
    marginBottom: theme.border[8],
  },
  text: {
    textAlign: 'center',
    color: theme.color.textColor,
    fontWeight: '600',
  },
});
