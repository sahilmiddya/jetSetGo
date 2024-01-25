import {View} from 'react-native';
import React from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import {GLOBAL} from '../../GLOBAL';

const CustomInput = ({
  label,
  value,
  onChangeText,
  error,
  placeholder = '',
  numberOfLines = 6,
  multiline,
  dense,
  mode = 'outlined',
  helperText,
  style,
}) => {
  return (
    <View>
      <TextInput
        label={label}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={GLOBAL.colors.textLight}
        onChangeText={onChangeText}
        mode={mode}
        error={error}
        outlineColor={GLOBAL.colors.inputBorder}
        activeOutlineColor={GLOBAL.colors.darkBg}
        dense={dense}
        multiline={multiline}
        numberOfLines={numberOfLines}
        theme={{roundness: 5, colors: {error: GLOBAL.colors.error}}}
        style={[
          {
            backgroundColor: GLOBAL.colors.white,
            paddingVertical: multiline ? 10 : 0,
          },
          style,
        ]}
      />
      {helperText && (
        <HelperText
          padding="none"
          type={error ? 'error' : 'info'}
          theme={{colors: {error: GLOBAL.colors.error}}}>
          {helperText}
        </HelperText>
      )}
    </View>
  );
};

export default CustomInput;
