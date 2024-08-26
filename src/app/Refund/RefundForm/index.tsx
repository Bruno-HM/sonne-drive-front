import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function RefundForm() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      
      <Text>      </Text>
      <Text style={styles.retireTitle}>{`Formulário\nde\nDevolução`}</Text>

      <Link href={'/Menu'} asChild>
        <Pressable>
          <Text style={styles.retireBackText}>Voltar</Text>
        </Pressable>
      </Link>
    </View>
    <Text style={styles.title}>Adicione informações se necessário, (riscos,quebrados)</Text>
    <TextInput multiline  placeholder='Observações' style={styles.cityInput}></TextInput>
    <Link style={styles.continueButton} href={'/Refund/RefundFinal'} asChild>
        <TouchableOpacity>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </Link>
   </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 30,
      },
    
      header: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        
      },
    
      retireTitle: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
      },
    
      retireBackText: {
        color: '#0082C6',
        fontWeight: '600',
      },

      cityInput: {
        backgroundColor: '#E8E8E8',
        padding: 8,
        flex: 1,
        maxHeight: 250,
        borderRadius: 26,
      },
      
      title: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '400'

      },
      continueButton: {
        borderColor: '#0082C6',
        borderWidth: 2,
        alignSelf: 'center',
        paddingHorizontal: 20,
        borderRadius: 26,
        backgroundColor: '#0082C6'
      },
      continueButtonText: {
        fontSize: 28,
        color: 'white'
      },
    
})