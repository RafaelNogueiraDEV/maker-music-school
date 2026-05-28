import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Frequencia({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.student}>Nome do Aluno(a)</Text>
          <Text style={styles.course}>Nome do Curso</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="stats-chart" size={26} color="#121212" />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Desempenho</Text>

      <View style={styles.performanceCard}>
        <MaterialCommunityIcons name="guitar-acoustic" size={34} color="#F5B700" />
        <Text style={styles.performanceTitle}>Violão Básico</Text>
        <Text style={styles.performanceStatus}>Em andamento</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.infoCard}>
          <Text style={styles.percent}>90%</Text>
          <Text style={styles.label}>Presenças</Text>
          <Text style={styles.smallText}>20 aulas</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.percent}>10%</Text>
          <Text style={styles.label}>Faltas</Text>
          <Text style={styles.smallText}>2 ausências</Text>
        </View>
      </View>

      <View style={styles.examCard}>
        <View>
          <Text style={styles.examTitle}>Violão Básico</Text>
          <Text style={styles.examDate}>05/03/26</Text>
        </View>

        <Text style={styles.approved}>Aprovado</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Registrar presença</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Justificar falta</Text>
      </TouchableOpacity>

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