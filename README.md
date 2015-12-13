My Tech blog based on Hugo. visit http://kushdilip.github.io/blog

[![wercker status](https://app.wercker.com/status/abaf25971165732f5ea920c4ff6ce86c/m/master "wercker status")](https://app.wercker.com/project/bykey/abaf25971165732f5ea920c4ff6ce86c)




### Issues faced during theme installation
Always add submodule them like this
`git submodule add https://github.com/Zenithar/hugo-theme-crisp.git themes/hugo-theme-crisp`
checkout this answer on stackoverflow http://stackoverflow.com/a/5205785

To install the theme submodule during installation put below commands inside build step of `wercker.yml`
```
- install-packages:
    packages: git ssh-client
- script:
    name: initialize git submodules
    code: |
          git submodule update --init --recursive
```
