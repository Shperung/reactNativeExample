import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mixins.color.grayLight,
    paddingVertical: 16,
    paddingHorizontal: 0,
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
  headingWrap: {
    paddingHorizontal: 16,
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
    paddingHorizontal: 8,
  },
  card: {
    padding: 8,
    position: 'relative',
  },
  cardBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  cardText: {
    paddingTop: 2,
    paddingBottom: 4,
  },
  zoomCard: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: mixins.color.white,
    zIndex: 2,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  zoomItemCardHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 16,
  },
  zoomItemCardText: {
    padding: 16,
  },
  closeBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: mixins.color.white,
    zIndex: 3,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
