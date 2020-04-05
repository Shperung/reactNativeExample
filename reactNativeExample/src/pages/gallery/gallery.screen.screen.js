import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mixins.color.grayLight,
    padding: 16,
  },
  heading: {
    height: 60,
    backgroundColor: mixins.color.greenDark,
    width: '100%',
    borderRadius: 32,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 8,
  },
  headingBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBtnFirst: {
    borderRightWidth: 1,
    borderRightColor: mixins.color.white,
  },
  headingBtnSecond: {
    borderLeftWidth: 1,
    borderLeftColor: mixins.color.white,
  },
  listImg: {width: '100%', height: '100%'},
  flatList: {
    flex: 1,
  },
  card: {
    padding: 8,
  },
  cardText: {
    paddingTop: 2,
    paddingBottom: 4,
  },
});

export default styles;
