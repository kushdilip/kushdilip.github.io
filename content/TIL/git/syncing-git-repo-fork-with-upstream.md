+++
banner = ""
categories = []
date = "2016-02-13T22:38:57+05:30"
images = []
menu = ""
tags = []
title = "Syncing git repo fork with upstream"

+++

Sometimes we fork git repositories and use the forked repo in our projects. But these fork repos get outdated as the upstream repo maintainers keep pushing commits. 
Here I will give you few commands to sync the forked repos with upstream repository.

<!--more-->

1 . [First is configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
In terminal run `git remote -v` which will give you fetch and push origins pointing to your forked repo.

for e.g. if I run the command for this project https://github.com/kushdilip/hugo-icarus-theme

```
$ git remote -v
origin	https://github.com/kushdilip/hugo-icarus-theme.git (fetch)
origin	https://github.com/kushdilip/hugo-icarus-theme.git (push)
```

2 . Now add point upstream repo using below command. On github projects you can see the link to repo you forked from.
`git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git`

Now my `git remote -v` gives 

```
$ git remote -v
origin	https://github.com/kushdilip/hugo-icarus-theme.git (fetch)
origin	https://github.com/kushdilip/hugo-icarus-theme.git (push)
upstream	https://github.com/digitalcraftsman/hugo-icarus-theme.git (fetch)
upstream	https://github.com/digitalcraftsman/hugo-icarus-theme.git (push)
```

3 . [Merging forked master with upstream master](https://help.github.com/articles/syncing-a-fork/)
  - run `git fetch upstream`
  - now `git checkout master`
  - finally `git merge upstream/master`
