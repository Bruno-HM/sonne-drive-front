import { View, Text, ScrollView, Pressable, TextInput, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Retire() {
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

      <TextInput style={styles.search} placeholder="Procurar"></TextInput>
      
      
      <View style={styles.carList}>

        <View style={styles.carBox}>
          <View>
            <Image style={styles.carImage} source={require('../../../assets/images/hb20.png')}></Image>
          </View>
          <View>
            <View style={styles.carDesc}>
              <Text style={styles.carName}>{`{carName}`}</Text>
              <Text style={styles.carPlate}>{`{carPlate}`}</Text>
            </View>
            <Text style={styles.carStatus}>{`{carStatus}`}</Text>

            <Link style={styles.retireButton}  href={'/Retire/stepOne'} asChild>
                <Pressable >
                    <Text style={styles.retireButtonText}>Retirar</Text>
                </Pressable>
            </Link>

          </View>
        </View>

        

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

    carList: {
      borderColor: 'green',
      borderWidth: 2,
      marginTop: 40,
    },

    search: {
      padding: 8,
      backgroundColor: '#E8E8E8',
      borderRadius: 26,
      paddingLeft: 20,
      marginTop: 24,
      marginRight: 4,
      marginLeft: 4,
    },

    carBox: {
      flexDirection: 'row',
      padding: 10,
      maxWidth: '100%',
      gap: 10,
      justifyContent: 'center',
      borderColor: '#0082C6',
      borderWidth: 3,
      margin: 5,
      borderRadius: 24,
    },
    carDesc: {
      
      flexDirection: 'row',
      gap: 20,
      maxWidth: '100%',
      
    },

    carName: {
      fontSize: 16,
    },
    carPlate: {
      fontSize: 16,
    },
    carStatus: {
      fontSize: 24,
    },

    carImage: {
      width: 138,
      height: 100,
      
    },

    retireButton: {
      borderColor: '#0082C6',
      borderWidth: 3,
      borderRadius: 26,
      backgroundColor: '#0082C6',
      marginTop: 10,
    },
    retireButtonText: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      
    },
})
