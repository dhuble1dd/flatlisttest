import {useMemo, useState} from 'react';
import {StyleSheet, Appearance} from 'react-native';

const useStyles = () => {
  const dark = 'dark';

  const [isDarkTheme, setIsDarkTheme] = useState(
    Appearance.getColorScheme() === dark,
  );
  Appearance.addChangeListener(props =>
    setIsDarkTheme(props.colorScheme === dark),
  );
  const styles = useMemo(
    () =>
      StyleSheet.create({
        card: {
          height: 80,
          overflow: 'hidden',
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
        },
        title: {
          color: isDarkTheme ? 'white' : 'black',
        },
        description: {
          color: isDarkTheme ? 'white' : 'black',
        },
      }),
    [isDarkTheme],
  );

  return styles;
};

export default useStyles;
