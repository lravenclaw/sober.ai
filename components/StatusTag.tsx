import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StatusTagProps = {
  label: string;
  type?: 'warning' | 'info' | 'success';
};

export default function StatusTag({ label, type = 'info' }: StatusTagProps) {
  return (
    <View style={[styles.container, styles[type]]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  warning: {
    backgroundColor: '#FFE1E1',
  },
  info: {
    backgroundColor: '#E1F5FE',
  },
  success: {
    backgroundColor: '#E8F5E9',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
});