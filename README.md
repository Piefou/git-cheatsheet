# git-cheatsheet

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
git config --global credential.helper cache --timeout 900 (keep in memory 15 min)
ou
git config --global credential.helper store (keep in clear at ~/.git-credentials)
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

`git commit --amend`
Let me correct my last commit

`git reset HEAD [file.ext]`
Don't wanna commit this file, remove from stage

`git checkout -- [file.ext]`
Did crap, remove all the changes back to the local repo state

`git stash`
Put aside my changes. 'stash list' cmd to see what is stashed. 'stash pop' to bring back the changes

### Remotes :

`git remote`
List the remote repos linked, '-v' flag for URLs, 'show [remote]' for details

`git remote add [remoteAlias] [github.com/urltotherepo]`
Add a remote repo, default remote repo usually named 'origin'

`git remote rename [remoteAlias] [newAlias]`
Rename a remote repo

`git remote remove [remote]`
Remove a remote repo

`git fetch [remote]`
Get all remote changes, but no merge

`git pull --rebase [remote]`
Get all remote changes, AND merge. '--rebase' flag apply your changes on top of what's pulled, instead of creating a new merge commit

`git push -u [remote] [branch]`
Send commits to the remote. '-u' flag so it enable the tracking of the remote branch

### Tags :

`git tag`
What are the tags on this branch ?

`git tag -a [tag] -m [message]`
Add a new tag. '-d' to delete a tag.

`git push [remote] [tag]`
Add the tag on the remote. '--tags' to push'em all. '--delete' to remove it.

`git checkout [tag]`
Set current workdir to the tag state, but any commits will be orphan.

`git checkout -b [branch] [tag]`
To create a branch from a tag

### Branches :

`git branch [branch]`
Create a new branch on the current commit. '-d' for deletion

`git checkout [branch]`
Switch to another branch, '-b' to create if non-existent. If a remote branch exists with this name, it will follow its changes

`git merge [branch]`
Merge the branch to your current workdir

`git push [remote] --delete [branch]`
Delete the remote branch

`git rebase [branch]`
Switch your current branch to the specified branch, then apply the changes you made

### Misc :

`git config --global alias.[aliascmd] '[cmd]'`
To create an alias of a command

`git diff --check`
Show whitespaces differences

`git log --graph --oneline --decorate --all`
