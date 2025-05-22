import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import StatusTag from '../components/StatusTag';
import ProgressCircle from '../components/ProgressCircle';
import DrinkLogItem from '../components/DrinkLogItem';

export default function HomeScreen() {
  const [mode, setMode] = useState<'sober' | 'constancy'>('constancy');
  const navigation = useNavigation();

  const openCamera = () => {
    navigation.navigate('CameraScreen'); // Ensure this screen exists in your navigator
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sober.Ai</Text>
        <MaterialCommunityIcons name="shield-half-full" size={24} color="#2196F3" />
      </View>

    
      <ScrollView style={styles.content}>
  <View style={styles.modeSelector}>
    <TouchableOpacity
            style={[styles.modeButton, mode === 'constancy' && styles.modeButtonActive]}
            onPress={() => setMode('constancy')}
          >
            <Text style={[styles.modeText, mode === 'constancy' && styles.modeTextActive]}>
              Constancy Mode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, mode === 'sober' && styles.modeButtonActive]}
            onPress={() => setMode('sober')}
          >
            <Text style={[styles.modeText, mode === 'sober' && styles.modeTextActive]}>
              Sober Mode
            </Text>
          </TouchableOpacity>
  </View>

  {/* Mode-specific stats */}
  <View style={styles.tagsContainer}>
    {mode === 'constancy' && (
      <>
        <StatusTag label="High Risk Time" type="warning" />
        <StatusTag label="Mood: Good" type="success" />
      </>
    )}
    {mode === 'sober' && (
      <>
        <StatusTag label="Craving Level: Low" type="success" />
        <StatusTag label="State: Detox" type="info" />
      </>
    )}
  </View>

  <ProgressCircle
    remaining={mode === 'sober' ? 7 : 2}
    total={mode === 'sober' ? 30 : 3}
    mode={mode}
  />

  <Text style={styles.sectionTitle}>Recent Logs</Text>
  <DrinkLogItem type="Whiskey" amount="40ml" time="8:15pm" units={0.6} mood="😊 Relaxed" />
  <DrinkLogItem type="Beer" amount="330ml" time="1:00pm" units={1.2} mood="😐 Neutral" />
</ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="chart-line" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.navItem, styles.addButton]} onPress={() => navigation.navigate('Camera')}
>
  <MaterialCommunityIcons name="plus" size={24} color="white" />
</TouchableOpacity>

        {/* Removed camera icon */}
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="cog" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  modeSelector: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    padding: 4,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 21,
  },
  modeButtonActive: {
    backgroundColor: 'white',
  },
  modeText: {
    fontSize: 14,
    color: '#666',
  },
  modeTextActive: {
    color: '#2196F3',
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 24,
    marginBottom: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  addButton: {
    backgroundColor: '#2196F3',
    borderRadius: 30,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,
  },
});
