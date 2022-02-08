import React, {FC, memo} from 'react';
import {Text} from 'react-native-elements';
import Format, {NumberFormatProps} from 'react-number-format';

type TNumberFormat = {
  RenderComponent?: any;
} & NumberFormatProps;

const NumberFormat: FC<TNumberFormat> = ({RenderComponent, value, ...rest}) => {
  const CustomComponent = RenderComponent || Text;
  return (
    <Format
      value={value}
      defaultValue={0}
      displayType="text"
      thousandSeparator
      renderText={(text: string) => <CustomComponent>{text}</CustomComponent>}
      {...rest}
    />
  );
};

export default memo(NumberFormat);
