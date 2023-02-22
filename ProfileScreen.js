import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableTitle}>Estadísticas</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>Horas de Gym</Text>
            <Text>7</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>Días Gym</Text>
            <Text>5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>% Cumplimiento</Text>
            <Text>85%</Text>
          </View>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableTitle}>Records</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>Press Banca</Text>
            <Text>120 kg</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>Sentadilla</Text>
            <Text>160 kg</Text>
          </View>
          <View style={styles.tableRow}>
            <Text>Peso Muerto</Text>
            <Text>180 kg</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    backgroundColor: '#f5f5f5',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tableTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default ProfileScreen;
