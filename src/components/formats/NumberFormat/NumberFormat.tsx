import React, {FC, memo} from 'react';
import Format, {NumberFormatProps} from 'react-number-format';

type TNumberFormat = {
  RenderComponent: any;
} & NumberFormatProps;

const NumberFormat: FC<TNumberFormat> = ({RenderComponent, value, ...rest}) => {
  return (
    <Format
      value={value}
      defaultValue={0}
      displayType="text"
      thousandSeparator
      renderText={(text: string) => <RenderComponent>{text}</RenderComponent>}
      {...rest}
    />
  );
};

export default memo(NumberFormat);
