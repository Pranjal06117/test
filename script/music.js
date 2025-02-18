document.addEventListener("DOMContentLoaded", function () {
    // Get the current song from local storage or set a default
    let currentSong = localStorage.getItem("currentSong") || "song1.mp3";
    
    // Create the audio element
    let audio = new Audio(currentSong);
    audio.id = "bg-music";
    audio.loop = true; // Loop the song
    document.body.appendChild(audio);

    // Try autoplaying the song
    audio.play().catch(error => console.log("Autoplay blocked:", error));

    // Ensure the song starts on user interaction if autoplay was blocked
    document.addEventListener("click", () => {
        audio.play().catch(error => console.log("Autoplay blocked again:", error));
    });

    // Function to update song when changing pages
    function updateSong(newSong) {
        localStorage.setItem("currentSong", newSong);
        audio.src = newSong;
        audio.play();
    }

    // Check if there's a new song set for this page
    let pageSong = document.body.getAttribute("data-song");
    if (pageSong) {
        updateSong(pageSong);
    }
});
