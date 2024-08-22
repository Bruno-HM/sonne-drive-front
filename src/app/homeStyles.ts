import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingTop: 26,
      paddingBottom: 26,
    },
  
    logo: {
      resizeMode: 'center',
      height: 200,
      marginLeft: 20,
    },
  
    loginContainer: {
      alignItems: 'center',
      gap: 18,
      paddingRight: 16,
      paddingLeft: 16,
      paddingBottom: 60,
    },
  
    userInput: {
      
      paddingLeft: 20,
      paddingRight: 10,
      minWidth: '100%',
      fontSize: 16,
      padding: 10,
      borderRadius: 14,
      backgroundColor: '#E8E8E8'
    },
  
    passwordInput: {
      minWidth: '100%',
      paddingLeft: 20,
      paddingRight: 10,
      fontSize: 16,
      padding: 10,
      borderRadius: 14,
      backgroundColor: '#E8E8E8'
    },
  
    lostText: {
      color: '#0082C6',
      fontSize: 20,
    },
  
    loginButton: {
      backgroundColor: '#0082C6',
      paddingLeft: 34,
      paddingRight: 34,
      paddingTop: 14,
      paddingBottom: 14,
      borderRadius: 34,
      cursor: 'pointer'
    },
  
    loginText: {
      fontSize: 30,
      color:'white',
      cursor: 'pointer'
    },
  
    baseTitle: {
      fontSize: 56,
      color: '#0082C6',
      fontWeight: '600',
    },
  
    innerTitle: {
      color: '#FFCC29',
      
      
    },
  
  });
  