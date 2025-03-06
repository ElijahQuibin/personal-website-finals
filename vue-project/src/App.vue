<template>
  <header-component />
  <hero-section />
  <about-section />
  <gallery-section />
  <feedback-form />
  <footer-section />
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import './assets/base.css';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import GallerySection from './components/GallerySection.vue';
import FeedbackForm from './components/FeedbackForm.vue';
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
</style>