import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
/* import {useTranslation} from 'react-i18next'; */

import Colors from '../styles/Colors';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    // fontFamily: 'roboto',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
  side: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function FlatButton({
  onPress,
  disabled,
  title,
  style,
  textStyle,
  rightElement,
  leftElement,
}: any) {
  /* const {t} = useTranslation(); */
  const [disableBtn, setDisableBtn] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setDisableBtn(true);
        setTimeout(() => setDisableBtn(false), 3000);
        onPress();
      }}
      disabled={disableBtn || disabled}>
      <View
        style={{
          ...styles.btn,
          ...style,
          justifyContent:
            leftElement || rightElement ? 'space-between' : 'center',
        }}>
        {leftElement || rightElement ? (
          <View style={styles.side}>{leftElement && leftElement()}</View>
        ) : null}
        <Text style={{...styles.text, ...textStyle}}>
          {/* {`${t( */}Next{/* )}`} */}
        </Text>
        {leftElement || rightElement ? (
          <View style={styles.side}>{rightElement && rightElement()}</View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default FlatButton;
