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
        // Countdown timer
        function updateCountdown() {
            const now = new Date();
            const halloween = new Date(now.getFullYear(), 9, 31); // Month is 0-indexed
            if (now > halloween) {
                halloween.setFullYear(halloween.getFullYear() + 1);
            }
            const timeLeft = halloween - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until Halloween`;
        }

        setInterval(updateCountdown, 1000);

        // Interactive card elements
        cards.forEach(card => {
            const hiddenContent = card.querySelector('.hidden-content');
            card.addEventListener('click', () => {
                hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'block' : 'none';
                playRandomScareSound();
            });
        });

        // Gallery modal
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-content');
        const modalClose = document.getElementById('modal-close');
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImg.src = item.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            });
        });

        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Pumpkin carving animation
        const carveButton = document.getElementById('carve-button');
        const pumpkin = document.getElementById('pumpkin');
        const leftEye = document.getElementById('left-eye');
        const rightEye = document.getElementById('right-eye');
        const mouth = document.getElementById('mouth');

        carveButton.addEventListener('click', () => {
            leftEye.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            rightEye.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            mouth.style.clipPath = 'polygon(20% 0%, 0% 100%, 100% 100%, 80% 0%)';
            
            setTimeout(() => {
                pumpkin.style.boxShadow = '0 0 20px 10px rgba(255, 102, 0, 0.5)';
            }, 500);
        });
