import React from "react"
import "./footer.style.css"

export const Footer = props => {
  let currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><a href="https://github.com/Kijimai"><i class="fab fa-github"></i></a></li>
        </ul>
      </div>
      <p class="copy">Copyright Kijimai &copy; {currentYear}</p>
    </footer>
  )
}