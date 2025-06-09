task :default do
  puts "Available tasks:"
  puts "rake dev - Start the development server with Jekyll and Tailwind CSS"
end

task :dev do
  jekyll_pid = spawn("bundle exec jekyll serve")
  tailwind_pid = spawn("npx @tailwindcss/cli -i ./app/assets/stylesheets/tailwind-input.css -o ./app/assets/stylesheets/tailwind-output.css --watch")

  Process.wait(jekyll_pid)
  Process.wait(tailwind_pid)
end