import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../app/mixins';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    height: DEVICE_HEIGHT,
  },
  avatarVrap: {
    width: DEVICE_WIDTH,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
