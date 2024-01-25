import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {layoutHorizontalPadding} from '../../GLOBAL';

const FlightCard = ({
  companyName,
  depTime,
  depPlace,
  duration,
  stop,
  arrTime,
  arrPlace,
  price,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: layoutHorizontalPadding,
        paddingVertical: layoutHorizontalPadding,
        elevation: 1,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <MaterialIcons name="flight-takeoff" size={30} color="black" />
        <Text style={{fontSize: responsiveFontSize(2)}}>{companyName}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 15,
          marginTop: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2.2),
              fontWeight: '500',
            }}>
            {depTime}
          </Text>
          <Text style={{fontSize: responsiveFontSize(2)}}>{depPlace}</Text>
        </View>

        <View style>
          <Text style={{color: 'black'}}>{duration}</Text>
          <View style={{height: 0.5, backgroundColor: 'gray'}}></View>
          <Text>{stop}</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2.2),
              fontWeight: '500',
            }}>
            {arrTime}
          </Text>
          <Text style={{fontSize: responsiveFontSize(2)}}>{arrPlace}</Text>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2.2),
              fontWeight: '500',
            }}>
            ₹{price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlightCard;
