import { Dimensions, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import type { SharedValue } from 'react-native-reanimated';
import {
  Area,
  Bar,
  CartesianChart,
  Line,
  useChartPressState,
} from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';

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
  const data = Array.from({ length: 11 }, (_, i) => ({
    x: i,
    y: 40 + 30 * Math.random(),
  }));

  const barGraphData = Array.from({ length: 6 }, (_, index) => ({
    // Starting at 1 for Jaunary
    month: index + 1,
    // Randomizing the listen count between 100 and 50
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
  }));

  const { state, isActive } = useChartPressState({ x: 0, y: { y: 0 } });
  const font = useFont(require('../assets/fonts/SpaceMono-Regular.ttf'), 16);

  const barGraphPoints = barGraphData.map((bar, index) => ({
    x: index * bar.listenCount,
    xValue: index * bar.listenCount,
    y: 0,
    yValue: 0,
  }));

  return (
    <CartesianChart
      chartPressState={state}
      data={data}
      xKey="x"
      yKeys={['y']}
      xAxis={{
        font: font,
        tickCount: 10,
      }}
      yAxis={[{ font: font, tickCount: 5 }]}
      domainPadding={{ left: 50, right: 50, top: 30 }}
      padding={16}
    >
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

          {isActive && <ToolTip x={state.x.position} y={state.y.y.position} />}

          {barGraphData.map((bar, index) => (
            <Bar
              //   opacity={0.5}
              color="#F2A92666"
              key={index}
              chartBounds={{
                top: 0,
                left: 0,
                right: bar.listenCount, // width of the bar
                bottom: bar.listenCount,
              }}
              points={barGraphPoints}
            />
          ))}
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
});
