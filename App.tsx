import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [showHello, setShowHello] = useState(false);
  const [showWorld, setShowWorld] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text testID="welcome">Welcome!</Text>
          <TouchableOpacity testID="hello_button" onPress={() => setShowHello(!showHello)}>
            <Text>Show Hello</Text>
          </TouchableOpacity>
          {showHello ? <Text>Hello!!!</Text> : null}
          <TouchableOpacity testID="world_button" onPress={() => setShowWorld(!showWorld)}>
            <Text>Show World</Text>
          </TouchableOpacity>
          {showWorld ? <Text>World!!!</Text> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
