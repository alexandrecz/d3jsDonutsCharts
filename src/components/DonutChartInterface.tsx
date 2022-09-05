
export interface MarginInterface {
    right?: number;
    left?: number;
    bottom?: number;
    top?: number;
}

export interface DimensionInterface {
    maxHeight?: number;
    margin?: MarginInterface;
    height: number;
    width: number;
}

export interface BaseChartDataChildrenInterface {
    key?: string;
    value: number;
}

export interface BaseChartContentProps extends DimensionInterface {
    text?: string;
    data: BaseChartDataChildrenInterface[];
}

export interface BaseDataItemProps {
    text: string;
    value: string;
    x?: number;
    y?: number;
    fontSize?: number;
}

export interface TooltipChartProps {
    show: boolean;
    positionX: string;
    positionY: string;
    title?: string;
    content: string;
}