import {View, Text, Image, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {assets} from '../../assets';
import {windowHeight} from '../../utils/dimensions';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {GLOBAL, layoutHorizontalPadding} from '../../GLOBAL';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CustomInput from '../../components/CustomInput';
import CustomDatePicker from '../../components/customDatePicker';
import CustomButton from '../../components/CustomButton';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import FlightCard from '../../components/FlightCard';
import moment from 'moment';
import CustomSelectDropdown from '../../components/CustomDropdown';

const FlightSearchResult = ({route, navigation}) => {
  const [flightData, setFlightData] = useState([]);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const searchedResult = route?.params?.searchedResult;

  const companyData = [
    {label: 'JetSpice', value: 'JetSpice'},
    {label: 'Air India', value: 'Air India'},
  ];

  const sortPriceData = [
    {label: 'High To Low', value: 'htl'},
    {label: 'Low To High', value: 'lth'},
  ];

  useFocusEffect(
    useCallback(() => {
      setFlightData(searchedResult);
    }, [searchedResult]),
  );

  console.log({route});

  // const [searchData, setSearchData] = useState({from: '', to: '', date: ''});
  // const handleChangeSearchData = (name, value) => {
  //   setSearchData(prev => ({...prev, [name]: value}));
  // };

  console.log({flightData: flightData?.length});

  // useFocusEffect(
  //   useCallback(() => {
  //     axios
  //       .get('https://api.npoint.io/4829d4ab0e96bfab50e7')
  //       .then(res => {
  //         setFlightData(res?.data?.data?.result);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []),
  // );

  const handleSortPrice = item => {
    const value = item?.value;
    if (value === 'lth') {
      const data = [...searchedResult];
      const sortedData = data.sort((a, b) => a?.fare - b?.fare);
      setFlightData(sortedData);
    }
    if (value === 'htl') {
      const data = [...searchedResult];
      const sortedData = data.sort((a, b) => b?.fare - a?.fare);
      setFlightData(sortedData);
    }
  };

  const handleFilterByAirlinse = item => {
    const value = item?.value;
    const data = [...searchedResult];
    const filteredData = data?.filter(
      _item => _item?.displayData?.airlines?.[0]?.airlineName === value,
    );
    setFlightData(filteredData);
  };

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: responsiveHeight(30),
          transform: [{rotate: '0deg'}],
          // borderWidth: 2,
          // borderColor: 'red',
          overflow: 'hidden',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          backgroundColor: '#0C446B',
        }}>
        {/* <Image
          source={assets.images.map}
          style={{
            width: '100%',
            height: windowHeight,
            // transform: [{scale: 0.9}],
          }}
          resizeMode="cover"
        /> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: layoutHorizontalPadding,
            marginLeft: layoutHorizontalPadding,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: GLOBAL.colors.white,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EntypoIcon name="user" size={35} />
          </View>
          {/* <Image source={assets.images.user}  /> */}
          <View>
            <Text
              style={{
                color: GLOBAL.colors.white,
                fontSize: responsiveFontSize(2.2),
                // fontWeight: '500',
              }}>
              Hello James 👋
            </Text>
            <Text
              style={{
                color: GLOBAL.colors.white,
                fontSize: responsiveFontSize(2.5),
                fontWeight: '400',
              }}>
              Let's book your flight
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: layoutHorizontalPadding,
          marginTop: -responsiveHeight(15),
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: GLOBAL.colors.white,
            paddingHorizontal: layoutHorizontalPadding,
            paddingVertical: layoutHorizontalPadding * 2,
            borderRadius: 20,
            gap: 10,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <CustomSelectDropdown
              placeholder="search by airlines"
              data={companyData}
              onSelect={handleFilterByAirlinse}
              disabled={searchedResult?.length === 0}
            />
          </View>
          <View style={{flex: 1}}>
            <CustomSelectDropdown
              placeholder="sort by price"
              data={sortPriceData}
              onSelect={handleSortPrice}
              disabled={searchedResult?.length === 0}
            />
          </View>

          {/* <CustomButton
            width="full"
            rounded={true}
            style={{marginTop: 20}}
            onPress={handleSearch}>
            Search Flight
          </CustomButton> */}
        </View>
      </View>

      <View style={{paddingHorizontal: layoutHorizontalPadding, marginTop: 20}}>
        <FlatList
          ListHeaderComponent={
            <Text style={{fontSize: responsiveFontSize(2), fontWeight: '500'}}>
              All Flights ({flightData?.length})
            </Text>
          }
          data={flightData}
          renderItem={({item, index}) => (
            <FlightCard
              companyName={item?.displayData?.airlines?.[0]?.airlineName}
              price={item?.fare}
              depTime={moment(item?.displayData?.source?.depTime).format(
                'hh:mm',
              )}
              depPlace={item?.displayData?.source?.airport?.cityName}
              duration={item?.displayData?.totalDuration}
              stop={item?.displayData?.stopInfo}
              arrTime={moment(item?.displayData?.destination?.arrTime).format(
                'hh:mm',
              )}
              arrPlace={item?.displayData?.destination?.airport?.cityName}
            />
          )}
          keyExtractor={({index}) => `${index}`}
        />
        <View style={{height: 100}}></View>
      </View>

      <View style={{height: 100}}></View>

      {/* <AntDesign name="stepforward" size={30} /> */}
    </View>
  );
};

export default FlightSearchResult;
