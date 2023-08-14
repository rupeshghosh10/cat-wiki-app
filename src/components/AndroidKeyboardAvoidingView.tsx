import { Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';

interface AndroidKeyboardAvoidingViewProps {
  children: React.JSX.Element[];
}

const AndroidKeyboardAvoidingView = ({ children }: AndroidKeyboardAvoidingViewProps) => {
  if (Platform.OS === 'android') {
    return (
      <KeyboardAvoidingView
        behavior="height"
        enabled={false}
        style={styles.container}
        contentContainerStyle={styles.container}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }

  return children;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AndroidKeyboardAvoidingView;
