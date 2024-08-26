import { Link } from 'expo-router';
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";


export default function RetireKmConf() {
  return (
    <View style={styles.container}>

     
     <View style={styles.mainContent}>
       <Text style={styles.Title}>
        Tem certeza que deseja devolver o <Text style={styles.innerTitle}>{`{car} ?`}</Text>
       </Text>
     </View>
     <Image style={styles.carImage} source={require('../../../../assets/images/hb20.png')}></Image>
     <View style={styles.buttons}>
 
       <Link style={styles.cancellButton} href={'/Refund'} asChild>
         <TouchableOpacity>
           <Text style={styles.cancellButtonText}>Cancelar</Text>
         </TouchableOpacity>
       </Link>
 
       <Link style={styles.confirmButton} href={'/Refund/RefundForm'} asChild >
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
    padding: 10,
    gap: 20,
    justifyContent: 'center'
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
    fontWeight: '600',
  },

  carImage: {
    width: 230,
    height: 130,
    alignSelf: 'center',
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

  cancellButton: {
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 26,
    width: 140,
  },
  
  cancellButtonText: {
    color: 'red',
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