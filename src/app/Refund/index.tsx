import { View, Text, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Refund() {
 return (
  <View style={styles.container}>
    <View style={styles.header}>
    
      <Text>      </Text>
      <Text style={styles.retireTitle}>Devolver</Text>

      <Link href={'/Menu'} asChild>
        <Pressable>
          <Text style={styles.retireBackText}>Voltar</Text>
        </Pressable>
      </Link>
    </View>

    <View style={styles.carBox}>

      <View>
        <Text style={styles.carName}>{`{car}`}</Text>
      </View>

      <Image style={styles.carImage} source={require('../../../assets/images/hb20.png')}></Image>
      <View style={styles.boxTexts}>
        <Text style={styles.plateText}>Placa: <Text>{`{plate}`}</Text></Text>
        <Text style={styles.rentText}>Alugado: <Text>{`{rentDate}`}</Text></Text>
        <Link style={styles.refundButton} href={'/Refund/RefundConf'} asChild>
          <Pressable>
            <Text style={styles.refundButtonText}>Devolver</Text>
          </Pressable>
        </Link>
      </View>

    </View>
  </View>
 );
}


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
    fontWeight: '600',
  },

  retireBackText: {
    color: '#0082C6',
    fontWeight: '600',
  },

  carImage: {
    width: 180,
    height: 90,
  },

  carBox: {
    borderColor: '#0082C6',
    borderWidth: 5,
    borderRadius: 26,
    alignItems: 'center',
    gap: 30,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  carName: {
    fontSize: 40,
    color: '#0082C6'
  },

  plateText: {
   color: '#0082C6', 
   fontSize: 20,
  },

  rentText: {
    color: '#0082C6',
    fontSize: 20,
  },

  refundButton: {
    borderColor: '#0082C6',
    borderWidth: 2,
    borderRadius: 26,
    alignItems: 'center',
    backgroundColor: '#0082C6',
    marginTop: 10,
    
  },

  refundButtonText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    paddingHorizontal: 30,
    
  },

  boxTexts: {
    gap: 5,
    
  },
    
})