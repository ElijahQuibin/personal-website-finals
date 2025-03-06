<template>
  <section id="gallery" class="gallery-section">
    <div class="gallery-content">
      <h2>Picture Gallery</h2>
      <div class="gallery-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="gallery-item"
          @click="openLightbox(index)"
        >
          <img :src="image" :alt="`Gallery Image ${index + 1}`" />
        </div>
      </div>
    </div>
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content">
        <img :src="images[lightboxIndex]" :alt="`Full Gallery Image ${lightboxIndex + 1}`" />
        <button class="lightbox-close" @click.stop="closeLightbox">
          &times;
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/src/assets/gallery/one.jpg",
        "/src/assets/gallery/two.webp",
        "/src/assets/gallery/three.jpg",
        "/src/assets/gallery/four.jpg",
        "/src/assets/gallery/five.jpg",
      ],
      lightboxOpen: false,
      lightboxIndex: 0,
    };
  },
  methods: {
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxOpen = true;
    },
    closeLightbox() {
      this.lightboxOpen = false;
    },
  },
};
</script>


<style scoped>
.gallery-section {
  padding: 120px 20px;
  background-color: #191919;
  text-align: center;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.gallery-content {
  max-width: 1100px;
  margin: 0 auto;
}

.gallery-content h2 {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #d7d7d7;
  display: inline-block; /* Allows padding to work correctly */
  background-color: rgba(0, 0, 0, 0.2); /* Subtle card background */
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;
}

.gallery-item img:hover {
  opacity: 0.9;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  position: relative;
}

.lightbox-content img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.lightbox-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(218, 217, 217, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>