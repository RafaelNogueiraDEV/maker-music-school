import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
  },

  course: {
    color: '#F5B700',
    fontSize: 15,
    marginTop: 4,
    fontWeight: '700',
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#F5B700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: 18,
  },

  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 15,
  },

  categories: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },

  categoryActive: {
    backgroundColor: '#F5B700',
    color: '#121212',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 14,
    fontWeight: '900',
    fontSize: 12,
  },

  category: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 14,
    fontWeight: '700',
    fontSize: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 16,
    marginTop: 6,
  },

  seeMore: {
    color: '#F5B700',
    fontWeight: '900',
  },

  horizontalList: {
    marginBottom: 22,
  },

  disciplineCard: {
    width: 175,
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 18,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  percent: {
    color: '#F5B700',
    fontSize: 30,
    fontWeight: '900',
  },

  disciplineName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 8,
  },

  professor: {
    color: '#AFAFAF',
    marginTop: 5,
    fontSize: 13,
  },

  progressBar: {
    height: 7,
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    marginTop: 16,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#F5B700',
    borderRadius: 10,
  },

  favoriteCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 22,
    padding: 18,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  favoriteIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#F5B700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  favoriteTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  favoriteText: {
    color: '#AFAFAF',
    marginTop: 4,
  },

  menuCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: '#F5B700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },

  menuSubtitle: {
    color: '#AFAFAF',
    marginTop: 4,
  },
});