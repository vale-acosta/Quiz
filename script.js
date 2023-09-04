const button = document.getElementById('submit');
URL= "https://dog.ceo/api/breeds/image/random";

button.addEventListener('click', (event) => {
    const radioGroups = [
        document.getElementsByName("activity"),
        document.getElementsByName("relations"),
        document.getElementsByName("movies"),
        document.getElementsByName("word")
    ];

    if (!valid(radioGroups)) {
        alert('Selecciona una opción en cada pregunta');
    } else {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                displayImage(data.message);
                button.disabled = true;
            })
            .catch((error) => {
                console.error('Error:' + error);
            });
    }
});

function valid(radioGroups) {
    return radioGroups.every((radioGroup) => {
        return Array.from(radioGroup).some((radio) => radio.checked);
    });
}

function displayImage(image_url) {
    document.getElementById("image").src = image_url;
}
