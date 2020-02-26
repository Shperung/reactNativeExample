import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aimatedBtm: {
    height: 50,
    backgroundColor: mixins.color.greenDark,
    margin: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  speedBtnText: {
    textAlign: 'center',
    color: mixins.color.white,
  },
  aimatedBlock: {
    backgroundColor: mixins.color.greenDark,
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default styles;
