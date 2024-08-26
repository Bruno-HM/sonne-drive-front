import { Link } from 'expo-router';
import { View, Text, Pressable, Image } from 'react-native';
import { StyleSheet } from "react-native";


export default function RetireKmConf() {
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
        Confirme no veículo, se o seguinte Km está correto
       </Text>
       <Text style={styles.kmNumber}> 14856 <Text style={styles.kmText}>Km</Text> </Text>
     </View>
     <View style={styles.buttons}>
 
       <Link style={styles.changeButton} href={'/Retire'} asChild>
         <Pressable>
           <Text style={styles.changeButtonText}>Alterar</Text>
         </Pressable>
       </Link>
 
       <Link style={styles.confirmButton} href={'/Retire/RetireTravelConf'} asChild >
         <Pressable>
           <Text style={styles.confirmButtonText}>Confirmar</Text>
         </Pressable>
       </Link>
 
     </View>
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 75,
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

  kmText: {
    fontSize: 55,
    color: 'black',
    
  },

  kmNumber: {
    fontSize: 55,
    color: '#0082C6',
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

  },

  changeButton: {
    borderColor: '#0082C6',
    borderWidth: 3,
    borderRadius: 26,
    width: 140,
  },
  
  changeButtonText: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center'
  },

  confirmButton: {
    backgroundColor: '#0082C6',
    borderRadius: 26,
    borderColor: '#0082C6',
    borderWidth: 3,
    width: 140,
  },

  confirmButtonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },

  
})