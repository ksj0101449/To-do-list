import React, {useState } from 'react';
import {View,TextInput, Button, Modal} from 'react-native';

const Input = props => {
    const [enteredGoal, setEnteredGoal] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    
    

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <TextInput
         placeholder="할 일을 입력하세요"
         onChangeText={goalInputHandler}
         value={enteredGoal}
         style={{
             width: 300,
             height: 50,
             borderWidth: 1,
             borderColor: 'black',
             padding: 10
         }}

         />  
         <Button 
         title="취소"
         color="red"
         onPress={() => props.onCancel()}
         />
         <Button 
         title="생성"
         onPress={() => props.onAddGoal(enteredGoal)}
         />
      </View>
      </Modal>
    )
}

export default Input;