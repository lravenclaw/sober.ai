import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type DrinkLogItemProps = {
  type: string;
  amount: string;
  time: string;
  units: number;
  mood?: string;
};

export default function DrinkLogItem({ type, amount, time, units, mood }: DrinkLogItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons 
          name={type === 'Beer' ? 'beer' : type === 'Whiskey' ? 'glass-whiskey' : 'glass-wine'} 
          size={24} 
          color="#666"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.typeText}>{`${type}, ${amount}`}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <View style={styles.unitsContainer}>
        <Text style={styles.unitsText}>{`${units} units`}</Text>
        {mood && <Text style={styles.moodText}>{mood}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  unitsContainer: {
    alignItems: 'flex-end',
  },
  typeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  unitsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2196F3',
  },
  moodText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});