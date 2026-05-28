import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  student: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
  },

  course: {
    color: '#F5B700',
    fontSize: 16,
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

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 16,
  },

  performanceCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 26,
    padding: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  performanceTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 12,
  },

  performanceStatus: {
    color: '#F5B700',
    marginTop: 6,
    fontWeight: '800',
  },

  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  infoCard: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  percent: {
    color: '#F5B700',
    fontSize: 32,
    fontWeight: '900',
  },

  label: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 8,
  },

  smallText: {
    color: '#AFAFAF',
    marginTop: 5,
  },

  examCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  examTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },

  examDate: {
    color: '#AFAFAF',
    marginTop: 5,
  },

  approved: {
    backgroundColor: '#173B24',
    color: '#4ADE80',
    fontWeight: '900',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
  },

  primaryButton: {
    backgroundColor: '#F5B700',
    paddingVertical: 17,
    borderRadius: 18,
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#121212',
    textAlign: 'center',
    fontWeight: '900',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#F5B700',
    paddingVertical: 17,
    borderRadius: 18,
    marginBottom: 18,
  },

  secondaryButtonText: {
    color: '#F5B700',
    textAlign: 'center',
    fontWeight: '900',
  },

  backButton: {
    borderWidth: 1,
    borderColor: '#F5B700',
    paddingVertical: 16,
    borderRadius: 18,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  backButtonText: {
    color: '#F5B700',
    textAlign: 'center',
    fontWeight: '900',
  },
});