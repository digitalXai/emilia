document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noBtn');
    const yesButton = document.getElementById('yesBtn');
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('backgroundMusic');

    let noButtonScale = 1;
    let yesBtnScale = 1;
    let isMusicPlaying = false;

    const noMessages = [
        "Are you sure?",
        "C'mon, I love you!",
        "You know you can forgive me!",
        "Don't break my heart :(",
        "Please reconsider!",
        "Give me another chance!",
        "Think about it again!",
        "You're breaking my heart!"
    ];

    function getRandomMessage() {
        return noMessages[Math.floor(Math.random() * noMessages.length)];
    }

    function initAudio() {
        audio.load();
        musicBtn.addEventListener('click', function() {
            if (isMusicPlaying) {
                audio.pause();
                musicBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audio.play().then(() => {
                    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                }).catch((error) => {
                    console.log("Playback failed:", error);
                });
            }
            isMusicPlaying = !isMusicPlaying;
        });
    }

    noButton.addEventListener('click', function(e) {
        e.preventDefault();
        noButtonScale *= 0.8;
        yesBtnScale *= 1.15;

        noButton.style.transform = `scale(${noButtonScale})`;
        yesButton.style.transform = `scale(${yesBtnScale})`;

        noButton.textContent = getRandomMessage();

        if (noButtonScale < 0.1) {
            noButton.style.display = 'none';
        }

        if (yesBtnScale > 2) {
            yesButton.style.width = '80%';
            yesButton.style.height = '200px';
        }
    });

    yesButton.addEventListener('click', function() {
        window.location.href = '/success';
    });

    // Initialize audio handling
    initAudio();
});