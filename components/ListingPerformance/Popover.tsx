import { View, Text, StyleSheet } from 'react-native';

export const Popover = () => {
  return (
    <View style={styles.popover}>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C1C9D2',
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
  },
  promoText: {
    color: '#A97600',
  },
});
