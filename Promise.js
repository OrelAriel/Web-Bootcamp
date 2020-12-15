const delayedColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve ();
        }, delay)
    })
}


delayedColorChange ('red', 3000)
    .then (() => delayedColorChange('orange', 3000))
    .then (() => delayedColorChange('green', 3000))
    .then (() => delayedColorChange('blue', 3000))