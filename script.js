import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js'

// Initialize the neon cursor
let cursor = neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 8,
  radius2: 8,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})

// Hide the real cursor
document.body.style.cursor = 'none';

// Function to simulate mouse movement
function simulateMouseMovement() {
  const app = document.getElementById('app');
  const rect = app.getBoundingClientRect();
  
  // Generate random coordinates within the app container
  const x = Math.random() * rect.width;
  const y = Math.random() * rect.height;
  
  // Update cursor position directly
  if (cursor && cursor.update) {
    cursor.onEnter()
  }
}

// Prevent real mouse movement from affecting the cursor
document.addEventListener('mousemove', (e) => {
  e.preventDefault();
  e.stopPropagation();
}, true);

// Start simulating mouse movement every 5 seconds
setInterval(simulateMouseMovement(), 5000);

// Initial movement


