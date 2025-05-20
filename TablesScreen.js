import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

function TablesScreen() {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [tableName, setTableName] = useState('');

  const tableHead = ['Días', 'Tabla seleccionada'];
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const tableData = days.map(day => [
    day,
    <TouchableOpacity
      key={day}
      style={styles.select}
      onPress={() => console.log(`${day} seleccionado`)}
    >
      <Text style={styles.selectText}>Seleccionar</Text>
    </TouchableOpacity>,
  ]);

  const onAddTable = () => {
    if (tableName.trim()) {
      setTables([...tables, tableName.trim()]);
      setTableName('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableWrapper}>
        <Table borderStyle={styles.tableBorder}>
          <Row data={tableHead} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
          <Rows data={tableData} style={styles.tableRow} textStyle={styles.tableRowText} />
        </Table>
      </View>
      <View style={styles.selectWrapper}>
        <Text style={styles.selectLabel}>Seleccionar tabla:</Text>
        <TouchableOpacity style={styles.select} onPress={() => setSelectedTable(null)}>
          <Text style={styles.selectText}>{selectedTable || 'Seleccionar'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Crear tabla nueva</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(false)}>
            <Text>Volver</Text>
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.formContainer}>
            <Text>Nombre de tabla</Text>
            <TextInput
              placeholder="Nombre de tabla"
              style={styles.input}
              onChangeText={setTableName}
              value={tableName}
            />
            <TouchableOpacity style={styles.saveButton} onPress={onAddTable}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tableWrapper: { margin: 10 },
  tableBorder: { borderWidth: 1, borderColor: '#ddd' },
  tableHeader: { height: 40, backgroundColor: '#f1f1f1' },
  tableHeaderText: { margin: 6, fontSize: 14, fontWeight: 'bold' },
  tableRow: { height: 30 },
  tableRowText: { margin: 6, fontSize: 14 },
  selectWrapper: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'center' },
  selectLabel: { marginRight: 10, fontSize: 16 },
  select: { borderWidth: 1, borderColor: '#ccc', paddingVertical: 5, paddingHorizontal: 10 },
  selectText: { fontSize: 16 },
  buttonWrapper: { alignItems: 'center' },
  button: { backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, margin: 20 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  modalContainer: { flex: 1, backgroundColor: '#fff' },
  backButton: { padding: 10 },
  formContainer: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, marginBottom: 10 },
  saveButton: { backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, marginTop: 20 },
  saveButtonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});

export default TablesScreen;
