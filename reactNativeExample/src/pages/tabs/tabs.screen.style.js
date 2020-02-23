import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mixins.color.grayLight,
    padding: 16,
  },
  containerDARK: {
    backgroundColor: mixins.color.greenDark,
  },
  heading: {
    fontSize: 18,
    color: mixins.color.black,
    paddingBottom: 24,
    fontWeight: 'bold',
  },
  headingDARK: {
    color: mixins.color.grayLight,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: mixins.color.greenDark,
    position: 'relative',
    zIndex: 1,
  },
  itemDARK: {
    backgroundColor: mixins.color.grayLight,
  },
  itemText: {
    color: mixins.color.grayLight,
  },
  itemTextDARK: {
    color: mixins.color.black,
  },
  itemActive: {
    zIndex: 2,
  },
  itemBtn: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  content: {
    paddingTop: 24,
  },
  contentText: {
    fontSize: 16,
  },
  contentTextDARK: {
    color: mixins.color.grayLight,
  },
  tabsWrap: {
    overflow: 'hidden',
    borderRadius: 12,
  },
});

export default styles;
