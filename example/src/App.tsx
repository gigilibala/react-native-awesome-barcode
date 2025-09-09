import { StyleSheet, View } from 'react-native';
import { Barcode } from 'react-native-awesome-barcode';

export default function App() {
  return (
    <View style={styles.container}>
      <Barcode value={'Hello World!'} />
      <Barcode value={'Hello World!'} lineColor={'blue'} />
      <Barcode value={'123456789012'} format={'upc'} />
      <Barcode value={'Nice!'} displayValue={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
