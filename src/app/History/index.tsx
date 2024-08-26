import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function History() {
 return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Text>      </Text>
        <Text style={styles.historyTitle}>{`Histórico`}</Text>

        <Link href={'/Menu'} asChild>
          <TouchableOpacity>
            <Text style={styles.historyBackText}>Voltar</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.refundBox}>
        <View style={styles.refundBoxTitle}>
          <Text style={styles.refundBoxCar}>{`{car}`}</Text>
          <Text style={styles.refundBoxPlate}>{`{plate}`}</Text>
        </View>
        <View>
          <Text style={styles.refundBoxRentDate}>Alugado: {`{rentDate}`}</Text>
          <Text style={styles.refundBoxRefundDate}>Devolvido: {`{refundDate}`}</Text>
        </View>
      </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 80,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
    
  },

  historyTitle: {
    fontSize: 40,
    fontWeight: '600'
  },

  historyBackText: {
    color: '#0082C6',
    fontWeight: '600'
  },

  refundBox: {
    padding: 20,
    borderWidth: 3,
    borderColor: '#0082C6',
    borderRadius: 42,
    gap: 10,
  },

  refundBoxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  refundBoxCar: {
    color: '#FFCC29',
    fontSize: 26,
    fontWeight: '600'
  },

  refundBoxPlate: {
    color: '#FFCC29',
    fontSize: 26,
    fontWeight: '600'
  },

  refundBoxDates: {
    textAlign: 'center'
  },
  refundBoxRentDate: {
    color: '#0082C6',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },

  refundBoxRefundDate: {
    color: '#0082C6',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600'
  },
})