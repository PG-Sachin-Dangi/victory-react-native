import { Dimensions, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { CompositeChart } from './CompositeChart';
import { styles } from './styles';
import { Popover } from './Popover';

export const ListingPerformanceInsights = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Listing Performance Insights</ThemedText>
      <View style={styles.compositeChart}>
        <CompositeChart />
      </View>
      <Popover />
    </ThemedView>
  );
};
