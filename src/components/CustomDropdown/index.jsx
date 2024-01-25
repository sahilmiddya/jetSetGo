import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Checkbox, Modal, Portal, Surface} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {assets} from '../../assets';
import {GLOBAL} from '../../GLOBAL';
import CustomButton from '../CustomButton';

const CustomSelectDropdown = ({
  size = 'normal', // 'small' | 'normal' | 'large'
  selectedItem = null,
  selectedItemList = [],
  onSelect = () => {},
  multiple = false,
  labelTopText = '',
  disabled,
  data = [
    {label: 'Aasad', value: 'Aasad0'},
    {label: 'Aasad', value: 'Aasad1'},
    {label: 'Aasad', value: 'Aasad2'},
    {label: 'Aasad', value: 'Aasad3'},
    {label: 'Aasad', value: 'Aasad4'},
    {label: 'Aasad', value: 'Aasad5'},
    {label: 'Aasad', value: 'Aasad6'},
    {label: 'Aasad', value: 'Aasad7'},
    {label: 'Aasad', value: 'Aasad8'},
    {label: 'Aasad', value: 'Aasad0'},
    {label: 'Aasad', value: 'Aasad1'},
    {label: 'Aasad', value: 'Aasad2'},
    {label: 'Aasad', value: 'Aasad3'},
    {label: 'Aasad', value: 'Aasad4'},
    {label: 'Aasad', value: 'Aasad5'},
    {label: 'Aasad', value: 'Aasad6'},
    {label: 'Aasad', value: 'Aasad7'},
    {label: 'Aasad', value: 'Aasad8'},
    {label: 'Aasad', value: 'Aasad0'},
    {label: 'Aasad', value: 'Aasad1'},
    {label: 'Aasad', value: 'Aasad2'},
    {label: 'Aasad', value: 'Aasad3'},
    {label: 'Aasad', value: 'Aasad4'},
    {label: 'Aasad', value: 'Aasad5'},
    {label: 'Aasad', value: 'Aasad6'},
    {label: 'Aasad', value: 'Aasad7'},
    {label: 'Aasad', value: 'Aasad8'},
  ],
  placeholder = 'Place holder',
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedItem_, setSelectedItem_] = useState(selectedItem);
  const [selectedMultipleItem_, setSelectedMultipleItem_] =
    useState(selectedItemList);

  const showModal = () => setOpenDropdown(true);
  const hideModal = () => setOpenDropdown(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    maxHehght: '50%',
    borderRadius: 10,
  };

  return (
    <View>
      {labelTopText && (
        <Text
          style={{
            color: GLOBAL.colors.textDarkSecondary,
            fontSize: responsiveFontSize(2),
            // fontWeight: '500',
            marginBottom: 8,
            paddingLeft: 2,
          }}>
          {labelTopText}
        </Text>
      )}

      <View style={{position: 'relative', borderRadius: 5}}>
        <TouchableOpacity
          onPress={() => setOpenDropdown(prev => !prev)}
          activeOpacity={1}
          disabled={disabled}
          style={[
            styles.selectInput,
            {
              height: getInputSize(size),
              borderBottomLeftRadius: openDropdown === true ? 0 : 5,
              borderBottomRightRadius: openDropdown === true ? 0 : 5,
            },
          ]}>
          <Text
            style={{
              color: selectedItem_
                ? '#333740'
                : GLOBAL.colors.inputPlaceHolderColor,
              fontSize: responsiveFontSize(2.1),
            }}>
            {selectedItem_ ? selectedItem_?.label : placeholder}
          </Text>
          <Image
            source={assets.icons.downArrow}
            // style={{transform: [{rotate: openDropdown ? '180deg' : '0deg'}]}}
          />
        </TouchableOpacity>
      </View>

      {openDropdown && (
        <Portal>
          <Modal
            visible={openDropdown}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View style={{}}>
              <ScrollView
                style={{maxHeight: responsiveHeight(45)}}
                showsVerticalScrollIndicator={false}>
                {data.map((item, index) => (
                  <Pressable
                    key={index}
                    style={[
                      styles.dropdownItem,
                      {
                        backgroundColor:
                          multiple === true
                            ? selectedMultipleItem_?.filter(i => {
                                console.log({i});
                                return i.value === item.value;
                              }).length > 0
                              ? '#F0F0F0'
                              : GLOBAL.colors.white
                            : GLOBAL.colors.white,
                      },
                    ]}
                    onPress={() => {
                      if (multiple === true) {
                        setSelectedMultipleItem_(prev => [...prev, item]);
                        // onSelect(item);
                        return;
                      } else {
                        setSelectedItem_(item);
                        onSelect(item);
                        setOpenDropdown(false);
                      }
                    }}>
                    <View>
                      <Text
                        style={{
                          color: '#333740',
                          fontSize: responsiveFontSize(2.1),
                        }}>
                        {item.label}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
              {multiple === true && (
                <View style={{backgroundColor: '#fff', paddingTop: 20}}>
                  <CustomButton
                    width="full"
                    rounded={true}
                    onPress={() => {
                      onSelect(selectedMultipleItem_);
                      setOpenDropdown(false);
                    }}>
                    Done
                  </CustomButton>
                </View>
              )}
            </View>
          </Modal>
        </Portal>
      )}
    </View>
  );
};

export default CustomSelectDropdown;

const styles = StyleSheet.create({
  selectInput: {
    elevation: 5,
    backgroundColor: GLOBAL.colors.white,
    borderTopRadius: 5,
    borderBottomRadius: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: GLOBAL.colors.white,
    flex: 1,
    right: 0,
    left: 0,
    zIndex: 99,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  dropdownItem: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

function getInputSize(_size) {
  switch (_size) {
    case 'normal':
      return 58;
    case 'small':
      return 42;
    case 'large':
      return 64;

    default:
      return 58;
  }
}
