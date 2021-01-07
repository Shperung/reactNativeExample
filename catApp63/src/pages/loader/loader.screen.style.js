import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH,
  },
  speedBtn: {
    width: 50,
    height: 50,
    backgroundColor: mixins.color.greenDark,
    margin: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedBtnText: {
    color: mixins.color.white,
  },
  btnWrap: {
    flexDirection: 'row',
  },
  heading: {
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
