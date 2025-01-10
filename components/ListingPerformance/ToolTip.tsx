import {
  Canvas,
  Circle,
  Group,
  Line,
  Paint,
  vec,
} from '@shopify/react-native-skia';
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

export const LineDemo = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Line
        p1={vec(0, 0)}
        p2={vec(0, 10)}
        color="lightblue"
        style="stroke"
        strokeWidth={4}
      />
    </Canvas>
  );
};
