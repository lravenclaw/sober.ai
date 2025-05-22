import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CameraAccessDeniedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.photoFrame}>
        <MaterialCommunityIcons name="camera-off" size={80} color="#cccccc" />
      </View>
      <Text style={styles.text}>No access to camera</Text>
      <Text style={styles.subText}>Please enable camera access in settings to use this feature</Text>
      
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>Open Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  photoFrame: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  settingsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  settingsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});