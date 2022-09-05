import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as d3 from 'd3';
import { DonutChartContainer } from './styles';
import { BaseChartContentProps, BaseDataItemProps } from './DonutChartInterface';
import Tooltip from './Tooltip';

const DonutChart = ({ data, height, width, text }: BaseChartContentProps): JSX.Element => {

    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipTitle, setTooltipTitle] = useState('');
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosX, setTooltipPosX] = useState('');
    const [tooltipPosY, setTooltipPosY] = useState('');
    const [piePieItems, setPieItems] = useState([]);

    const margin = 15;
    const centerContainer = Math.min(width, height) / 2;
    const radius = centerContainer - margin;
    const createPie = d3.pie().value((d: BaseDataItemProps) => d.value);

    const createArc = d3
        .arc()
        .innerRadius(radius / 1.55)
        .outerRadius(radius);
  

    const colors = d3.scaleOrdinal(d3.schemeRdBu[9]);

    const showsTooltip = (event: React.MouseEvent<SVGPathElement, MouseEvent>, pieDataItem: BaseDataItemProps) => {
        setShowTooltip(true);
        setTooltipPosX(`${event.pageX}px`);
        setTooltipPosY(`${event.pageY - 68}px`);
        setTooltipTitle(pieDataItem.text);
        setTooltipContent(pieDataItem.value);
    };

    const hideTooltip = () => {
        setShowTooltip(false);
    };

    const renderDonutChart = () => {
        const pieDataList = data.map(
            (d) =>
            ({
                text: d.key,
                value: d.value.toString(),
            } as BaseDataItemProps),
        );

        setPieItems(createPie(pieDataList));
    };

    useEffect(() => {
        if (data) {
            renderDonutChart();
        }
    }, [data, height, width, text]);

    return (
        <DonutChartContainer data-testid="donutchart-container">
            <svg width={width} height={height} onMouseLeave={() => setShowTooltip(false)}>
                <g key={`g-${uuid()}`} transform={`translate(${centerContainer} ${centerContainer})`}>
                    {piePieItems.map((pieDataItem, index) => (
                        <g key={index} className="arc">
                            <path
                                style={{ cursor: 'pointer' }}
                                className="mouse-tracker"
                                d={createArc(pieDataItem)}
                                fill={colors(index)}
                                stroke={`white`}
                                strokeWidth={piePieItems.length < 5 ? '2' : '0'}
                                onMouseMove={(event) => showsTooltip(event, pieDataItem.data)}
                                onMouseOut={() => hideTooltip(pieDataItem.data)}
                            />
                        </g>
                    ))}
                    <text
                        id="donut-text"
                        textAnchor="middle"
                        y={10}
                        fontSize={`24px`}
                    >
                        {text}
                    </text>
                </g>
            </svg>
            <Tooltip
                show={showTooltip}
                title={tooltipTitle}
                content={tooltipContent}
                positionX={tooltipPosX}
                positionY={tooltipPosY}
            ></Tooltip>
        </DonutChartContainer>
    );
};

export default DonutChart;
