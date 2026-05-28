import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
  },

  logoBox: {
    marginTop: 58,
    marginBottom: 34,
  },

  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#F5B700',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  logo: {
    color: '#F5B700',
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },

  form: {
    width: '100%',
  },

  label: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 8,
    marginTop: 15,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 17,
    paddingHorizontal: 10,
    fontSize: 15,
  },

  types: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },

  typeButton: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingVertical: 13,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  typeButtonActive: {
    backgroundColor: '#F5B700',
    borderColor: '#F5B700',
  },

  typeText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
  },

  typeTextActive: {
    color: '#121212',
  },

  loginButton: {
    backgroundColor: '#F5B700',
    marginTop: 30,
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  loginButtonText: {
    color: '#121212',
    fontWeight: '900',
    fontSize: 16,
  },

  forgotText: {
    color: '#BDBDBD',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },

  registerText: {
    color: '#F5B700',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '900',
    fontSize: 16,
  },
});