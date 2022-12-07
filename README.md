ONLINE SNEAKERS SHOP
React & Ruby Project

GROUP MEMBERS


Hafsa Nuh ➪ scrum master/backend developer

Yego Kipkemoi ➪ frontend developer 

Abdi Dumale➪ frontend developer/project presentation

Lewis Munyambu➪frontend developer


View LIVE:

SETUP
to access this project on your local files, you can clone it using this steps

Open the Terminal
Clone the repository:https://github.com/hafsa-nuh/react-project-4
Change Directory: cd react-project-4

npm install
if u get an error when running npm start ,then run

nvm install --lts
open browser by running npm start
The Idea
It's a user-friendly online shop that aims to connect buyers and sellers in one line of product.

Webiste Screenshot
Landing Page
Website Screenshot

Products Page
Website Screenshot

Product Details Page
Website Screenshot

Registration Page
Website Screenshot

Add Cart Page
Website Screenshot

Technologies Used
JSX
CSS
Styled Components
Slider JS
Switch transition
React
Ruby
Back-end Repo
View LIVE:


To install Postgres
For this Project, we first had to install Postgres SQL as the database supported by our hosting service provider, Heroku.

sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql.service
sudo -i -u postgres
createdb databaseName
sudo -i -u databaseName psql
set postgress as default db in your sinatra project by replacing the sqlite configuration development:

adapter: postgresql
encoding: unicode
database: database_name
pool: 2
username: your_username
password: your_password
production:
adapter: postgresql
encoding: unicode
pool: 5
host: <%= ENV['DATABASE_HOST'] %>
database: <%= ENV['DATABASE_NAME'] %>
username: <%= ENV['DATABASE_USER'] %>
password: <%= ENV['DATABASE_PASSWORD'] %>with this:
Also add the postgres gem

gem "pg"
Single React App on Heroku
Create a Heroku account/Log in using Heroku login.
Create your app.
Download Heroku CLI from here.
Run these codes.
heroku login
git init
git add .
git commit -am "my first commit"
git push heroku main
heroku rake db:migrate db:seed
heroku open
Single React App on Vercel
Create a Vercel account.
Linking GitHub
Continue with GitHub
Add GitHub Repo
Choose the repo to deploy
Diploy
LIVE SITE
View LIVE:

LICENSE
This project is under the MIT license