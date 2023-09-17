import {StyleSheet} from 'react-native';
import {theme} from '../../@lib/theme/theme';

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.color.primary,
  },
  body: {
    flex: 0.75,
    borderTopLeftRadius: theme.border['3'],
    borderTopRightRadius: theme.border['3'],
    alignItems: 'center',
    backgroundColor: theme.color.secondary,
  },
  titleText: {
    textAlign: 'center',
    color: theme.color.textColor,
    marginVertical: theme.spacing[5],
    fontSize: theme.spacing[3],
  },
  mainTextWrapper: {paddingHorizontal: theme.border[2], flex: 1},
  exampleText: {
    textAlign: 'center',
    color: theme.color.textColor,
    fontSize: theme.spacing[4],
    fontWeight: '500',
  },
  selectedOPT: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing[7],
  },
  questionText: {
    textAlign: 'center',
    color: theme.color.textColor,
    fontWeight: '500',
    marginRight: 10,
  },
  questionTextMain: {
    textAlign: 'center',
    color: theme.color.textColor,
    marginVertical: theme.spacing[7],
    fontWeight: '500',
  },
  optionWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
