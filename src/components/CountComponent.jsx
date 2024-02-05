import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';


const CounterComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleAddCounter = () => setCounter(counter + 1);
return(
    <View>
        <Pressable onPress={handleAddCounter}>
        <Text style={{fontSize: 20}}>{counter}</Text>
        </Pressable>
    </View>
);
};

export default CounterComponent;