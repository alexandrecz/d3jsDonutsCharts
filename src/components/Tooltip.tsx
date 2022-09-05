import React from 'react';
import { TooltipChartProps } from './DonutChartInterface';
import { TooltipChart } from './styles';

const Tooltip = ({ show, positionX, positionY, title, content }: TooltipChartProps): JSX.Element => {
  return (
    <TooltipChart show={show} positionY={positionY} positionX={positionX}>
      <div>{title}</div>
      <div>{content}</div>
    </TooltipChart>
  );
};

export default Tooltip;