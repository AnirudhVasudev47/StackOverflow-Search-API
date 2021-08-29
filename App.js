import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import ResultsPage from "./results/results_page";

export default function App() {

  const [searchString, setSearchString] = React.useState(null);

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10
    }
  })
  return (
    <View style={{marginVertical:50}}>
      <ResultsPage/>
    </View>
  );

};
/*
<View style={styles.view}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 25, color: '#da670b'}}>Search</Text>
        <Text style={{fontSize: 25, color: '#000'}}> Stack</Text>
        <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>Overflow</Text>
      </View>
      <TextInput placeholder='Search here...'
                 style={styles.textInput}
                 value={searchString}
                 onChangeText={setSearchString}/>
      <Button title='Search
     ' color='#da670b' onPress={() => {
        //
      }}/>
    </View>
 */