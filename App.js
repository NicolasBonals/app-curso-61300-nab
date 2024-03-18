import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from './src/store';


export default function App() {
 
  const [fontsLoaded] = useFonts(fonts);
  if(!fontsLoaded){
    return null
  }

  //provider empaqueta todo
  return (
    <Provider store={store}> 
      <TabNavigator />
    </Provider>
  );
}



