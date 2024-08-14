import { Text, View, Pressable, Image, TextInput, Button  } from "react-native";
import { Link } from "expo-router"
import { useFonts} from "expo-font"

import { styles } from './homeStyles';
import '../styles/global.css';




export default function Home() {
  return (
    <View style={styles.container} >
      <Image style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
      
      <Text style={styles.baseTitle}>{`Sonne\n`} <Text style={styles.innerTitle} >{`Drive`}</Text> </Text>
      
      <View style={styles.loginContainer}>
        <TextInput style={styles.userInput} placeholder="Usuário"></TextInput>
        <TextInput style={styles.passwordInput} placeholder="Senha"></TextInput>
        <Pressable>
          <Text style={styles.lostText}>
            Esqueceu sua senha?
          </Text>
        </Pressable>
        
      </View>
      <Link href={'/menu'} asChild>
        <Pressable style={styles.loginButton}>
            <Text  style={styles.loginText}>Log in</Text>
        </Pressable>
      </Link>
      
    </View>
  );
}


