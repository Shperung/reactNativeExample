import {StyleSheet} from 'react-native';

import mixins from '../app/mixins';

const styles = StyleSheet.create({
  avatarImg: {
    width: 52,
    height: 52,
    borderRadius: 32,
    marginRight: 16,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    padding: 16,
    borderRadius: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor: mixins.color.grayLight,
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 2,
  },
  textSmall: {
    color: mixins.color.gray,
  },
});

export default styles;
