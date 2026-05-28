import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Criar Conta</Text>

        <Text style={styles.subtitle}>
          Cadastre um novo aluno
        </Text>

        <Text style={styles.label}>Nome Completo</Text>

        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={20} color="#777" />
          <TextInput
            placeholder="Digite o nome"
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>E-mail</Text>

        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#777" />
          <TextInput
            placeholder="Digite o e-mail"
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Curso</Text>

        <View style={styles.inputBox}>
          <Ionicons name="musical-notes-outline" size={20} color="#777" />
          <TextInput
            placeholder="Violão, Piano..."
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Senha</Text>

        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#777" />
          <TextInput
            placeholder="********"
            placeholderTextColor="#777"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.registerButtonText}>
            CADASTRAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backButtonText}>
            VOLTAR
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}