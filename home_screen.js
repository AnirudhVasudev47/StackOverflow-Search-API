import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import ResultsPage from "./results/results_page";
import styles from "./global/global_styles";

export default function HomeScreen({navigation}) {

  const [searchString, setSearchString] = React.useState(null);

  const handleSearch = () => {
    navigation.navigate('Result', {searchItem: searchString});
  }

  return (
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
     ' color='#da670b' onPress={handleSearch}/>
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