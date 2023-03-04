import { View } from "react-native";
import Input from "../../components/Signin/Input"

export default function Inputs({ email, setEmail, password, setPassword, checkPass, setCheckPass, focus, setFocus }) {
    return (
        <View style={{ position: 'relative', display: "flex", alignItems: "center", marginTop: focus ? -100 : 0 }}>
            <Input
                name={"Email"}
                position={"45%"}
                value={email}
                setValue={setEmail}
                svg={"M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"}
            />
            <View style={{ marginTop: 10 }}>
                <Input
                    name={"Password"}
                    position={"42%"}
                    value={password}
                    setValue={setPassword}
                    svg={"M25 3C18.363281 3 13 8.363281 13 15V20H9C7.300781 20 6 21.300781 6 23V47C6 48.699219 7.300781 50 9 50H41C42.699219 50 44 48.699219 44 47V23C44 21.300781 42.699219 20 41 20H37V15C37 8.363281 31.636719 3 25 3ZM25 5C30.566406 5 35 9.433594 35 15V20H15V15C15 9.433594 19.433594 5 25 5ZM25 30C26.699219 30 28 31.300781 28 33C28 33.898438 27.601563 34.6875 27 35.1875V38C27 39.101563 26.101563 40 25 40C23.898438 40 23 39.101563 23 38V35.1875C22.398438 34.6875 22 33.898438 22 33C22 31.300781 23.300781 30 25 30Z"}
                />
                <Input
                    setFocus={setFocus}
                    name={"Confirm Password"}
                    position={"42%"}
                    value={checkPass}
                    setValue={setCheckPass}
                    svg={"M25 3C18.363281 3 13 8.363281 13 15V20H9C7.300781 20 6 21.300781 6 23V47C6 48.699219 7.300781 50 9 50H41C42.699219 50 44 48.699219 44 47V23C44 21.300781 42.699219 20 41 20H37V15C37 8.363281 31.636719 3 25 3ZM25 5C30.566406 5 35 9.433594 35 15V20H15V15C15 9.433594 19.433594 5 25 5ZM25 30C26.699219 30 28 31.300781 28 33C28 33.898438 27.601563 34.6875 27 35.1875V38C27 39.101563 26.101563 40 25 40C23.898438 40 23 39.101563 23 38V35.1875C22.398438 34.6875 22 33.898438 22 33C22 31.300781 23.300781 30 25 30Z"}
                />
            </View>


        </View>
    )
}
