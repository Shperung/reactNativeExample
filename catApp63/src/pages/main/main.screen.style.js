import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: DEVICE_WIDTH,
  },
  scrollViewHorizontal: {
    width: DEVICE_WIDTH,
    overflow: 'hidden',
    padding: 16,
  },
  tabsWrap: {
    width: DEVICE_WIDTH,
    flexDirection: 'row',
  },
  tabs: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  tabLeft: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: mixins.color.green,
    borderBottomWidth: 1,
    height: 60,
  },
  tabRight: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: mixins.color.red,
    borderBottomWidth: 1,
    height: 60,
  },
  banerImg: {
    width: DC_WIDTH,
    height: 200,
    borderRadius: 32,
    opacity: 0.8,
  },
  banerItem: {
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banerItemFirst: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bioWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: mixins.color.white08,
    borderRadius: 32,
    height: '100%',
  },
  bioTextWrap: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  bio: {
    fontSize: 18,
  },
  bioBold: {
    fontWeight: 'bold',
  },
});

export default styles;
