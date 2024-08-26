import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
    },

    innerWelcomeText: {
        color: '#FFCC29'
    },

    welcomeText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '600',
    },
    logo: {
        margin: 20,
        marginLeft: 60,
    },

    buttons: {
        marginRight: 20,
        marginLeft: 20,
        gap: 34,
        marginBottom: 60,
        
        
    },
    retireButton: {
        backgroundColor: '#0082C6',
        padding: 20,
        borderRadius: 48,
        minWidth: '100%',
        
    },

    retireText: {
        alignSelf: 'center',
        fontSize: 32,
        color: 'white',
    },

    returnButton: {
        backgroundColor: '#0082C6',
        padding: 20,
        borderRadius: 48,
        minWidth: '100%',
    },

    returnText: {
        alignSelf: 'center',
        fontSize: 32,
        color: 'white',
    },

    historyButton: {
        backgroundColor: '#0082C6',
        padding: 20,
        borderRadius: 48,
        minWidth: '100%',
    },

    historyText: {
        alignSelf: 'center',
        fontSize: 32,
        color: 'white',
    },

    Title: {
        borderColor: 'red',
        borderWidth: 2,
        color: 'black',
    },
})