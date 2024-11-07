import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';

export const FocusHistory = ({history}) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't Focused on anything yet!
  </Text>;
  
  const renderItem = (item) => {
      <Text style={styles.item}> - {item.history} </Text>
    };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>List of History of Focus :</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    paddingLeft: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    paddingLeft: 30,
  }
})