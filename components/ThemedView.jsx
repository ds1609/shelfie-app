import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

// const ThemedView = ({style, children, ...props}) => {
//   const colorScheme = useColorScheme();
//   const theme = Colors[colorScheme] ?? Colors.light;

//   return (
//     <View 
//         style={[{backgroundColor: theme.background}, style]}
//         {...props}
//     >
//         {children}
//     </View>
//   )
// }

const ThemedView = ({style, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    // this way React automatically renders the children
    <View 
        style={[{backgroundColor: theme.background}, style]}
        {...props}
    />
  )
}

export default ThemedView;