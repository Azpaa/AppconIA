import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={{
            [`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`]: {
              selected: true,
            },
          }}
          style={styles.calendar}
        />
      </View>
      <Text>Próximo entrenamiento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    width: '90%',
    aspectRatio: 1,
  },
});

export default HomeScreen;
