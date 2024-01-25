import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {GLOBAL} from '../../GLOBAL';

const CustomDatePicker = ({
  labelTopText,
  placeholder = '',
  onChange = date => {},
  selectedValue,
  size = 'normal', // 'small' | 'normal' | 'large'
  mode = 'datetime',
  disabled = false,
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateString, setDateString] = useState(selectedValue);

  return (
    <>
      <DatePicker
        style={{borderRadius: 8}}
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setDateString(moment(date).format('MM-DD-YYYY'));
          onChange && onChange(moment(date).format('YYYY-MM-DD'));
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode={mode}
      />
      <View>
        {labelTopText && (
          <Text
            style={{
              color: GLOBAL.colors.textDarkSecondary,
              fontSize: responsiveFontSize(2),
              // fontWeight: '500',
              marginBottom: 8,
              paddingLeft: 2,
              opacity: disabled ? 0.3 : 1,
            }}>
            {labelTopText}
          </Text>
        )}

        <Pressable
          style={[
            styles.dropdown,
            {
              height: getInputSize(size),
              backgroundColor: disabled
                ? GLOBAL.colors.inputDisabledBg
                : GLOBAL.colors.white,
            },
          ]}
          disabled={disabled}
          onPress={() => {
            if (disabled) {
              () => {};
            } else {
              setOpen(true);
            }
          }}>
          {dateString ? (
            <Text style={[styles.placeholderStyle, {color: '#333'}]}>
              {dateString}
            </Text>
          ) : (
            <Text
              style={[
                styles.placeholderStyle,
                {
                  color: disabled
                    ? GLOBAL.colors.placeholderDisabledColor
                    : GLOBAL.colors.inputPlaceHolderColor,
                },
              ]}>
              {placeholder}
            </Text>
          )}
        </Pressable>
      </View>
    </>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    justifyContent: 'center',
    // elevation: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    color: GLOBAL.colors.inputPlaceHolderColor,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
function getInputSize(_size) {
  switch (_size) {
    case 'normal':
      return 58;
    case 'small':
      return 48;
    case 'large':
      return 64;

    default:
      return 58;
  }
}
