// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Active navigation link highlighting
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  })
}, observerOptions)

// Observe elements for scroll animation
document
  .querySelectorAll(".experience-card, .project-card, .cert-card, .skill-category, .timeline-item")
  .forEach((el) => {
    el.classList.add("scroll-animate")
    observer.observe(el)
  })

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title .gradient-text")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 150)
  }
})

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Add click effects to skill items
document.querySelectorAll(".skill-item").forEach((skill) => {
  skill.addEventListener("click", function () {
    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 150)
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroVisual = document.querySelector(".hero-visual")
  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add loading animation to page
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Animate hero elements
  const heroElements = document.querySelectorAll(
    ".hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-stats",
  )
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("fade-in-up")
    }, index * 200)
  })
})

// Add dynamic year to footer
const currentYear = new Date().getFullYear()
const footerText = document.querySelector(".footer-text p")
if (footerText) {
  footerText.innerHTML = footerText.innerHTML.replace("2025", currentYear)
}

// Add interactive hover effects to certification cards
document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const icon = this.querySelector(".cert-icon")
    icon.style.transform = "scale(1.1) rotate(5deg)"
  })

  card.addEventListener("mouseleave", function () {
    const icon = this.querySelector(".cert-icon")
    icon.style.transform = "scale(1) rotate(0deg)"
  })
})

// Add floating animation to cloud container icons
document.querySelectorAll(".cloud-container > div").forEach((icon, index) => {
  icon.style.animationDelay = `${index * 1.5}s`
})

// Add progress bar for page scroll
const progressBar = document.createElement("div")
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    transition: width 0.3s ease;
`
document.body.appendChild(progressBar)

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.body.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  progressBar.style.width = scrollPercent + "%"
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }
})

// Add focus management for accessibility
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusable = Array.from(document.querySelectorAll(focusableElements))
    const index = focusable.indexOf(document.activeElement)

    if (e.shiftKey) {
      const prevIndex = index > 0 ? index - 1 : focusable.length - 1
      focusable[prevIndex].focus()
    } else {
      const nextIndex = index < focusable.length - 1 ? index + 1 : 0
      focusable[nextIndex].focus()
    }
  }
})

console.log("Portfolio loaded successfully! 🚀")
