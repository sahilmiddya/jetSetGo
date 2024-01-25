import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {GLOBAL} from '../../GLOBAL';

const CustomButton = ({
  variant = 'contained', // variant will be either 'contained' or 'outlined'
  rounded,
  onPress,
  children,
  size = 'normal', // 'small' | 'normal' | 'large'
  style,
  width = 'normal', // 'normal' | 'full'
  disabled,
}) => {
  function getBorderRadius(_rounded) {
    switch (_rounded) {
      case true:
        return 8;
      case 'full':
        return 99999999999999;

      default:
        return 0;
    }
  }
  function getVariantStyle(_variant) {
    switch (_variant) {
      case 'contained':
        return styles.buttonContained;
      case 'outlined':
        return styles.buttonOutlined;

      default:
        return styles.buttonContained;
    }
  }
  function getBtnSizeStyle(_size) {
    switch (_size) {
      case 'normal':
        return styles.buttonNormal;
      case 'small':
        return styles.buttonSmall;

      default:
        return styles.buttonNormal;
    }
  }
  function getBtnWidth(_width) {
    switch (_width) {
      case 'full':
        return '100%';
      case 'normal':
        return '80%';

      default:
        return '80%';
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        getVariantStyle(variant),
        getBtnSizeStyle(size),
        {borderRadius: getBorderRadius(rounded), width: getBtnWidth(width)},
        style,
      ]}
      activeOpacity={variant === 'contained' ? 0.8 : 0.5}>
      <Text
        style={[
          styles.buttonText,
          variant === 'contained' && styles.buttonTextContained,
          variant === 'outlined' && styles.buttonTextOutlined,
          size === 'normal' && styles.buttonText,
          size === 'small' && styles.buttonTextSmall,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonNormal: {
    height: responsiveHeight(6),
  },
  buttonSmall: {
    height: responsiveHeight(4.5),
  },
  buttonRounded: {
    borderRadius: 8,
  },
  buttonContained: {
    backgroundColor: GLOBAL.colors.primaryBlue,
    borderWidth: 0.5,
    borderColor: GLOBAL.colors.primaryBlue,
  },
  buttonOutlined: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: GLOBAL.colors.darkBorder,
  },

  buttonText: {
    fontSize: 18,
  },
  buttonTextSmall: {
    fontSize: 12,
  },
  buttonTextContained: {
    color: GLOBAL.colors.white,
    fontWeight: '500',
  },
  buttonTextOutlined: {
    color: '#000000CC',
  },
});
