**Git Basics**

```bash
$ git init

# Add all
$ git add .

# Commit
$ git commit -m 'Custom'

# Modify last commit
$ git commit --amend -m "an updated commit message"

# Add remote
$ git remote add origin remote_url

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

**Dealing with branches**

```bash
# Get branch status
$ git status

# Check all branchs
$ git branch -a -v

# Rename branch
$ git branch -M new_name

# Create new branch
$ git checkout -b branch_name

# Go to branch
$ git checkout branch_name

# Merge branch (in receiving branch)
$ git merge branch_name

# Delete branch
$ git branch --delete BRANCH_NAME #locally
$ git push origin --delete BRANCH_NAME #remotely
```

**FAQ**
- What is '-u' flag? A: https://git-scm.com/docs/git-push
- What is '-M' flag? A: https://git-scm.com/docs/git-branch
- Waht is '-b' flag? A: https://git-scm.com/docs/git-checkout
