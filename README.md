# Jekyll + Stimulus.js + Tailwindcss

A clean boilerplate to kickstart client-side websites using **Jekyll**, **Stimulus.js**, and **Tailwind CSS**.  
Ideal for blogs, documentation sites, personal landing pages or portfolio.

I built this to make `ekyll`competitive with `Astro`

Jekyll using version `4.4.1`

Stimulus controllers are located in `app/javascript/controllers`

Stimulus is loaded via `application.js` as an ES module

Tailwind builds to `app/assets/stylesheets/tailwind-input.css`


---

## Tech Stack

- [Jekyll](https://jekyllrb.com/)
- [Stimulus.js](https://stimulus.hotwired.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/username/jekyll-stimulus-tw-starter.git
cd jekyll-stimulus-tw-starter
```

### 2. Install Dependencies
```bash
bundle install && npm install
```

### 3. Run the Development Server
```bash
rake dev
```

### 4. Run Rspec Testing
```bash
rake test
```

### 5. Generate Controller Stimulus
`hello is example`
```bash
rake stimulus[hello]
```

## License

MIT License

#### Credits

Created by `whdzera`

Feel free to fork, improve, or contribute via pull requests!