import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { useState } from 'react';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      { !currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history} />
        </>
      ) : 
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {setHistory([...history, subject])}}
          clearSubject={() => setCurrentSubject(null)}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.greenShade
  },
});
