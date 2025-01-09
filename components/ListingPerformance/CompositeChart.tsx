import { LinearGradient, vec } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { Line, Area, Bar, Scatter } from 'victory-native';
import { CartesianChartComponent } from './CartesianChartComponent';
import { lineChartData, barChartData, editedListingsData } from './mocks';
import { styles } from './styles';
import React from 'react';

export const CompositeChart = () => {
  return (
    <>
      <View style={styles.lineChart}>
        <CartesianChartComponent data={lineChartData}>
          {({ points, chartBounds }) => (
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

      <View style={styles.barChart}>
        <CartesianChartComponent data={editedListingsData}>
          {({ points }) => (
            <Scatter
              points={points.y}
              shape="circle"
              radius={4}
              style="fill"
              color="#144386"
            />
          )}
        </CartesianChartComponent>
      </View>
    </>
  );
};
