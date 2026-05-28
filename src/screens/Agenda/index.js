import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Agenda({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.student}>Nome do Aluno(a)</Text>
          <Text style={styles.course}>Nome do Curso</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="calendar" size={26} color="#121212" />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.daysScroll}
      >
        <Text style={styles.dayActive}>SEG</Text>
        <Text style={styles.day}>TER</Text>
        <Text style={styles.day}>QUA</Text>
        <Text style={styles.day}>QUI</Text>
        <Text style={styles.day}>SEX</Text>
        <Text style={styles.day}>SAB</Text>
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Agendamento Semanal</Text>
        <Text style={styles.seeMore}>Veja mais</Text>
      </View>

      <View style={styles.classCard}>
        <View style={styles.classHeader}>
          <Text style={styles.hour}>13:00 hrs</Text>
          <Text style={styles.status}>Hoje</Text>
        </View>

        <View style={styles.classTitleRow}>
          <MaterialCommunityIcons name="guitar-acoustic" size={24} color="#F5B700" />
          <Text style={styles.classTitle}>Aula - Violão Básico</Text>
        </View>

        <Text style={styles.professor}>Prof. Fulano</Text>

        <Text style={styles.description}>
          Introdução aos acordes, ritmos e técnicas básicas.
        </Text>
      </View>

      <View style={styles.classCard}>
        <View style={styles.classHeader}>
          <Text style={styles.hour}>15:00 hrs</Text>
          <Text style={styles.status}>Hoje</Text>
        </View>

        <View style={styles.classTitleRow}>
          <MaterialCommunityIcons name="music-clef-treble" size={24} color="#F5B700" />
          <Text style={styles.classTitle}>Aula - Teoria Musical</Text>
        </View>

        <Text style={styles.professor}>Prof. Fulano</Text>

        <Text style={styles.description}>
          Fundamentos da música, ritmo, melodia e harmonia.
        </Text>
      </View>

      <View style={styles.classCard}>
        <View style={styles.classHeader}>
          <Text style={styles.hour}>16:00 hrs</Text>
          <Text style={styles.status}>Semana</Text>
        </View>

        <View style={styles.classTitleRow}>
          <MaterialCommunityIcons name="piano" size={24} color="#F5B700" />
          <Text style={styles.classTitle}>Prática - Teoria Musical</Text>
        </View>

        <Text style={styles.professor}>Prof. Ciclano</Text>

        <Text style={styles.description}>
          Exercícios práticos de leitura musical e percepção.
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Eventos Mensais</Text>
        <Text style={styles.seeMore}>Veja mais</Text>
      </View>

      <View style={styles.eventCard}>
        <View style={styles.eventIcon}>
          <MaterialCommunityIcons name="earth" size={34} color="#F5B700" />
        </View>

        <Text style={styles.eventTitle}>Projeto Mundo: Música Asiática</Text>

        <Text style={styles.eventText}>
          Entre no mundo musical asiático conosco
        </Text>

        <TouchableOpacity style={styles.eventButton}>
          <Text style={styles.eventButtonText}>Saiba mais</Text>
          <Ionicons name="arrow-forward" size={18} color="#F5B700" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Ionicons name="arrow-back" size={18} color="#F5B700" />
        <Text style={styles.backButtonText}>VOLTAR AO MENU</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}