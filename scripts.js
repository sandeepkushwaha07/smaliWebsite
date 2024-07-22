window.addEventListener('load', () => {
        // Hide preloader and show content
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';

        // Animate elements
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.5}s`;
        });

        // Number counting function
        const counters = [
            { element: document.getElementById('day-count'), value: 1, duration: 1000 },
            { element: document.getElementById('week-count'), value: 64, duration: 2000 },
            { element: document.getElementById('two-weeks-count'), value: 8192, duration: 3000 },
            { element: document.getElementById('three-weeks-count'), value: 1048576, duration: 4000 },
            { element: document.getElementById('month-count'), value: 536870830, duration: 5000 },
        ];

        counters.forEach(counter => {
            let start = 0;
            const increment = counter.value / (counter.duration / 100);
            const count = () => {
                start += increment;
                if (start < counter.value) {
                    counter.element.innerText = Math.floor(start).toLocaleString();
                    setTimeout(count, 100);
                } else {
                    counter.element.innerText = counter.value.toLocaleString();
                }
            };
            count();
        });
    });
     window.addEventListener('load', () => {
        // Animate elements
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.5}s`;
        });
    });

    // Background color change
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
    const welcomeSection = document.querySelector('.welcome-section');
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        welcomeSection.style.backgroundColor = randomColor;
    }, 5000);


     window.addEventListener('load', () => {
        // Animate elements
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.5}s`;
        });
    });