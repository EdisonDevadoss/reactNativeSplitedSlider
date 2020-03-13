/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
// import Slider from 'react-native-slider';
import GradientSlider from './src/GradientSlider';
import {HueSlider} from './lib';
import tinycolor from 'tinycolor2';

const SliderScreen: () => React$Node = () => {
  const [sliderVal, setSliderVal] = useState(0);

  return (
    <>
    <Text>{sliderVal}</Text>
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
      <Button title="-" color='red' onPress={() => setSliderVal(sliderVal - 1)} />
      <Button title="+" color='green' onPress={() => setSliderVal(sliderVal + 1)} />
    </View>
      <HueSlider
        style={styles.sliderRow}
        gradientSteps={4}
        value={sliderVal}
        maximumValue={10}
        onValueChange={value => {
          setSliderVal(value)
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  thumb: {
   width: 24,
   height: 24,
   borderRadius: 24 / 2,
   shadowColor: 'black',
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 4,
   shadowOpacity: 0.1
 },
 sliderRow: {
  alignSelf: 'stretch',
  marginLeft: 12,
  marginTop: 12
},
});

export default SliderScreen;
