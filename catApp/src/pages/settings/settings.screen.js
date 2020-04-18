import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Switch,
} from 'react-native';

// constants
import mixins, {LIGHT_THEME, DARK_THEME, IS_IOS} from '../../app/mixins';

// components
import ThemeContext from '../../app/theme-context';

// icon
import CheckIcon from '../../svg/assets/check-icon.svg';

// styles
import styles from './settings.screen.style';

const SettingsScreen = (props) => {
  const {theme, toggleTheme, auto, toggleAutoTheme} = useContext(ThemeContext);

  const isDark = theme === DARK_THEME;
  //
  const handleChangeTheme = (res) => {
    console.log('handleChangeTheme', res);

    if (!res) {
      toggleTheme(LIGHT_THEME);
    } else {
      toggleTheme(DARK_THEME);
    }
  };

  const handleSwitchAuto = () => {
    toggleAutoTheme(!auto);
  };

  //   return (

  //
  //

  //

  //   );

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      <Text style={[styles.heading, styles[`heading${theme}`]]}>
        SettingsScreen
      </Text>

      <View style={[styles.item, styles[`item${theme}`]]}>
        <Text style={[styles.itemText, styles[`itemText${theme}`]]}>
          Night Mode
        </Text>
        <Switch
          trackColor={{true: mixins.color.green}}
          thumbColor={IS_IOS ? null : mixins.color.white}
          value={isDark}
          onValueChange={(res) => handleChangeTheme(res)}
        />
      </View>

      <View style={[styles.item, styles[`item${theme}`]]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleSwitchAuto}
          style={styles.automaticly}>
          <View
            style={[
              styles.automaticlyBlock,
              styles[`automaticlyBlock${theme}`],
            ]}>
            {/*   {auto ? (
                <CheckIcon width={18} height={18} fill={mixins.color.green} />
              ) : null}  */}
          </View>

          <Text
            style={[styles.infoItemHeader, styles[`infoItemHeader${theme}`]]}>
            Switch automatically
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
