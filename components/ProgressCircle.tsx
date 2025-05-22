import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

type ProgressCircleProps = {
  remaining: number;
  total: number;
  mode: 'sober' | 'constancy';
};

export default function ProgressCircle({ remaining, total, mode }: ProgressCircleProps) {
  const radius = 80;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const progress = (remaining / total) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={180} height={180} style={styles.svg}>
        <Circle
          cx={90}
          cy={90}
          r={radius}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={90}
          cy={90}
          r={radius}
          stroke={mode === 'sober' ? '#4CAF50' : '#2196F3'}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.remainingText}>{remaining}</Text>
        <Text style={styles.labelText}>
          {mode === 'sober' ? 'Days Sober' : 'Drinks Left'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  svg: {
    transform: [{ rotate: '-90deg' }],
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  remainingText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  labelText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});