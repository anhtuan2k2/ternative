import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  return (
    <View style={width}>
      <Text>{label}</Text>
    </View>
  );
};

export default Slide;
