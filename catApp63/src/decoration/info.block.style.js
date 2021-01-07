import {StyleSheet} from 'react-native';

import mixins from '../app/mixins';

const styles = StyleSheet.create({
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
    backgroundColor: mixins.color.white06,
  },
  blockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 2,
  },
  textSmall: {
    color: mixins.color.gray,
  },
  infoTextBlock: {
    marginLeft: 16,
  },
});

export default styles;
