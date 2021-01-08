import {StyleSheet} from 'react-native';
import mixins, {IS_IOS, BIG_DEVICE} from '../../app/mixins';

const iosIndent = BIG_DEVICE ? mixins.indent.big : mixins.indent.default;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: IS_IOS ? iosIndent : 0,
    left: 0,
    zIndex: 9000,
    paddingVertical: mixins.indent.default,
    paddingTop: mixins.indent.default + mixins.indent.small,
    width: '100%',
    height: IS_IOS ? 'auto' : 100,
  },
  messageBlock: {
    shadowColor: mixins.color.green,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.2,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    paddingHorizontal: mixins.indent.doubleMiddle,
  },
  messageGradient: {
    elevation: 5,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: mixins.indent.doubleMiddle,
    paddingVertical: mixins.indent.default,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 32,
    color: 'white',
    marginRight: mixins.indent.middle,
  },
  heading: {
    paddingRight: mixins.indent.medial,
    fontSize: mixins.font.defaultFont,
    color: mixins.color.green,
    fontWeight: 'bold',
    paddingBottom: mixins.indent.small,
    flex: 1,
  },
  text: {
    fontSize: mixins.font.defaultFont,
    color: mixins.color.green,
    flex: 1,
    paddingRight: mixins.indent.medial,
  },
  textWrap: {
    flex: 1,
    paddingRight: mixins.indent.small,
  },
});

export default styles;
