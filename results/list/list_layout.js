import React from 'react';
import {View, Text} from "react-native";
import listStyles from "../results_style";
import {Feather, MaterialIcons} from '@expo/vector-icons';

function ListLayout(props) {
  return (
    <View style={listStyles.list}>
      <View style={listStyles.listLeft}>
        <View style={{flexDirection: 'row'}}>
          <Text>{props.score}</Text>
          <Feather style={{marginEnd: 10, marginStart: 5}} name="triangle" size={15} color="#9a9a9a"/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 9}}>
          <Text>{props.answer_count}</Text>
          <MaterialIcons style={{marginEnd: 10, marginStart: 5}} name="question-answer" size={17} color="#9a9a9a"/>
        </View>
      </View>
      <View style={listStyles.listRight}>
        <Text style={listStyles.listTitle}>
          {props.title}
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            props.tags.map((prop, index) => {
              return (<Text key={index.toString()} style={listStyles.listTag}>{prop}</Text>)
            })
          }
        </View>
        <View style={listStyles.listTime}>
          <Text style={listStyles.timeStyle}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
}

export default ListLayout;