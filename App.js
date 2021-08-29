import React from 'react';

import Navigator from "./Routes/search_route";

export default function App() {

  return (
    <Navigator/>
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