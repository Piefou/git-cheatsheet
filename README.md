### First :

`git init`
It init a new .git folder.
Create a .gitignore file for unwatched files
OR
`git clone [github.com/urltotherepo]`
If it already exists remotely

Once on a new PC :
```
git config --global user.name "Piefou"
git config --global user.email "myemail@email.com"
git config --global color.ui auto
```

### Then :

`git status`
What are the differences between my current working env and my local repo ?

`git add [file.ext]`
Add this file to versioning, use '.' for all current files

`git commit -m [commit message]`
Commit the changes to the local repo

`git diff`
Git Status on per-line changes for untracked files, '--staged' flag for staged files

`git rm [file.ext]`
I want to delete a file, remove it of versioning and from working dir, '--cached' flag for no physical deletion

`git mv [file.ext]`
File has been moved/renamed, do it in Git

### History :

`git log`
Show me the history

### Whoops :

`git commit --ammed`
Let me correct my last commit

`git reset HEAD [file.ext]`
Don't wanna commit this file, remove from stage

`git checkout -- [file.ext]`
Did crap, remove all the changes back to the local repo state