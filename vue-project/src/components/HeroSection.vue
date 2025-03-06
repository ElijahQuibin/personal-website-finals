<template>
    <section class="hero-section">
      <div class="hero-content">
        <div class="text-content">
          <h1>Hello, I'm [Your Name]</h1>
          <p>A passionate developer and creator.</p>
          <button class="hero-button">Learn More</button>
        </div>
        <div class="image-content">
          <img src="../assets/prof.jpg" alt="Personal Hero Image" />
        </div>
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
  background-color: #282828; /* Solid dark background */
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}

.text-content {
  flex: 1;
  padding-right: 40px;
}

.text-content h1 {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #cbd5e1;
  line-height: 1.2;
}

.text-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #94a3b8;
  line-height: 1.6;
}

.hero-button {
  background-color: #f97316;
  color: #1e293b;
  padding: 18px 40px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.hero-button:hover {
  background-color: #ea580c;
  transform: translateY(-3px);
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.image-content img {
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  object-fit: cover;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
    align-items: center;
  }

  .text-content {
    padding-right: 0;
    text-align: center;
    margin-top: 30px;
  }

  .text-content h1 {
    font-size: 2.8rem;
  }

  .image-content {
    justify-content: center;
  }

  .image-content img {
    max-width: 100%;
  }
}
</style>