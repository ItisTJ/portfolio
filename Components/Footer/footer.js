"use client"
import './styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          Copyright © {currentYear} Thisara Senadeera
        </p>
      </div>
    </footer>
  )
}