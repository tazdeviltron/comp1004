# comp1004

open terminal from file exsplorer

to see the status of the git repo, write:
  git status

to add a new file, or add the changes to an existing file, write:
  git add --all

onse you have made a sugnificant change you commit the changes, write:
  git commit -m "commit comment goes here"

if you forget the -m flag it will open the vi edditor, write :q to exit it back to the terminal.

onse you have done your work for the day, write:
  git push
to push your changes to the server.

If you have made changes on github, or on another computer, then your local repo on your laptop will be behind.
write:
  git pull
in order to pull the changes down from the server, to your laptop.

if your laptop is behind, you must pull before you push.

if there is a conflict, look up or ask for help on how to solve a git merge conflict.

Other features:
  - branches
  - working trees
  - git blame
  - git log
