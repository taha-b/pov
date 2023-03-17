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



export const handleView = (i, desc, Animated, windowHeight, isExpanded, trips, setDesc, setIsExpanded) => {
    if (isExpanded !== i) {
        trips.forEach((element, index) => {
            if (index < i) {
                Animated.timing(element.height, {
                    toValue: windowHeight * 0.09,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }
            else if (index === i) {
                Animated.timing(element.height, {
                    toValue: windowHeight * 0.6,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }
            else {
                Animated.timing(element.height, {
                    toValue: windowHeight * 0.2,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }
        });
        setDesc("")

        setTimeout(() => {
            setDesc(desc)
        }, 500);
        setIsExpanded(i);
    }
    else {
        trips.forEach((element, index) => {
            if (index <= isExpanded) {
                Animated.timing(element.height, {
                    toValue: windowHeight * 0.2,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }
        });
        setDesc("")

        setIsExpanded(-1)
    }
};



export const handleSideBar = function (Animated, showSideBar, windowWidth, windowHeight) {
    if (!showSideBar.status) {
        Animated.timing(showSideBar.marginLeft, {
            toValue: windowWidth * 0.7,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(showSideBar.containerHeight, {
            toValue: 500,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(showSideBar.marginTop, {
            toValue: windowWidth * 0.4,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(showSideBar.borderRadius, {
            toValue: 20,
            duration: 500,
            useNativeDriver: false,
        }).start();
        showSideBar.status = true
    } else {
        Animated.timing(showSideBar.marginLeft, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(showSideBar.containerHeight, {
            toValue: windowHeight * 0.87,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(showSideBar.marginTop, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(showSideBar.borderRadius, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();

        showSideBar.status = false
    }
}