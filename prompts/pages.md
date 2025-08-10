Implement the following changes to this GitHub Pages site.

1) Create folders and files
Create:

pgsql
Copy
Edit
/services/growth-jumpstart/index.html
/services/seo-clarity-report/index.html
/services/on-page-seo/index.html
/subscribe/index.html
2) “Coming Soon” pages (3x)
For each service page, create index.html with this template, replacing TITLE and COPY:

html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>TITLE – Coming Soon</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter&family=Merriweather&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <header class="site-header">
    <div class="header-left"><a href="/">H. Hill</a></div>
    <nav class="nav" aria-label="Primary">
      <ul class="nav-menu" id="primary-menu">
        <li class="nav-item"><a class="nav-link" href="/#services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="/#what-i-offer">What I Offer</a></li>
        <li class="nav-item"><a class="nav-link" href="/#our-process">Our Process</a></li>
        <li class="nav-item"><a class="nav-link" href="/#testimonials">Testimonials</a></li>
      </ul>
    </nav>
    <a href="/subscribe/" class="header-right nav-right">Let's Work Together</a>
  </header>

  <main class="container py-5">
    <div class="card mx-auto" style="max-width: 720px;">
      <h1 class="mb-3">TITLE</h1>
      <p class="lead mb-4">COPY</p>
      <p class="text-muted mb-4">This offer is being finalized. Be first to know when it launches.</p>
      <a class="btn-accent" href="/subscribe/">Join the Waitlist</a>
    </div>
  </main>

  <footer class="py-5">
    <div class="container">
      <p><span hx-get="/year" hx-trigger="load" hx-swap="outerHTML">&copy; YEAR_PLACEHOLDER</span> H. Hill. All Rights Reserved.</p>
    </div>
  </footer>
</body>
</html>
Use:

/services/growth-jumpstart/index.html

TITLE: Google Growth Jumpstart – $299

COPY: Kickstart your site with essential optimizations and analytics setup.

/services/seo-clarity-report/index.html

TITLE: SEO Clarity Report

COPY: Get a comprehensive overview of your current SEO standing.

/services/on-page-seo/index.html

TITLE: On-page SEO

COPY: Fine-tune content and structure for higher rankings.

3) Subscribe landing page
Create /subscribe/index.html:

html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Join the Waitlist</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter&family=Merriweather&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <header class="site-header">
    <div class="header-left"><a href="/">H. Hill</a></div>
    <nav class="nav" aria-label="Primary">
      <ul class="nav-menu" id="primary-menu">
        <li class="nav-item"><a class="nav-link" href="/#services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="/#what-i-offer">What I Offer</a></li>
        <li class="nav-item"><a class="nav-link" href="/#our-process">Our Process</a></li>
        <li class="nav-item"><a class="nav-link" href="/#testimonials">Testimonials</a></li>
      </ul>
    </nav>
    <a href="/subscribe/" class="header-right nav-right">Let's Work Together</a>
  </header>

  <main class="container py-5">
    <div class="card mx-auto" style="max-width: 640px;">
      <h1 class="mb-2">Get Early Access</h1>
      <p class="lead mb-4">Join the waitlist and get notified when new offers go live.</p>

      <form id="subscribe-form" action="#" method="POST" novalidate>
        <!-- TODO: replace action with Formspree/Mailchimp/ConvertKit endpoint -->
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input id="email" name="email" type="email" class="form-control" placeholder="you@company.com" required />
          <div class="invalid-feedback">Please enter a valid email.</div>
        </div>
        <button type="submit" class="btn-accent w-100">Join Waitlist</button>
        <p class="mt-3 text-muted" style="font-size:.9rem;">We’ll only email about launches and key updates. No spam. Unsubscribe anytime.</p>
      </form>

      <div id="subscribe-success" class="alert alert-success mt-4 d-none" role="alert">
        Thanks! You’re on the list — check your inbox for a confirmation.
      </div>
    </div>
  </main>

  <footer class="py-5">
    <div class="container">
      <p><span hx-get="/year" hx-trigger="load" hx-swap="outerHTML">&copy; YEAR_PLACEHOLDER</span> H. Hill. All Rights Reserved.</p>
    </div>
  </footer>

  <script>
    // Lightweight client-side validation + fake success
    const form = document.getElementById('subscribe-form');
    const email = document.getElementById('email');
    const success = document.getElementById('subscribe-success');

    form.addEventListener('submit', function(e){
      if (!email.value || !email.checkValidity()) {
        e.preventDefault();
        email.classList.add('is-invalid');
        return;
      }
      if (form.getAttribute('action') === '#') {
        e.preventDefault();
        form.classList.add('d-none');
        success.classList.remove('d-none');
      }
    });
    email.addEventListener('input', () => email.classList.remove('is-invalid'));
  </script>
</body>
</html>
4) Wire homepage buttons + links
Edit index.html:

Change both “Let’s Work Together” buttons to point to /subscribe/:

html
Copy
Edit
<!-- header -->
<a href="/subscribe/" class="header-right nav-right">Let's Work Together</a>

<!-- hero -->
<a href="/subscribe/" class="btn-accent">Let's Work Together</a>
Update service card links to folder URLs:

/services/growth-jumpstart/

/services/seo-clarity-report/

/services/on-page-seo/

5) Ensure styling (light card on dark)
In /assets/css/style.css, confirm these exist (add/merge if missing; leave unrelated rules intact):

css
Copy
Edit
html, body { background-color: var(--primary); }
main { background: transparent; }
section { background: transparent; }

.card {
  background-color: rgba(255,255,255,0.05) !important;
  border: 1px solid rgba(255,255,255,0.08) !important;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  color: var(--fg);
  padding: var(--space-md);
}

.btn-accent {
  display: inline-block;
  background: var(--accent);
  color: #111;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
}
.btn-accent:hover { filter: brightness(0.95); }