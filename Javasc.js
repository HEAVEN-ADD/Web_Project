const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
        function openModal() {
      document.getElementById("Pop_up").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    };
    function closeModal() {
      document.getElementById("Pop_up").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
    function showAlertSeeLive() {
      alert("A button have been clicked!");
    }
    
    function showAlertGetMyResume(){
      alert("Get My Resume button have been clicked!");
    }
    function showAlertGetInTouch(){
      alert("Get In Touch button have been clicked!");
    }
