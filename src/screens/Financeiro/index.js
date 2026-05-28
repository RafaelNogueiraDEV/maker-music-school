import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Financeiro({ navigation }) {
  const pagamentos = [
    { mes: 'Jan/2026', valor: 'R$ 89,90', data: '05/01/26', status: 'Paga' },
    { mes: 'Fev/2026', valor: 'R$ 89,90', data: '05/02/26', status: 'Atrasada' },
    { mes: 'Mar/2026', valor: 'R$ 89,90', data: '05/03/26', status: 'Pendente' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.student}>Nome do Aluno(a)</Text>
          <Text style={styles.course}>Nome do Curso</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="card" size={26} color="#121212" />
        </View>
      </View>

      <Text style={styles.filter}>Filtrar por</Text>

      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Finanças Gerais</Text>
        <Text style={styles.totalValue}>R$ 179,80 a pagar!</Text>
      </View>

      <Text style={styles.sectionTitle}>Mensalidades</Text>

      {pagamentos.map((item) => (
        <View key={item.mes} style={styles.paymentCard}>
          <View>
            <Text style={styles.month}>{item.mes}</Text>
            <Text style={styles.date}>Data: {item.data}</Text>
          </View>

          <View style={styles.rightSide}>
            <Text style={styles.price}>{item.valor}</Text>
            <Text
              style={[
                styles.status,
                item.status === 'Paga' && styles.paid,
                item.status === 'Atrasada' && styles.late,
                item.status === 'Pendente' && styles.pending,
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
      ))}

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