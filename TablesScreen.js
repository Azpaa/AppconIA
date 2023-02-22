import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

 function TablesScreen() {
   const [selectedTable, setSelectedTable] = useState(null);
   const [tableList, setTableList] = useState(['Mis tablas']);
   const [isModalVisible, setModalVisible] = useState(false);
   const [tableName, setTableName] = useState("");
 
   const tableHead = ['Días', 'Tabla seleccionada'];
   const tableData = [
     ['Lunes', <TouchableOpacity style={styles.select} onPress={() => console.log('Lunes seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>],
     ['Martes', <TouchableOpacity style={styles.select} onPress={() => console.log('Martes seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>],
     ['Miércoles', <TouchableOpacity style={styles.select} onPress={() => console.log('Miércoles seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>],
     ['Jueves', <TouchableOpacity style={styles.select} onPress={() => console.log('Jueves seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>],
     ['Viernes', <TouchableOpacity style={styles.select} onPress={() => console.log('Viernes seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>],
     ['Sábado', <TouchableOpacity style={styles.select} onPress={() => console.log('Sábado seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>],
     ['Domingo', <TouchableOpacity style={styles.select} onPress={() => console.log('Domingo seleccionado')}>
               <Text style={styles.selectText}>Seleccionar</Text>
             </TouchableOpacity>]
   ];
 
   const onTableSelect = (index) => {
     setSelectedTable(index);
   };
 
   const onAddTable = () => {
     setTableList([...tableList, `Tabla ${tableList.length + 1}`]);
     setModalVisible(false);
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
        <TouchableOpacity onPress={() => setSelectedTable(null)} style={styles.select}>
          <Text style={styles.selectText}>{selectedTable || 'Seleccionar'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Crear tabla nueva</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible}>
        <SafeAreaView style={styles.modalContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(false)}>
            <Text>Volver</Text>
          </TouchableOpacity>
          <ScrollView>
            <View style={styles.formContainer}>
              <Text>Nombre de tabla</Text>
              <TextInput
                placeholder="Nombre de tabla"
                style={styles.input}
                onChangeText={(text) => setTableName(text)}
                value={tableName}
              />
              <View style={styles.tableRow}>
                <Text>Lunes</Text>
                <View style={styles.selectWrapper}>
                  <TouchableOpacity style={styles.select} onPress={() => console.log('Lunes seleccionado')}>
                    <Text style={styles.selectText}>Seleccionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tableRow}>
                <Text>Martes</Text>
                <View style={styles.selectWrapper}>
                  <TouchableOpacity style={styles.select} onPress={() => console.log('Martes seleccionado')}>
                    <Text style={styles.selectText}>Seleccionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tableRow}>
                <Text>Miércoles</Text>
                <View style={styles.selectWrapper}>
                  <TouchableOpacity style={styles.select} onPress={() => console.log('Miércoles seleccionado')}>
                    <Text style={styles.selectText}>Seleccionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tableRow}>
                <Text>Jueves</Text>
                <View style={styles.selectWrapper}>
                  <TouchableOpacity style={styles.select} onPress={() => console.log('Jueves seleccionado')}>
                    <Text style={styles.selectText}>Seleccionar</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </Modal>
  <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Guardar tabla')}>
    <Text style={styles.saveButtonText}>Guardar</Text>
  </TouchableOpacity>
</View>
      );
    }
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    topContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    },
    middleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    },
    tableBorder: {
    borderWidth: 1,
    borderColor: '#ddd',
    },
    tableHeader: {
    height: 40,
    backgroundColor: '#f1f1f1',
    },
    tableHeaderText: {
    margin: 6,
    fontSize: 14,
    fontWeight: 'bold',
    },
    tableRow: {
    height: 30,
    },
    tableRowText: {
    margin: 6,
    fontSize: 14,
    },
    selectWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    },
    selectLabel: {
    marginRight: 10,
    fontSize: 16,
    },
    select: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    },
    selectText: {
    fontSize: 16,
    },
    editButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    },
    button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 20,
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    },
    backButton: {
    padding: 10,
    },
    formContainer: {
    padding: 20,
    },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    },
    });
    
    export default TablesScreen;