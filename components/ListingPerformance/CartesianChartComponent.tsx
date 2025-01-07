import { useFont } from '@shopify/react-native-skia';
import React, { ReactNode } from 'react';
import {
  CartesianChartRenderArg,
  useChartPressState,
  CartesianChart,
} from 'victory-native';
import { ToolTip } from './ToolTip';

type CartesianData = {
  x: string;
  y: number;
};

interface CartesianChartComponentProps {
  children: (args: CartesianChartRenderArg<CartesianData, 'y'>) => ReactNode;
  data: Array<CartesianData>;
}
export const CartesianChartComponent: React.FC<
  CartesianChartComponentProps
> = ({ children, data }) => {
  const font = useFont(require('../../assets/fonts/SpaceMono-Regular.ttf'), 8);
  const { state, isActive } = useChartPressState({ x: 'Jan', y: { y: 0 } });

  return (
    <CartesianChart
      chartPressState={state}
      data={data}
      xKey="x"
      yKeys={['y']}
      xAxis={{
        font: font,
        tickCount: 12,
        lineColor: 'transparent',
      }}
      domain={{ x: [1, 11], y: [0, 100] }}
      yAxis={[{ font: font, tickCount: 12, lineColor: 'transparent' }]}
      viewport={{ x: [0, 12], y: [0, 100] }}
      domainPadding={{ left: 50, right: 50 }}
    >
      {(args: CartesianChartRenderArg<CartesianData, 'y'>) => (
        <>
          {children(args)}
          {isActive && <ToolTip x={state.x.position} y={state.y.y.position} />}
        </>
      )}
    </CartesianChart>
  );
};
