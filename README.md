# Jekyll + Stimulus.js + Tailwindcss

A clean boilerplate to kickstart client-side websites using **Jekyll**, **Stimulus.js**, and **Tailwind CSS**.  
Ideal for blogs, documentation sites, personal landing pages or portfolio.

I built this to make Jekyll competitive with Astro.

Jekyll using version `4.4.1`

Stimulus controllers are located in `app/javascript/controllers`

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

## Automate for new jekyll

### clone the repository
```bash
git clone https://github.com/username/jekyll-stimulus-tw-starter.git
```

### Create Rakefile 
(need install `gem install rakefile`)
![](https://gist.github.com/whdzera/aefad9ae560df32adfb7848e0bad28f2)

### Let's go
```bash
rake jekyll[name_your_project]
```

## License

MIT License

### Credits

Created by `whdzera`

Feel free to fork, improve, or contribute via pull requests!