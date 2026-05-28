import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 24,
  },

  title: {
    color: '#F5B700',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 50,
  },

  subtitle: {
    color: '#FFFFFF',
    marginBottom: 30,
    marginTop: 8,
  },

  label: {
    color: '#FFFFFF',
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 16,
  },

  inputBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },

  registerButton: {
    backgroundColor: '#F5B700',
    marginTop: 30,
    paddingVertical: 18,
    borderRadius: 18,
  },

  registerButtonText: {
    textAlign: 'center',
    color: '#121212',
    fontWeight: '900',
  },

  backButton: {
    borderWidth: 1,
    borderColor: '#F5B700',
    marginTop: 15,
    paddingVertical: 18,
    borderRadius: 18,
  },

  backButtonText: {
    textAlign: 'center',
    color: '#F5B700',
    fontWeight: '900',
  },
});