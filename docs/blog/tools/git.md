# git命令

记录一下`git`常用的命令

## 基础命令

```sh
git init
git add [file]
git commit -m 'messages'
git status

git branch
git branch <branch-name>
git checkout <branch-name>
git branch -d <branch-name>
git merge <branch-name>
```

版本控制详见[reset三种模式](https://zhuanlan.zhihu.com/p/647893961)
```sh
git reset --hard HEAD^
git reset --soft HEAD~100
git reset commit_id
```

## 连接github

先进行`ssh`与github.com建立连接（[ssh连接](https://www.cnblogs.com/woider/p/6533709.html)）
用如下命令检查是否已经连接：
```sh
ssh -T git@github.com
```

```sh
git remote add origin git@github.com:<username>/<reponame>.git
git remote remove <name>

git push origin main/master
```
