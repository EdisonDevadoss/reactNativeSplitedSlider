import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GradientSlider from './GradientSlider';
import HueGradient from '../gradients/HueGradient';

const HueSlider = ({ style, value, onValueChange, gradientSteps, maximumValue }) => {
  return (
    <GradientSlider
      gradient={<HueGradient gradientSteps={gradientSteps} />}
      style={style}
      step={1}
      maximumValue={maximumValue}
      value={value}
      onValueChange={onValueChange}
    />
  );
};

export default HueSlider;

HueSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  gradientSteps: PropTypes.number.isRequired
};
