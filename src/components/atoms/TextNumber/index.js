import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';

const TextNumber = ({value, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={value}
        displayType="text"
        renderText={(valueText) => <Text style={style}>{valueText}</Text>}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
      />
    );
  } else {
    return (
      <NumberFormat
        value={value}
        thousandSeparator="."
        displayType="text"
        prefix="IDR "
        renderText={(valueText) => <Text style={style}>{valueText}</Text>}
        decimalSeparator=","
      />
    );
  }
};

export default TextNumber;
