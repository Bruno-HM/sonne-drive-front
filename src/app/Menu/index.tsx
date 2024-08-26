import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
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
            
            <Link style={styles.retireButton}  href={'/Retire'} asChild>
                <TouchableOpacity>
                    <Text style={styles.retireText}>Retirar</Text>
                </TouchableOpacity>
            </Link>

            <Link  style={styles.returnButton}  href={'/Refund'} asChild>
                <TouchableOpacity>
                    <Text style={styles.returnText}>Devolver</Text>
                </TouchableOpacity>
            </Link>

            <Link style={styles.historyButton} href={'/History'} asChild>
                <TouchableOpacity >
                    <Text style={styles.historyText}>Histórico</Text>
                </TouchableOpacity>
            </Link>


        </View>


        
    </View>
  )
}