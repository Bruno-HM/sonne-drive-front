import { View, Text, Pressable} from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function stepOne() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      
      <Text>      </Text>
      <Text style={styles.retireTitle}>Retirar</Text>

      <Link href={'/menu'} asChild>
        <Pressable>
          <Text style={styles.retireBackText}>Voltar</Text>
        </Pressable>
      </Link>

    </View>

   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    
  },

  retireTitle: {
    fontSize: 40,

  },

  retireBackText: {
    color: '#0082C6'
  },

})