import { useColorScheme, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedText = ({style, title = false, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;

  return (
    // this way React automatically renders the children
    <Text 
        style={[{color:textColor}, style]}
        {...props}
    />
  )
}

export default ThemedText;

const styles = StyleSheet.create({})