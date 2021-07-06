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

class Signup extends React.Component {
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
          <Text style={styles.headerContainerText}>Sign Up and</Text>
          <Text style={styles.headerContainerText}>Start Reading</Text>
        </View>

        <View style={styles.textInputContainer}>
          <ScrollView>
            <View>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#aaaaaa"
                style={styles.inputField}
              />
            </View>
            <View>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#aaaaaa"
                style={styles.inputField}
              />
            </View>
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
              <Text style={styles.signinContainerText}>Sign Up</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("tabs")}>
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
          <TouchableOpacity onPress={() => navigation.navigate("signin")}>
            <Text style={styles.otherLinkText}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;
