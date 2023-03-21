import { View, TextInput, Text, Keyboard } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useState, useEffect } from "react";


export default function Input({ value, setValue, svg, position, name,  }) {
    const isPassword = name === "Password" || name === "Confirm Password"
   
    const [hide, setHide] = useState(isPassword)
    return (
        <View >
            <Text style={{
                position: 'absolute',
                top: 2,
                left: 30,
                padding: 5,
                zIndex: 1,
                backgroundColor: "white",
                fontSize: 18,
                color: "#952e48",
                backgroundColor: "white"
            }}>{name}</Text>

            <TextInput
                keyboardType={isPassword ? "default" : "email-address"}
                // inputMode={"email"}
                secureTextEntry={hide}
                value={value}
                onChangeText={setValue}
                placeholder={''}
                style={{
                    width: 350,
                    height: 70,
                    padding: 10,
                    paddingLeft: 45,
                    marginTop: 20,
                    fontSize: 20,
                    marginBottom: 10,
                    borderWidth: 2,
                    borderColor: "#480048",
                    borderRadius: 30,
                }}
            />
            <Svg style={{
                width: 25, height: 25, position: "absolute",
                top: position,
                left: 15
            }} viewBox="0 0 50 50">
                <Path
                    d={svg}
                    fill="#480048"
                />
            </Svg>

            {hide ?
                <Svg onPress={() => setHide(false)} style={{
                    width: 25, height: 25, position: "absolute",
                    top: position,
                    right: 15
                }} viewBox="0 0 20 20">
                    <Path
                        d={"M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"}
                        fill="#480048"
                    />
                </Svg> : isPassword ?
                    <Svg onPress={() => setHide(true)} style={{
                        width: 25, height: 25, position: "absolute",
                        top: position,
                        right: 15
                    }} viewBox="0 0 20 20">
                        <Path
                            d={"M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}
                            fill="#480048"
                        />
                    </Svg> : null}
        </View>
    )
}
