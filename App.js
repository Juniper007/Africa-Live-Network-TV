import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
//import CurvedHeaderPath from './components/CurvedHeaderPath'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        We're working on Africa Live Network! - Coming Soon!
      </Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          alert('You tapped the button!')
        }}
        title="Press Me"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  text: {
    fontSize: 20,
    color: 'orange',
    borderColor: 'yellow',
    borderWidth: 2,
    padding: 50,
  },
  Button: {
    backgroundColor: 'orange',
    textColor: 'blue',
  },
})
