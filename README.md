# Jekyll Boilerplate

A clean boilerplate to kickstart client-side sites using **Jekyll**, **Vite**, **Stimulus.js**, and **Tailwind CSS**.  
Ideal for blogs, documentation sites, personal landing pages or portfolio.

easy deploy on githubpages, netlify, vercel

Jekyll using version `4.4.1`

- [Jekyll](https://jekyllrb.com/)
- [Vite](https://vite.dev/)
- [Stimulus.js](https://stimulus.hotwired.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Information

main javascript configuration `app/javascript/application.js`

Stimulus controllers are located in `app/javascript/controllers/**`

Tailwind input `app/assets/stylesheets/tailwind.css`

Tailwind build output `app/assets/stylesheets/application.css`

## Prerequisites

- Ruby 3.0^
- Node 2.2^

## Installation

```
gem install sylvia
```

then

```
sylvia jekyll new_app
```

## Setup and Usage

#### Install Dependencies

```bash
bundle install && npm install
```

#### Run Jekyll Development Server

```bash
rake dev
```

the command running jekyll, vite and tailwindcss

open `localhost:4000`

#### Run Rspec Testing

```bash
rake test
```

#### Generate html Layout

```bash
rake layout[test]
```

make new file 'test.html in `_layouts`

#### Generate Controller Stimulus

```bash
rake stimulus[test]
```

make new file 'test_controller.js in `app/javascript/controllers`

added import and register test controller in `app/javascript/application.js`

#### Build js using vite

```bash
rake build
```

file build in `app/build/application.js`

#### Run Jekyll Production Sever

```bash
rake p
```

## Showcase

list jekyll site using this template

- https://whdzera.github.io -> blog site
- https://whdzera.github.io/totp -> TOTP Management
- https://whdzera.github.io/todolist -> ToDoList
- https://whdzera.github.io/calc -> Calculator
- https://whdzera.github.io/strikethrough -> Strikethrough Text Generator
- https://whdzera.github.io/findanime -> Find Anime by image
- https://whdzera.github.io/xiAnimelist -> Animelist

## License

MIT License

#### Credits

Created by `whdzera`

Feel free to fork, improve, or contribute via pull requests!
