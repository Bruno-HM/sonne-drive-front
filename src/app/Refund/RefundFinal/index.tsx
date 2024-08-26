import { View, Text, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function RefundFinal() {
 return (

   <View style={styles.container}>
    <View style={styles.image}><ImageBackground style={styles.backImage} source={require('../../../../assets/images/logo.png')}></ImageBackground></View>
    <Text style={styles.title}>{`Devolvido\ncom`} <Text style={styles.innerTitle}>{`\nSucesso`}</Text></Text>
    <Link style={styles.homeButton}  href={'/Menu'} asChild>
        <TouchableOpacity>
            <Text style={styles.homeButtonText}>Início</Text>
        </TouchableOpacity>
    </Link> 
   </View>
  );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 70,
    },
    title: {
        fontSize: 60,
        fontWeight: '600',
        textAlign: 'center',
    },

    innerTitle: {
        color: '#0082C6'
    },
    backImage: {
        width: 850,
        height: 600,
        resizeMode: 'cover',
        opacity: 0.1,
        
    },

    image: {
      position: 'absolute',
      alignSelf: 'center',
      paddingLeft: 100,
    },
  

    homeButton: {
        backgroundColor: '#0082C6',
        borderRadius: 26,
        paddingHorizontal: 60,
        borderColor: '#0082C6',
        borderWidth: 2.

    },

    homeButtonText: {
        fontSize: 30,
        color: 'white',
    }
})