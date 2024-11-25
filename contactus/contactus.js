
function initMap(lat, lng) {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = `<iframe
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed"
        allowfullscreen>
    </iframe>`;
}

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById("location").innerText = 
                `Latitude: ${latitude}, Longitude: ${longitude}`;
            initMap(latitude, longitude);
        },
        (error) => {
            document.getElementById("location").innerText = 
                "Unable to fetch location: " + error.message;
        }
    );
} else {
    document.getElementById("location").innerText = 
        "Geolocation is not supported by your browser.";
}