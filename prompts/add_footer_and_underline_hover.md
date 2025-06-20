## Task: Add Animated Hover and Luxury Footer to Match Nav Style

### 1. Hover Animation for Nav and Footer Links

Apply a subtle underline animation on hover:

```css
.nav-menu li,
.footer-links li {
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
}

.nav-menu li::after,
.footer-links li::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1px;
  background-color: var(--accent);
  transition: width 0.3s ease;
}

.nav-menu li:hover::after,
.footer-links li:hover::after {
  width: 100%;
}
