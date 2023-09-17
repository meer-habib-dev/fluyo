import {StyleSheet} from 'react-native';
import {theme} from '../../../../@lib/theme/theme';
export const styles = StyleSheet.create({
  btn: {
    borderRadius: theme.border[2],
    shadowColor: '#000',
    paddingHorizontal: theme.border[4],
    marginBottom: theme.border[1],
    marginRight: theme.border[1],
    padding: theme.spacing[3],
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {textAlign: 'center'},
});
