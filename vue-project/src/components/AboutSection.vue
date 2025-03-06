<template>
    <section id="about" class="about-section">
      <div class="about-content">
        <h2>About Me</h2>
        <div class="about-card">
          <div class="profile-info">
            <div class="profile-image">
              <img src="../assets/prof.jpg" alt="Your Profile Picture" />
            </div>
            <div class="profile-text">
              <p>
                Hello! I'm [Your Name], a passionate developer and creator based in [Your Location]. I love building things for the web and exploring new technologies.
              </p>
              <p>
                I have experience in [List your skills or areas of expertise]. My goal is to create meaningful and impactful projects that solve real-world problems.
              </p>
              <p>
                In my free time, I enjoy [Mention your hobbies or interests]. I'm always eager to learn and grow, and I'm excited to see what the future holds.
              </p>
            </div>
          </div>
        </div>
  
        <div class="skills-section">
          <h3>My Skills</h3>
          <ul class="skills-list">
            <li>
              <a href="https://github.com/" target="_blank">
                <img src="https://img.icons8.com/ios-filled/70/000000/github.png" alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.python.org/" target="_blank">
                <img src="https://img.icons8.com/color/70/000000/python.png" alt="Python" />
              </a>
            </li>
            <li>
              <a href="https://www.java.com/" target="_blank">
                <img src="https://img.icons8.com/color/70/000000/java-coffee-cup-logo.png" alt="Java" />
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                <img src="https://img.icons8.com/color/70/000000/html-5--v1.png" alt="HTML" />
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                <img src="https://img.icons8.com/color/70/000000/css3.png" alt="CSS" />
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank">
                <img src="https://img.icons8.com/color/70/000000/bootstrap.png" alt="Bootstrap" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>




<script>
export default {};
</script>



<style scoped>
.about-section {
  padding: 120px 20px;
  background-color: #1e1e1e;
  color: #c8c8c8;
  text-align: center;
}

.about-content {
  max-width: 1100px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #e6e6e6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.about-card {
  background-color: #272727; /* Light gray card background */
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: left;
  margin-bottom: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 30px;
}

.profile-image {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-text p {
  font-size: 1.25rem;
  line-height: 1.9;
  margin-bottom: 20px;
  color: #b7b7b7;
  transition: color 0.3s ease; /* Smooth text color transition */
}

.profile-text p:hover {
  color: #a8a8a8; /* Darker text on hover */
}

.skills-section {
  text-align: center;
}

.skills-section h3 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #d4d4d4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.skills-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skills-list li {
  margin: 15px;
}

.skills-list img {
  width: 70px;
  height: 70px;
  transition: transform 0.3s ease;
}

.skills-list img:hover {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .about-content {
    max-width: 90%;
  }

  .profile-info {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .about-content h2 {
    font-size: 2.8rem;
    margin-bottom: 40px;
  }

  .about-card {
    padding: 30px;
  }

  .profile-text p {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .skills-list img {
    width: 50px;
    height: 50px;
  }
}
</style>