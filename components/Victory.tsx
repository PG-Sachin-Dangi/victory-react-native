import { Dimensions, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import type { SharedValue } from 'react-native-reanimated';
import {
  Area,
  Bar,
  CartesianChart,
  CartesianChartRenderArg,
  Line,
  useChartPressState,
} from 'victory-native';
import {
  Circle,
  LinearGradient,
  useFont,
  vec,
} from '@shopify/react-native-skia';
import { createContext, ReactNode, useContext } from 'react';
import React from 'react';

type CartesianData = {
  x: string;
  y: number;
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const lineChartData = Array.from({ length: 12 }, (_, index) => ({
  x: months[index],
  y: 100 * Math.random(),
}));

const barChartData = Array.from({ length: 12 }, (_, index) => ({
  x: months[index],
  // any 4 values 100 others 0 at random
  y: Math.random() > 0.75 ? 100 : 0,
}));

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ListingPerformanceGraph = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Listing Performance Insights</ThemedText>
      <View style={{ height: screenHeight * 0.5, width: screenWidth * 0.8 }}>
        <LineChart />
      </View>
    </ThemedView>
  );
};

export const LineChart = () => {
  const font = useFont(require('../assets/fonts/SpaceMono-Regular.ttf'), 8);
  return (
    <>
      <View style={styles.lineChart}>
        <CartesianChartComponent data={lineChartData}>
          {({ points, chartBounds }) => (
            //👇 pass a PointsArray to the Line component, y0, as well as options.
            <>
              <Line
                points={points.y}
                curveType="linear"
                color="#0071EA"
                strokeWidth={3}
                animate={{ type: 'timing', duration: 300 }}
              />
              <Area
                points={points.y}
                y0={chartBounds.bottom}
                curveType="linear"
                color="#0071EA4D"
                animate={{ type: 'timing', duration: 300 }}
              />
            </>
          )}
        </CartesianChartComponent>
      </View>

      <View style={styles.barChart}>
        <CartesianChartComponent data={barChartData}>
          {({ points, chartBounds }) => (
            <Bar
              points={points.y}
              chartBounds={chartBounds}
              barCount={barChartData.length}
              animate={{ type: 'timing', duration: 300 }}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, 400)}
                colors={['#F2A92666', '#FFFFFF66']}
              />
            </Bar>
          )}
        </CartesianChartComponent>
      </View>
    </>
  );
};

interface CartesianChartComponentProps {
  children: (args: CartesianChartRenderArg<CartesianData, 'y'>) => ReactNode;
  data: Array<CartesianData>;
}
export const CartesianChartComponent: React.FC<
  CartesianChartComponentProps
> = ({ children, data }) => {
  const font = useFont(require('../assets/fonts/SpaceMono-Regular.ttf'), 8);
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
      }}
      domain={{ x: [1, 11], y: [0, 100] }}
      yAxis={[{ font: font }]}
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

const ToolTip = ({
  x,
  y,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
}) => {
  return <Circle cx={x} cy={y} r={8} color="black" />;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  lineChart: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  barChart: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});
