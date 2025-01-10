import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface PopoverProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
}
export const Popover: React.FC<PopoverProps> = ({ x, y }): ReactNode => {
  const animatedStyle = useAnimatedStyle(() => ({
    top: y.value,
    left: x.value,
  }));

  return (
    <View style={[styles.popover, animatedStyle]}>
      <Text style={styles.date}>10 Jan 2025</Text>
      <View style={styles.impressionsContainer}>
        <Text style={styles.impressionsCount}>751</Text>
        <Text style={styles.impressons}>total impressions</Text>
      </View>
      <View style={styles.promoted}>
        <Text style={styles.promoText}>Promoted</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popover: {
    padding: 12,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C1C9D2',
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  date: {
    color: '#A7B0B8',
    fontSize: 12,
  },
  impressionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  impressionsCount: {
    color: '#0D1011',
    fontSize: 20,
    fontWeight: 600,
  },
  impressons: {
    color: '#5A6067',
  },
  promoted: {
    color: '#A97600',
    backgroundColor: '#FFF8E7',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 'auto',
  },
  promoText: {
    color: '#A97600',
  },
});
