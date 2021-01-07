import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../app/mixins';
import {DC_WIDTH} from '../app/constants';

const styles = StyleSheet.create({
  containerCircleAnimated: {
    width: DC_WIDTH,
    height: DC_WIDTH,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleAnimatedItem: {
    position: 'absolute',
  },
  circleAnimatedItemWrap: {
    position: 'absolute',
    width: 1,
    height: 1,
    left: '50%',
    top: '50%',
  },
  circleAnimatedline: {
    height: 240,
    width: 240,
    position: 'relative',
    borderWidth: 1,
    borderColor: mixins.color.greenDark,
    borderRadius: 120,
  },
  circleAnimatedlineDARK: {
    borderColor: mixins.color.white02,
  },
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
  aimatedBtmDARK: {
    backgroundColor: mixins.color.white,
  },
  speedBtnText: {
    textAlign: 'center',
    color: mixins.color.white,
  },
  speedBtnTextDARK: {
    color: mixins.color.greenDark,
  },
  aimatedBlock: {
    backgroundColor: mixins.color.greenDark,
    marginTop: 16,
    marginHorizontal: 16,
  },
  aimatedBlockDARK: {
    backgroundColor: mixins.color.white,
  },
});

export default styles;
