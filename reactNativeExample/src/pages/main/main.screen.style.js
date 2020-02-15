import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';

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
    // backgroundColor: mixins.color.tomato,
    padding: 16,
  },
  baner: {
    backgroundColor: mixins.color.orangeDarck,
    height: 300,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 300,
    height: 200,
  },
  banerItem: {
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
