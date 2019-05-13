###First :
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

###Then
`git status`
What are the differences between my current working env and my local repo ?

`git add [file.ext]`
Add this file to versioning, use '.' for all current files

`git commit -m [commit message]`
Commit the changes to the local repo

