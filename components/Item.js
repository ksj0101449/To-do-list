import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Item = props => {
    return(    
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View
        style={{
          backgroundColor: '#B0B0B0',
          height: 50,
          padding: 10,
          margin: 5,
          justifyContent: 'center'
        }}
        >            
        <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    )
}

export default Item;