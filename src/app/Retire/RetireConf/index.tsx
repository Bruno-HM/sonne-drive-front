import { View, Text, Pressable, Image, TouchableOpacity} from "react-native";
import { Link } from "expo-router";


export default function RetireConf() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
    
      <Text>      </Text>
      <Text style={styles.retireTitle}>Retirar</Text>

      <Link href={'/Retire'} asChild>
        <Pressable>
          <Text style={styles.retireBackText}>Voltar</Text>
        </Pressable>
      </Link>
    </View>
    <View style={styles.mainContent}>
      <Text style={styles.Title}>
        Quer retirar o <Text style={styles.innerTitle}>{`\n{car}`}</Text> ?
      </Text>
      <Image style={styles.carImage} source={require('../../../../assets/images/hb20.png')}></Image>
    </View>
    <View style={styles.buttons}>

      <Link style={styles.cancellButton} href={'/Retire'} asChild>
        <TouchableOpacity>
          <Text style={styles.cancellButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </Link>

      <Link style={styles.confirmButton} href={'/Retire/RetireKmConf'} asChild >
        <TouchableOpacity>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </Link>

    </View>
   </View>
 );
}

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  carImage: {
    width: '100%',
    height: 200,
    
  },

  Title: {
    fontSize: 48,
    textAlign: 'center',
    minWidth: '100%',
    paddingVertical: 30,
    
  },

  innerTitle: {
    color: '#0082C6',
  },

  mainContent: {
    alignItems: 'center',
    
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
    cursor: 'pointer',
  },

  cancellButton: {
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 26,
    paddingHorizontal: 20,
  },
  
  cancellButtonText: {
    color: 'red',
    fontSize: 24,
  },

  confirmButton: {
    backgroundColor: '#0082C6',
    borderRadius: 26,
    borderColor: '#0082C6',
    borderWidth: 3,
    paddingHorizontal: 20,
  },

  confirmButtonText: {
    fontSize: 24,
    color: 'white'
  },
})