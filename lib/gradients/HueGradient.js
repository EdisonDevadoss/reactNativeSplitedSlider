import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Gradient from './Gradient';

class HueGradient extends PureComponent {

  render() {
    const { style, gradientSteps, maximumValue } = this.props;
    return (
      <Gradient
        style={style}
        gradientSteps={gradientSteps}
        maximumValue={359}
      />
    );
  }
}

export default HueGradient;

HueGradient.propTypes = {
  gradientSteps: PropTypes.number.isRequired
};
