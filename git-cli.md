**Métodos de mesclagem**

- Mesclar na ramificação atual o ramo remoto `develop`:
```bash
$ git pull origin develop #--verbose
# $ git fetch origin
# $ git merge origin/develop
```
- Mesclar na ramificação atual o ramo `feature`:
```bash
$ git merge feature
```
<br>

**Git Basics**

```bash
$ git init

# Add all
$ git add .

# Commit
$ git commit -m 'Custom'

# Modify last commit
$ git commit --amend -m "an updated commit message"

# REMOTO ORIGIN
$ git remote add origin <remote_url> #adiciona
$ git remote -v #verifica remotos
$ git remote rm origin #remove remotos

# Push to remote
$ git push -u origin 'main'
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
