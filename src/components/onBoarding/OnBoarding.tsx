import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Slide from './Slide.tsx';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: 0.61 * height,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label='some' />
          <Slide label='some' right />
          <Slide label='some' />
          <Slide label='some' right />
        </ScrollView>
      </View>
    </View>
  );
};

export default Onboarding;
