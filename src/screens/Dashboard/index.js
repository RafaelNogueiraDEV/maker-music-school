import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const disciplinas = [
  { nome: 'Violão Básico', prof: 'Prof. Fulano', progresso: 50, favorito: true },
  { nome: 'Teclado Básico', prof: 'Prof. Ciclano', progresso: 35, favorito: true },
  { nome: 'Teoria Musical', prof: 'Prof. Fulano', progresso: 85, favorito: false },
  { nome: 'Bateria Básico', prof: 'Prof. Ciclano', progresso: 20, favorito: false },
];

export default function Dashboard({ navigation }) {
  const [busca, setBusca] = useState('');

  const filtradas = disciplinas.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Nome do Aluno(a)</Text>
          <Text style={styles.course}>Nome do Curso</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="person" size={26} color="#121212" />
        </View>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#777" />

        <TextInput
          placeholder="Pesquisar disciplina aqui"
          placeholderTextColor="#777"
          style={styles.searchInput}
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoryActive}>Todas</Text>
        <Text style={styles.category}>Disponíveis</Text>
        <Text style={styles.category}>Em breve</Text>
        <Text style={styles.category}>Encerradas</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Disciplinas</Text>
        <Text style={styles.seeMore}>Ver mais</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      >
        {filtradas.map((item) => (
          <View key={item.nome} style={styles.disciplineCard}>
            <View style={styles.cardTop}>
              <MaterialCommunityIcons
                name="music-note"
                size={26}
                color="#F5B700"
              />

              {item.favorito && (
                <Ionicons name="star" size={20} color="#F5B700" />
              )}
            </View>

            <Text style={styles.percent}>{item.progresso}%</Text>
            <Text style={styles.disciplineName}>{item.nome}</Text>
            <Text style={styles.professor}>{item.prof}</Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${item.progresso}%` },
                ]}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Favoritos</Text>

      <View style={styles.favoriteCard}>
        <View style={styles.favoriteIcon}>
          <MaterialCommunityIcons
            name="guitar-acoustic"
            size={28}
            color="#121212"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.favoriteTitle}>Desafios Iniciante</Text>
          <Text style={styles.favoriteText}>100% concluído</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="#F5B700" />
      </View>

      <Text style={styles.sectionTitle}>Menu</Text>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => navigation.navigate('Agenda')}
      >
        <View style={styles.menuIcon}>
          <Ionicons name="calendar-outline" size={24} color="#121212" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Agenda Semanal</Text>
          <Text style={styles.menuSubtitle}>Aulas, horários e eventos</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#F5B700" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => navigation.navigate('Financeiro')}
      >
        <View style={styles.menuIcon}>
          <Ionicons name="card-outline" size={24} color="#121212" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Financeiro</Text>
          <Text style={styles.menuSubtitle}>Mensalidades e pagamentos</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#F5B700" />
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.menuCard}
  onPress={() => navigation.navigate('Frequencia')}
>
        <View style={styles.menuIcon}>
          <Ionicons name="stats-chart-outline" size={24} color="#121212" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Frequência</Text>
          <Text style={styles.menuSubtitle}>Presenças, faltas e desempenho</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#F5B700" />
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}