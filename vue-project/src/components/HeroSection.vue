<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Welcome!</h1>
      <p>Explore my world of development and creativity.</p>
      <button class="hero-button">View My Work</button>
    </div>
  </section>
</template>



<script>
export default {};
</script>


<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #e2e8f0;
  background: linear-gradient(135deg, #282828, #333333); /* Neutral gradient */
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent 70%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #cbd5e1;
  line-height: 1.1;
  letter-spacing: -1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.4rem;
  margin-bottom: 40px;
  color: #94a3b8;
  line-height: 1.7;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.hero-button {
  background-color: #f97316;
  color: #1e293b;
  padding: 20px 50px;
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .hero-button {
    padding: 18px 40px;
    font-size: 1.2rem;
  }
}
</style>