import { useUser } from '../../hooks/useUser';

import { StyleSheet, Text } from 'react-native';

// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';

const Profile = () => {
  const { logout, user } = useUser();
  // console.log("Profile",user.email);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading} title={true}>{user.email}</ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books ...</ThemedText>
      <Spacer />
      
      <ThemedButton onPress={logout}>
        <Text style={{ color:"#f2f2f2" }}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }, 
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  }
})