import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';

// components
// import {ThemedView, Spacer, ThemedText}  from "../../components";
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

import { Colors } from '../../constants/Colors';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { register } = useUser();

    const handleSubmit = async () => {
        // console.log("register form submitted", email, password);
        setError(null);
        try {
            await register(email, password);
        } catch (error) {
            console.log("Error:", error);
            setError(error.message);
        }
    }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer/>
            
            <ThemedText title={true} style={styles.title}>Register for an account</ThemedText>

            <ThemedTextInput 
            style={{ width: "80%", marginBottom: 20 }}
            placeholder='Email' 
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            />

            <ThemedTextInput 
            style={{ width: "80%", marginBottom: 20 }}
            placeholder='Password' 
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            />

            <ThemedButton onPress={handleSubmit}>
                <Text style={{color:"#f2f2f2"}}>Register</Text>
            </ThemedButton>

            <Spacer />
            {error && <Text style={styles.error}>{error}</Text>}

            <Spacer height={10} />

            <Link href={"/login"} style={{textAlign:"center", fontSize:16, letterSpacing:0.8}}>
                <ThemedText>Login</ThemedText>
            </Link>

        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        textAlign:"center",
        fontSize: 18,
        marginBottom: 30
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: "#f5c1c8",
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }
})