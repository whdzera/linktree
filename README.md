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

#### 1. Clone the Repository

Use CDN Unpkg
```bash
git clone https://github.com/whdzera/jekyll-stimulus-tw-starter.git
cd jekyll-stimulus-tw-starter
```

Use Vite
```bash
git clone --single-branch --branch vite https://github.com/whdzera/jekyll-stimulus-tw-starter.git
cd jekyll-stimulus-tw-starter
```

#### 2. Install Dependencies
```bash
bundle install && npm install
```

#### 3. Run the Development Server
```bash
rake dev
```
the command running jekyll sever development, tailwindcss --watch and vite(if you using vite)

open `localhost:4000`

#### 4. Run Rspec Testing
```bash
rake test
```

#### 5. Generate Controller Stimulus
`hello is example`
```bash
rake stimulus[hello]
```
make new file 'hello_controller.js in `app/javascript/controllers`

added import and register hello controller in `app/javascript/application.js`

#### 6. Build using vite
```bash
rake build
```
file build in `app/build` 

#### 7. Run Jekyll Sever Production
```bash
rake p
```

## Generate new project
if you need new project jekyll with my template, just `rake jekyll[name_your_project]`

#### Create Rakefile 
https://gist.github.com/whdzera/aefad9ae560df32adfb7848e0bad28f2

#### Let's try
```bash
rake jekyll[name_your_project]
```

## License

MIT License

#### Credits

Created by `whdzera`

Feel free to fork, improve, or contribute via pull requests!