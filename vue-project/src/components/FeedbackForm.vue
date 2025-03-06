<template>
    <div>
      <h2>Feedback Form</h2>
      <form @submit.prevent="submitFeedback">
        <input type="text" v-model="feedback.name" placeholder="Your Name" />
        <textarea v-model="feedback.message" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  import { supabase } from '../supabaseClient';
  
  export default {
    data() {
      return {
        feedback: {
          name: '',
          message: '',
        },
        successMessage: '',
      };
    },
    methods: {
      async submitFeedback() {
        try {
          const { error } = await supabase.from('feedbacks').insert([this.feedback]);
          if (error) {
            throw error;
          }
          this.successMessage = 'Feedback submitted successfully!';
          this.feedback = { name: '', message: '' }; // Clear the form
        } catch (error) {
          console.error('Error submitting feedback:', error);
          this.successMessage = 'Error submitting feedback. Please try again.';
        }
      },
    },
  };
  </script>