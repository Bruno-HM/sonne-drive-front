import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function RetireTravelConf() {
 return (
  <View style={styles.container}>
    <View style={styles.header}>
      
      <Text>      </Text>
      <Text style={styles.retireTitle}>Retirar</Text>

      <Link href={'/Retire/RetireKmConf'} asChild>
        <Pressable>
          <Text style={styles.retireBackText}>Voltar</Text>
        </Pressable>
      </Link>
    </View>

    <View style={styles.mainContent}>
       <Text style={styles.Title}>
        Para onde será a viagem?
       </Text>
       <TextInput  placeholder='Escolha a cidade' style={styles.cityInput}></TextInput>

    </View>

    <View style={styles.button}>
      <Link style={styles.confirmButton} href={'/Retire/RetireFinal'} asChild >
        <TouchableOpacity>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </Link>
    </View>
    
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    padding: 10,
    gap: 70,
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

  Title: {
    fontSize: 38,
    textAlign: 'center',
    minWidth: '100%',
    paddingVertical: 30,
    
  },
  mainContent: {
    gap: 60,
  },
  

  cityInput: {
    backgroundColor: '#E8E8E8',
    padding: 8,
  },

  button: {
    paddingTop: 30,
  },
  confirmButton: {
    backgroundColor: '#0082C6',
    borderRadius: 26,
    borderColor: '#0082C6',
    borderWidth: 3,
    alignSelf: 'center',
  },

  confirmButtonText: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },


})