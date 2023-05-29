import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoriesList from './components/CategoriesList';

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <CategoriesList/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
