        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                navLinks.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Floating Hearts Animation
        const floatingHearts = document.getElementById('floatingHearts');

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random position
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            
            // Random size
            const size = Math.random() * 15 + 5;
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            
            // Random animation duration
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            
            floatingHearts.appendChild(heart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        // Create hearts periodically
        setInterval(createHeart, 300);

        // Confession Modal
        const confessBtn = document.getElementById('confessBtn');
        const confessionModal = document.getElementById('confessionModal');
        const modalClose = document.getElementById('modalClose');
        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');

        confessBtn.addEventListener('click', () => {
            confessionModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        modalClose.addEventListener('click', () => {
            confessionModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        yesBtn.addEventListener('click', () => {
            emailjs.send("service_bz4eqmi", "template_hyviwhl", {
                to_email: "garethmuammar@gmail.com",
                from_name: "Secret Admirer ❤️",
                message: "Dia menjawab YES ❤️"
            }).then(() => {
                alert("Notifikasi terkirim ke email gareth yeayy! ❤️");
            }).catch((error) => {
                console.error('Gagal mengirim email:', error);
                alert("Gagal mengirim email 😢\n" + (error.text || error));
            });
            alert("You've made me the happiest person in the world! ❤️");
            confessionModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        noBtn.addEventListener('click', () => {
            confessionModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Move the no button when hovered (for fun)
            noBtn.addEventListener('mouseover', () => {
                noBtn.style.position = 'relative';
                noBtn.style.left = Math.random() * 100 - 50 + 'px';
                noBtn.style.top = Math.random() * 100 - 50 + 'px';
            });
        });

      
        // Animate timeline items on scroll
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkScroll() {
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < window.innerHeight - 100) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }
            });
        }

        // Initialize timeline items
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transition = 'opacity 0.5s, transform 0.5s';
            
            if (index % 2 === 0) {
                item.style.transform = 'translateX(-20px)';
            } else {
                item.style.transform = 'translateX(20px)';
            }
            
            // Add slight delay for each item
            item.style.transitionDelay = `${index * 0.1}s`;
        });

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        document.addEventListener('DOMContentLoaded', function () {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.carousel-slide');
            const nextBtn = document.querySelector('.next');
            const prevBtn = document.querySelector('.prev');
        
            if (!nextBtn || !prevBtn) {
                console.error("Tombol next/prev tidak ditemukan!");
                return;
            }
        
            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            }
        
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
        
            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }
        
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
        
            setInterval(nextSlide, 10000);
        });

        document.addEventListener("DOMContentLoaded", function () {
            const audio = document.getElementById("bg-music");
        
            // Coba auto-play tanpa suara (bisa dilepas jika user pernah interaksi)
            audio.volume = 0.5; // Boleh disesuaikan
            audio.play().catch(() => {
              // Kalau gagal autoplay, minta interaksi user
              const playBtn = document.createElement("button");
              playBtn.innerHTML = "🎵 PLAY MUSIKNYA DULU";
playBtn.style.position = "fixed";
playBtn.style.bottom = "20px";
playBtn.style.right = "20px";
playBtn.style.padding = "16px 32px";
playBtn.style.fontSize = "18px";
playBtn.style.fontWeight = "bold";
playBtn.style.zIndex = "9999";
playBtn.style.background = "linear-gradient(135deg, #FF9AA2, #FFB6B9)";
playBtn.style.color = "white";
playBtn.style.border = "none";
playBtn.style.borderRadius = "50px";
playBtn.style.cursor = "pointer";
playBtn.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
playBtn.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
playBtn.style.animation = "pulse 2s infinite";

document.body.appendChild(playBtn);

// Animasi tekan
playBtn.addEventListener("mousedown", () => {
    playBtn.style.transform = "scale(0.95)";
});
playBtn.addEventListener("mouseup", () => {
    playBtn.style.transform = "scale(1)";
});
playBtn.addEventListener("mouseleave", () => {
    playBtn.style.transform = "scale(1)";
});

// Klik untuk play musik
playBtn.addEventListener("click", () => {
    audio.play();
    playBtn.remove(); // Hapus tombol setelah dipakai
});
              });
            });
        