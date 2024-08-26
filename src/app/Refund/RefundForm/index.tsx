import { View, Text, Image, Pressable } from 'react-native';
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
        textAlign: 'center',
      },
    
      retireBackText: {
        color: '#0082C6',
        fontWeight: '600',
      },
    
})