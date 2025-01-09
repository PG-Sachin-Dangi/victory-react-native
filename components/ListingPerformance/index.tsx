import { Dimensions, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { CompositeChart } from './CompositeChart';
import { styles } from './styles';
import { Popover } from './Popover';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ListingPerformanceInsights = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Listing Performance Insights</ThemedText>
      <View style={{ height: screenHeight * 0.5, width: screenWidth * 0.8 }}>
        <CompositeChart />
      </View>
      <Popover />
    </ThemedView>
  );
};
