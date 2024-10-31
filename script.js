  // Pumpkin cursor effect
  document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    if (!cursor.hasChildNodes()) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "30");
        svg.setAttribute("height", "30");
        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#pumpkin-cursor");
        svg.appendChild(use);
        cursor.appendChild(svg);
    }
});

        // Random scare sound
        const scareAudios = [
            'https://freesound.org/data/previews/415/415209_5121236-lq.mp3',
            'https://freesound.org/data/previews/388/388285_7255534-lq.mp3',
            'https://freesound.org/data/previews/463/463303_9657844-lq.mp3'
        ];

        function playRandomScareSound() {
            const audio = new Audio(scareAudios[Math.floor(Math.random() * scareAudios.length)]);
            audio.play();
        }

        // Play scare sound randomly
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 5 seconds
                playRandomScareSound();
            }
        }, 5000);

        // Flickering text effect
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.animation = 'flicker 0.5s infinite';
            });
            card.addEventListener('mouseout', () => {
                card.style.animation = 'none';
            });
        });
        // Add bats
        const batsContainer = document.getElementById('bats-container');
        for (let i = 0; i < 5; i++) {
            const bat = document.createElement('div');
            bat.textContent = '🦇';
            bat.className = 'bat';
            bat.style.animationDelay = `${i * 2}s`;
            batsContainer.appendChild(bat);
        }

        // Pop-up scares
        function showPopupScare() {
            const popupScare = document.querySelector('.popup-scare');
            popupScare.style.display = 'block';
            playRandomScareSound();
            setTimeout(() => {
                popupScare.style.display = 'none';
            }, 1000);
        }

        setInterval(() => {
            if (Math.random() < 0.2) { // 20% chance every 10 seconds
                showPopupScare();
            }
        }, 10000);