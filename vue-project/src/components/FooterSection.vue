<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="copyright">
          &copy; {{ currentYear }} All Rights Reserved. Sources used below
        </div>
        <div class="sources">
          <a href="https://gemini.google.com/" target="_blank" class="source-link">
            <img src="../assets/gemini-icon.png" alt="Gemini" class="source-icon" />
          </a>
          <a href="https://github.com/your-username" target="_blank" class="source-link">
            <img src="../assets/github-icon.png" alt="GitHub" class="source-icon" />
          </a>
          <a href="https://vita.vercel.app/" target="_blank" class="source-link">
            <img src="../assets/vita-icon.png" alt="Vita" class="source-icon" />
          </a>
          <a href="https://supabase.com/" target="_blank" class="source-link">
            <img src="../assets/supabase-icon.png" alt="Supabase" class="source-icon" />
          </a>
        </div>
      </div>
    </footer>
  </template>



<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>



<style scoped>
.footer {
  background-color: #222;
  color: white;
  padding: 40px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
}

.footer-content {
  display: flex;
  flex-direction: column; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.copyright {
  font-size: 0.9rem;
  margin-bottom: 15px; /* Add space between copyright and sources */
}

.sources {
  display: flex;
  align-items: center;
}

.source-link {
  margin: 0 15px;
  transition: transform 0.3s ease;
}

.source-link:hover {
  transform: translateY(-5px);
}

.source-icon {
  width: 35px;
  height: 35px;
  filter: invert(1);
  transition: transform 0.3s ease;
}

.source-icon:hover {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .footer-content {
    padding: 0 20px;
  }
}

@media (max-width: 600px) {
  .source-link {
    margin: 0 10px;
  }

  .source-icon {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 400px) {
  .copyright {
    font-size: 0.8rem;
  }
}
</style>