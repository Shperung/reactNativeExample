import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  Switch,
} from 'react-native';

// constants
import mixins, {LIGHT_THEME, DARK_THEME, IS_IOS} from '../../app/mixins';

// components
import ThemeContext from '../../app/theme-context';

const SettingsScreen = props => {
  const {navigation, route} = props;
  const {theme, toggleTheme} = useContext(ThemeContext);

  const isDark = theme === DARK_THEME;

  const handleChangeTheme = res => {
    console.log('handleChangeTheme', res);

    if (!res) {
      toggleTheme(LIGHT_THEME);
    } else {
      toggleTheme(DARK_THEME);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDark
          ? mixins.color.greenDark
          : mixins.color.grayLight,
      }}>
      <Text>SettingsScreen</Text>
      <View>
        <View>
          <Text>Night Mode</Text>
        </View>
        <Switch
          trackColor={{true: mixins.color.green}}
          thumbColor={IS_IOS ? null : mixins.color.white}
          value={isDark}
          onValueChange={res => handleChangeTheme(res)}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
