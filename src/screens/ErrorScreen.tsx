import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../themes';

interface ErrorScreenProps {
  onRetry: () => void;
}

const ErrorScreen = ({ onRetry }: ErrorScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/Error.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.error}>Ooops...</Text>
        <Text style={styles.message}>Something went wrong.</Text>
        <Text style={styles.message}>Please try again</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Try Again" onPress={onRetry} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  error: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.error,
  },
  message: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonContainer: {
    flex: 3,
  },
});

export default ErrorScreen;
