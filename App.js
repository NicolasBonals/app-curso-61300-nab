import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 20, paddingLeft: 30}}>
      <Text>Hola Coder!</Text>
      <Text>Empecemos con esto!</Text>
      <Text>Otro texto para probar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
