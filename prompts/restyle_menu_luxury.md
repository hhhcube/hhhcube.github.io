## Task: Restyle Top Navigation Menu to Match Brass Hands Design

Update the `index.html` and `style.css` files to give the site header a high-end, minimal frame style like the example below.

### 1. HTML Updates
- Wrap the top nav bar in a `<header>` tag if not already done
- Keep nav items in a horizontal `<ul class="nav-menu">` or similar class
- Add a right-aligned div (optional) for "Let's Work Together" or location/time info

### 2. CSS Style Updates

Add to `style.css`:

```css
header {
  border-top: 1px solid var(--muted);
  border-bottom: 1px solid var(--muted);
  background-color: var(--bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04); /* subtle bottom shadow */
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--fg);
}

.nav-menu li:hover {
  color: var(--accent);
  cursor: pointer;
}

.nav-right {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--muted);
}
