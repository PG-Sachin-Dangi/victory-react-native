import { Canvas, Circle, Line, Paint, vec } from '@shopify/react-native-skia';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Text } from 'react-native';

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

export const LineDemo: React.FC<ToolTipProps> = ({ x, y }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return { top: y.value, left: x.value };
  });

  return (
    <Animated.View style={[animatedStyle]}>
      <Canvas
        style={{
          zIndex: 20,
          position: 'absolute',
          top: animatedStyle.top,
          left: animatedStyle.left,
        }}
      >
        <Line
          p1={vec(animatedStyle.left, 100)}
          p2={vec(animatedStyle.left, 300)}
          color="black"
          style="stroke"
          strokeWidth={4}
        />
      </Canvas>

      {/* <Text
        style={{
          zIndex: 20,
          position: 'absolute',
          top: animatedStyle.top,
          left: animatedStyle.left,
        }}
      >
        Hello
      </Text> */}
    </Animated.View>
  );
};
