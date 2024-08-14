import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { styles } from './menuStyles'

export default function Menu() {
  return (
    <View style={styles.container}>
        
        <Image style={styles.logo} source={require('../../../assets/images/mini logo car.png')}></Image>

        <View>
            <Text style={styles.welcomeText}>{`Bem-vindo\n`} <Text style={styles.innerWelcomeText}>{`{user} `}</Text></Text>
        </View>


        <View style={styles.buttons}>
            
            <Link style={styles.retireButton}  href={'/retire'} asChild>
                <Pressable >
                    <Text style={styles.retireText}>Retirar</Text>
                </Pressable>
            </Link>

            <Link  style={styles.returnButton}  href={'/refund'} asChild>
                <Pressable>
                    <Text style={styles.returnText}>Devolver</Text>
                </Pressable>
            </Link>

            <Link style={styles.historyButton} href={'/history'} asChild>
                <Pressable >
                    <Text style={styles.historyText}>Histórico</Text>
                </Pressable>
            </Link>


        </View>


        
    </View>
  )
}