/// Creating repo

Go to your github account, click on new
write the name of the particular repo then click on public

follow the following command line
git init
git add README.md (optional)
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Softdera/flexisafTwo.git
git push -u origin main

// To Clone

git clone https://github.com/Softdera/flexisafTwo.git



// To Push 
git branch -M main
git remote add origin https://github.com/Softdera/flexisafTwo.git
git push -u origin main


// To Create Branch

git branch feature-branch
git checkout feature-branch

//To Use Branch
git checkout -b feature-branch

### TO Make a Change and Commit
echo "This is a feature update" >> README.md
git add README.md
git commit -m "Added feature update to README"

// or 

git init
git commit -m "second commit"
git branch -M main
git push -u origin main


// To revert commit
git log
git revert <commit-hash>

// To Fetch Changes from Remote
git fetch origin

// Merge a Branch:

git checkout main
git merge feature-branch

// Renaming Branches
git branch -m old-branch-feauture-branch new-branch-feature-branch

// To Pull
git pull origin main

// To Push
git push origin main

// Creating a Pull Request
git push origin feature-branch


// Merging a Pull Request:
git checkout main
git merge feature-branch



