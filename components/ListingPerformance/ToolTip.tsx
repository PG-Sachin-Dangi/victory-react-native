import { Circle, Paint } from '@shopify/react-native-skia';
import { View, StyleSheet, Text } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

interface ToolTipProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
}
export const ToolTip: React.FC<ToolTipProps> = ({ x, y }) => {
  return (
    <Circle cx={x} cy={y} r={5}>
      <Paint color={'white'} />
      <Paint color={'#0071EA'} style="stroke" strokeWidth={2} />
    </Circle>
  );
};
