import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Login({ navigation }) {
  const [tipoUsuario, setTipoUsuario] = useState('Aluno');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.logoBox}>
        <View style={styles.logoCircle}>
          <MaterialCommunityIcons name="music-clef-treble" size={42} color="#121212" />
        </View>

        <Text style={styles.logo}>Maker Music</Text>
        <Text style={styles.subtitle}>Entre na sua conta para continuar</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>NOME</Text>
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={20} color="#777" />
          <TextInput
            style={styles.input}
            placeholder="Nome do aluno(a)"
            placeholderTextColor="#777"
          />
        </View>

        <Text style={styles.label}>SENHA</Text>
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#777" />
          <TextInput
            style={styles.input}
            placeholder="******"
            placeholderTextColor="#777"
            secureTextEntry
          />
        </View>

        <Text style={styles.label}>ACESSO</Text>

        <View style={styles.types}>
          {['Aluno', 'Professor', 'Admin'].map((tipo) => (
            <TouchableOpacity
              key={tipo}
              style={[
                styles.typeButton,
                tipoUsuario === tipo && styles.typeButtonActive,
              ]}
              onPress={() => setTipoUsuario(tipo)}
            >
              <Text
                style={[
                  styles.typeText,
                  tipoUsuario === tipo && styles.typeTextActive,
                ]}
              >
                {tipo}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.loginButtonText}>LOGAR</Text>
          <Ionicons name="arrow-forward" size={20} color="#121212" />
        </TouchableOpacity>

        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
  <Text style={styles.registerText}>Cadastre-se</Text>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}