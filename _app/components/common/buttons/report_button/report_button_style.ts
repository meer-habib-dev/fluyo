import {StyleSheet} from 'react-native';
import {theme} from '../../../../@lib/theme/theme';
export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.border[2],
    paddingHorizontal: theme.border[2],
    justifyContent: 'center',
    borderTopRightRadius: theme.border[3],
    borderTopLeftRadius: theme.border[3],
  },
  reportText: {
    color: theme.color.textColor,
    marginBottom: theme.border[2],
    marginTop: theme.border[1],
    fontWeight: '600',
  },
  btn: {
    borderRadius: theme.border[5],
    paddingVertical: theme.border[2],
    marginBottom: theme.border[8],
  },
  text: {
    textAlign: 'center',
  },
});
