import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>Welcome Back</Text>
          <Text style={styles.headerContainerText}>We've Missed You!</Text>
        </View>

        <View style={styles.textInputContainer}>
          <ScrollView>
            <View>
              <TextInput
                placeholder="someone@example.com"
                autoCompleteType="email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#aaaaaa"
                style={styles.inputField}
              />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor="#aaaaaa"
                style={styles.inputField}
              />
            </View>

            <View style={styles.signinContainer}>
              <Text style={styles.signinContainerText}>Sign In</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <View style={styles.signinButtonViewOne}>
                    <View style={styles.signinButtonViewTwo}>
                      <View style={styles.signinButtonViewThree}>
                        <Feather name="arrow-right" size={24} color="white" />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.otherLinkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.otherLinkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signin;
