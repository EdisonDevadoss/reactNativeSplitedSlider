import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import PropTypes from 'prop-types';

const bgColor = ['#FA4978', '#FA4978', '#FCC974', '#27DBCA', '#27DBCA']

const Gradient = ({style, gradientSteps, maximumValue, getStepColor}) => {
  const rows = [];
  for (let i = 0; i <= gradientSteps; i++) {
    rows.push(
      <View
        key={i}
        style={{
          flex: 1,
          marginLeft: Platform.OS === 'ios' ? -StyleSheet.hairlineWidth : 4,
          marginRight: Platform.OS === 'ios' ? -StyleSheet.hairlineWidth : 4,
          backgroundColor: bgColor[i],
          width: 50,
          height: 4
        }}
      />
    );
  }
  return <View style={[styles.container, style]}>{rows}</View>;
};

export default Gradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

Gradient.propTypes = {
  gradientSteps: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  getStepColor: PropTypes.func.isRequired
};
