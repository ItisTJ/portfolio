"use client"
import { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles = []
    const shootingStars = []
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.3 // Smaller particles
        this.speedX = (Math.random() - 0.5) * 0.2 // Slower movement
        this.speedY = (Math.random() - 0.5) * 0.2 // Slower movement
        this.opacity = Math.random() * 0.3 + 0.1 // Lower opacity
        this.twinkleSpeed = Math.random() * 0.01 + 0.005 // Slower twinkling
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.opacity += this.twinkleSpeed
        
        if (this.opacity > 0.4 || this.opacity < 0.1) {
          this.twinkleSpeed = -this.twinkleSpeed
        }
        
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY
      }
      
      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Reduced glow effect
        ctx.shadowColor = 'rgba(147, 51, 234, 0.3)';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Shooting star class
    class ShootingStar {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speedX = (Math.random() - 0.5) * 4 + 2; // Slower speed
        this.speedY = Math.random() * 2 + 1; // Slower speed
        this.size = Math.random() * 2 + 0.5; // Smaller size
        this.opacity = 0.6; // Lower opacity
        this.trail = [];
        this.maxTrailLength = 15; // Shorter trail
        this.active = false;
        this.delay = Math.random() * 10000 + 5000; // Random delay between 5-15 seconds
        this.lastReset = Date.now();
      }
      
      update() {
        const now = Date.now();
        
        // Only activate after delay
        if (!this.active && now - this.lastReset > this.delay) {
          this.active = true;
        }
        
        if (!this.active) return;
        
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        
        // Remove old trail points
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        
        // Fade out trail
        this.trail.forEach((point, index) => {
          point.opacity = (index / this.trail.length) * this.opacity * 0.5; // Reduced trail opacity
        });
        
        // Check if shooting star is off screen
        if (this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        if (!this.active) return;
        
        // Draw trail with reduced opacity
        this.trail.forEach((point, index) => {
          ctx.save();
          ctx.globalAlpha = point.opacity;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = this.size * (index / this.trail.length) * 0.5; // Thinner trail
          ctx.lineCap = 'round';
          
          if (index > 0) {
            ctx.beginPath();
            ctx.moveTo(this.trail[index - 1].x, this.trail[index - 1].y);
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
          }
          
          // Reduced glow effect
          ctx.shadowColor = 'rgba(147, 51, 234, 0.2)';
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.restore();
        });
        
        // Draw shooting star head with reduced glow
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(147, 51, 234, 0.3)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Initialize fewer particles
    for (let i = 0; i < 50; i++) { // Reduced from 100 to 50
      particles.push(new Particle());
    }
    
    // Initialize fewer shooting stars
    for (let i = 0; i < 2; i++) { // Reduced from 3 to 2
      shootingStars.push(new ShootingStar());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Update and draw shooting stars
      shootingStars.forEach(star => {
        star.update();
        star.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
} 