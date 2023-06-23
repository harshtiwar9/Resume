// JavaScript Functions

// Function to check if an element is in viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to animate the skill progress bars
  function animateSkillProgress() {
    var skills = document.querySelectorAll('.skill');
    
    skills.forEach(function(skill) {
      if (isElementInViewport(skill)) {
        var progress = skill.querySelector('.skill-progress-bar');
        var percentage = skill.querySelector('.skill-percentage').textContent;
        progress.style.width = percentage;
      }
    });
  }
  
  // Event listener for scrolling
  window.addEventListener('scroll', animateSkillProgress);
  
  // Call the function initially to animate the skill progress bars that are in viewport
  animateSkillProgress();  