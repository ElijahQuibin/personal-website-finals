<template>
  <header :class="{ 'header-hidden': isHeaderHidden }">
    <div class="header-content">
      <div class="logo">My Website</div>
      <nav :class="{ 'mobile-nav': isMobileMenuOpen }" aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery" class="nav-link">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        class="hamburger"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="main-navigation"
        @click="toggleMobileMenu"
      >
        <span class="sr-only">Toggle Navigation</span>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>
  </header>
</template>



<script>
export default {
  data() {
    return {
      isHeaderHidden: false,
      lastScrollTop: 0,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>



<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1e293b;
  color: #e2e8f0;
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header-hidden {
  transform: translateY(-100%);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
  max-width: 1200px; /* Align with hero section */
  margin: 0 auto; /* Center header */
}

.logo {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  color: #cbd5e1;
}

nav {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

nav a {
  color: #94a3b8;
  text-decoration: none;
  margin: 0 25px;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

nav a:hover {
  color: #cbd5e1;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.3s ease;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #94a3b8;
  margin: 5px 0;
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
  }

  nav {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    background: rgba(30, 41, 59, 0.9);
    padding: 10px;
    border-radius: 5px;
  }

  nav.mobile-nav {
    display: flex;
  }

  nav a {
    margin: 10px 0;
    text-align: center;
  }

  .hamburger {
    display: block;
  }
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>