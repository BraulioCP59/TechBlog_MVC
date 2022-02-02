# TechBlog_MVC

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md

WHEN I visit the site for the first time  - done
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the 
homepage and the dashboard; and the option to log in -  done

WHEN I click on the homepage option  - done
THEN I am taken to the homepage - done

WHEN I click on any other links in the navigation - done
THEN I am prompted to either sign up or sign in - done

WHEN I choose to sign up - done
THEN I am prompted to create a username and password - done 

WHEN I click on the sign-up button - done
THEN my user credentials are saved and I am logged into the site - done

WHEN I revisit the site at a later time and choose to sign in - done
THEN I am prompted to enter my username and password - done

WHEN I am signed in to the site - done
THEN I see navigation links for the homepage, the dashboard, and the option to log out - done

WHEN I click on the homepage option in the navigation - done 
THEN I am taken to the homepage and presented with existing blog Posts that include the post title and the date created - done 

WHEN I click on the dashboard option in the navigation - done
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post - done 

WHEN I click on the button to add a new blog post - done
THEN I am prompted to enter both a title and contents for my blog post - done

WHEN I click on the button to create a new blog post - done
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post - done

WHEN I click on one of my existing posts in the dashboard - done
THEN I am able to delete or update my post and taken back to an updated dashboard - done

WHEN I click on the logout option in the navigation - done
THEN I am signed out of the site - done
--------------------------------------------------------------------------------------------------------------------------------------

WHEN I click on an existing blog post - done
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment - done

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I am idle on the site for more than a set time - done
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.


### Repository Quality: 13%

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application on heroku.

* The URL of the GitHub repository, with a unique name and a readme describing the project.
