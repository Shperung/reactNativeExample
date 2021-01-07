import {StyleSheet} from 'react-native';

import mixins, {DEVICE_WIDTH} from '../../app/mixins';
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
    paddingLeft: 24,
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
  automaticly: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  automaticlyBlock: {
    width: 24,
    height: 24,
    backgroundColor: mixins.color.grayLight,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  automaticlyBlockDARK: {
    backgroundColor: mixins.color.grayLight,
  },
  infoItemHeader: {
    color: mixins.color.black,
    fontSize: 16,
    paddingTop: 8,
  },
  infoItemHeaderDARK: {
    color: mixins.color.grayLight,
  },
  openDrawerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default styles;
