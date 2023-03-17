import axios from "axios"
let trips;






export const getTrips = function (setTrips, windowHeight, Animated) {
    return axios.get("http://10.0.2.2:3000/api/trip")
        .then(r => {
            if (typeof r.data === "string") {
                console.log(data)
            } else {
                let colors;
                axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
                    .then(colorsResult => {
                        colors = colorsResult.data.map(e => e.colors)

                        setTrips(r.data.map((e, i) => {
                            const randomGradient = colors[Math.floor(Math.random() * colors.length)]
                            console.log(randomGradient)
                            return {
                                data: e, height: 0.20,
                                randomGradient,
                                height: new Animated.Value(windowHeight * 0.2)
                            }
                        }))
                    })


            }
        })
}











export const isColorDark = function (color) {
    // Convert the color to RGB
    var r = parseInt(color.substring(1, 3), 16);
    var g = parseInt(color.substring(3, 5), 16);
    var b = parseInt(color.substring(5, 7), 16);

    // Calculate the perceived brightness of the color
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Return true if the color is dark, false if it is light
    return brightness < 128;
}