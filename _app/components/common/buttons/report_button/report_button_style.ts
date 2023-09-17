import {StyleSheet} from 'react-native';
import {theme} from '../../../../@lib/theme/theme';
export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderTopRightRadius: theme.border[3],
    borderTopLeftRadius: theme.border[3],
  },
  reportText: {
    color: theme.color.textColor,
    marginBottom: 20,
    marginTop: 10,
  },
  btn: {
    borderRadius: theme.border[5],
    paddingVertical: 20,

    marginBottom: 80,
  },
  text: {
    textAlign: 'center',
  },
});
