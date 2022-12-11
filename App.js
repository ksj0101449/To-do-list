import React, {useState} from 'react';
import { StyleSheet,View, Button,FlatList } from 'react-native';
import Item from './components/Item';
import Input from './components/Input';

export default function App() {
   
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false); 
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddModal(false);    
  } 
  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }    
  const cancelGoalHandler = () => {
    setIsAddModal(false);
  }
  return (
    <View style={styles.container}>
      <Button title="할 일 추가" onPress={() => setIsAddModal(true)} />
       <Input visible={isAddModal} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} /> 
      <View>
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <Item id={itemData.item.id} onDelete={deleteGoalHandler}  title={itemData.item.value} />}            
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50
  },
});
