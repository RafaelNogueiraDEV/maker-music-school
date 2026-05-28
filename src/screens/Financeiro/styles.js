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

  filter: {
    color: '#AFAFAF',
    fontWeight: '700',
    marginBottom: 10,
  },

  totalCard: {
    backgroundColor: '#F5B700',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
  },

  totalLabel: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '800',
  },

  totalValue: {
    color: '#121212',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 8,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 16,
  },

  paymentCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  month: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },

  date: {
    color: '#AFAFAF',
    marginTop: 6,
  },

  rightSide: {
    alignItems: 'flex-end',
  },

  price: {
    color: '#F5B700',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },

  status: {
    fontWeight: '900',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  paid: {
    backgroundColor: '#173B24',
    color: '#4ADE80',
  },

  late: {
    backgroundColor: '#3B1717',
    color: '#F87171',
  },

  pending: {
    backgroundColor: '#3B3217',
    color: '#F5B700',
  },

  backButton: {
    borderWidth: 1,
    borderColor: '#F5B700',
    paddingVertical: 16,
    borderRadius: 18,
    marginTop: 10,
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