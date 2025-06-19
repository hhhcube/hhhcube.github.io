## Task: Improve Page Styling and Layout

Update the `style.css` file with the following rules:

body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: #111;
  color: #fff;
}

.what-i-build {
  padding: 2rem 1rem;
  max-width: 960px;
  margin: auto;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}

.feature {
  flex: 1 1 30%;
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
}

### Scope:
- File: `style.css`

### Constraints:
- Use CSS only
- Do not remove existing styles unless replaced

### Validation:
- Page renders with improved layout and font
- Hero and feature sections are visually clean and responsive
