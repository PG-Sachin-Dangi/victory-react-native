import { Dimensions, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import type { SharedValue } from 'react-native-reanimated';
import { Area, CartesianChart, useChartPressState } from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const Victory = () => {
  const data = Array.from({ length: 11 }, (_, i) => ({
    x: i,
    y: 40 + 30 * Math.random(),
  }));
  const { state, isActive } = useChartPressState({ x: 0, y: { y: 0 } });
  const font = useFont(require('../assets/fonts/SpaceMono-Regular.ttf'), 16);

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Victory Graph POC</ThemedText>
      <View style={{ height: screenHeight * 0.5, width: screenWidth * 0.8 }}>
        <CartesianChart
          chartPressState={state}
          data={data}
          xKey="x"
          yKeys={['y']}
          xAxis={{
            font: font,
            tickCount: 5,
          }}
          yAxis={[{ font: font, tickCount: 5 }]}
          domain={{ y: [40, 70] }}
          padding={16}
        >
          {({ points, chartBounds }) => (
            //👇 pass a PointsArray to the Line component, y0, as well as options.
            <>
              <Area
                points={points.y}
                y0={chartBounds.bottom}
                curveType="linear"
                color="#0071EA4D"
                animate={{ type: 'timing', duration: 300 }}
              />
              {isActive && (
                <ToolTip x={state.x.position} y={state.y.y.position} />
              )}
            </>
          )}
        </CartesianChart>
      </View>
    </ThemedView>
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
