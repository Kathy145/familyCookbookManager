## Project 2: Family Cookbook Manager Scaffolding

## Process

1. Create app Repo
2. CLI: git clone
3. Setup Environment

   * Initialize app directory
   * Install npm packages using Express, Handlebars, and Mongoose.
   * npm init -y
   * npm i express
   * npm i mongoose
   * npm i express-handlebars

    *(You may request to use an alternative to Handlebars. Contact your squad leader for more information.)
4. CLI: touch index.js
5. Create models and link them to the database. 
6. Create a couple pieces of seed data so that can see data retrieved from your database (by a mongoose model) show up on the page later.
  - CLI: node db/seed.js
7. Build controllers and routing, to 'funnel' or direct the data into your handlebars views.
8. Build your views and add CSS styling.
9. Add new features!

### MVP Requirements

1. Utilize npm packages using Express, Handlebars, and Mongoose.
3. Utilize at least 1 non-User model.
4. Utilize the complete CRUD functionality implemented with RESTful routes, RESTful routes means using PUT, GET and not just post)
   a. You may logically distribute CRUD functionality across models. This is only permissable when it does not make sense in the context of your application to have full CRUD on one model.
5. Deploy your application on Heroku.
6. Screencast === 3 mins

Your repo should contain...

  * A **working full-stack application, built by you**, that meets the technical requirements above.
  * **Frequent commits dating back to the very beginning** of the project.
  * **A ``readme.md`` file** in the root of your repo, with explanations of the technologies used, the approach taken, features, installation instructions, unsolved problems, etc.
  * **A `planning` directory** in the root of your repo containing a diagram mapping out your project domain. You are welcome to include other planning documents (e.g., wireframes, user stories).
  * A **link to your hosted, working application** in the URL section of your Github repo.

    > ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

## Remember ...

* Have its own repository under your GitHub account (do not fork this repo).
* Validate: Semantically-clean HTML and CSS.
  -HTML will have [handlebars?] \_\_\_ written in so wont pass an actual validator
* When President file structure === MVP structure!
* Use example from scrum channel – shown in ‘when president’ solution
  Include README.md
## Deliverables

Your project is due on **Thursday, Jan 11th at 2:00pm**. Create an issue on [the project2-gallery repository](https://github.com/ga-dc/project2-gallery) containing...

  * a link to your Project 2 Github repository
    > *Please do **not** fork this repo*
  * a link to your [screencast presentation](https://git.generalassemb.ly/ga-wdi-exercises/project2/blob/master/presentations.md)

## Bonus

* Use Materialize!! (MVP?)
* Use Passport to add User Auth
     - > https://github.com/jaredhanson/passport
     - > https://git.generalassemb.ly/ga-wdi-lessons/express-passport
- Let users sign in with a third-party account (Facebook, Twitter, GitHub, ... etc.)
   > Read more...

    - https://github.com/mkdynamic/omniauth-facebook
    - https://github.com/arunagw/omniauth-twitter
    - https://github.com/intridea/omniauth-github
- Allow users to upload images to your application, and persist these images.

  > Read more: 
  > https://stackoverflow.com/questions/11442356/storing-some-small-under-1mb-files-with-mongodb-in-nodejs-without-gridfs
  > https://stackoverflow.com/questions/4796914/store-images-in-a-mongodb-database


## ERD

![ERD](https://github.com/Kathy145/familyCookbookManager/blob/master/Planning/p2erd.jpg?raw=true "ERD")
