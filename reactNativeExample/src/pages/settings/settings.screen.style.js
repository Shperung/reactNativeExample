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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: mixins.color.greenDark,
  },
  itemDARK: {
    borderBottomColor: mixins.color.grayLight,
  },
  itemText: {
    color: mixins.color.black,
    fontSize: 16,
  },
  itemTextDARK: {
    color: mixins.color.grayLight,
  },
});

export default styles;
