import styled from 'styled-components';

export const DonutChartContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

export const TooltipChart = styled.div<{ show: boolean; positionX: string; positionY: string }>`
  top: ${(props: { positionY: string; }) => props.positionY};
  left: ${(props: { positionX: string; }) => props.positionX};
  position: absolute;
  display: ${(props: { show: string; }) => (props.show ? 'block' : 'none')};
  background-color: ${`gray`};
  color: ${`white`};
  font-size: ${`14px`};
  padding: ${`8px`};
  text-align: center;
  width: auto;
  z-index: 999;
`;


