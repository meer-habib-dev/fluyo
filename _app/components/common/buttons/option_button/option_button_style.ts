import {StyleSheet} from 'react-native';
import {theme} from '../../../../@lib/theme/theme';
export const styles = StyleSheet.create({
  btn: {
    borderRadius: theme.border[2],
    shadowColor: '#000',
    paddingHorizontal: 40,
    marginBottom: 10,
    marginRight: 10,
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
