**Git Basics**

```bash
$ git init

# Set branch to main
$ git branch -M 'main'

# Add all
$ git add .

# Commit
$ git commit -m 'Custom'

# Add remote
$ git remote add origin #remote-url

# Check remote
$ git remote -v

# Push to remote
$ git push -u origin 'main'

# Merge with remote
$ git pull origin
```

**Deploy to Heroku with Git**:

```bash
# Log in Heroku
$ heroku login

# Create new app
$ heroku create -a #name

# Link to remote
$ heroku git:remote -a #name

# Remove remote
$ git remote rm heroku

# Check remote
$ git remote -v

# Push to Heroku
$ git push heroku master
```
