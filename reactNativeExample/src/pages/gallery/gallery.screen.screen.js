import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mixins.color.grayLight,
    padding: 16,
  },
});

export default styles;
