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

  daysScroll: {
    marginBottom: 28,
  },

  dayActive: {
    backgroundColor: '#F5B700',
    color: '#121212',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontWeight: '900',
    marginRight: 10,
  },

  day: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontWeight: '800',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  seeMore: {
    color: '#F5B700',
    fontWeight: '900',
  },

  classCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  hour: {
    color: '#F5B700',
    fontSize: 16,
    fontWeight: '900',
  },

  status: {
    backgroundColor: '#F5B700',
    color: '#121212',
    fontWeight: '900',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  classTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },

  classTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    flex: 1,
  },

  professor: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 4,
    opacity: 0.9,
  },

  description: {
    color: '#AFAFAF',
    marginTop: 10,
    lineHeight: 20,
  },

  eventCard: {
    backgroundColor: '#F5B700',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
    elevation: 5,
  },

  eventIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  eventTitle: {
    color: '#121212',
    fontSize: 22,
    fontWeight: '900',
  },

  eventText: {
    color: '#121212',
    marginTop: 8,
    fontSize: 15,
    lineHeight: 21,
  },

  eventButton: {
    backgroundColor: '#121212',
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  eventButtonText: {
    color: '#F5B700',
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