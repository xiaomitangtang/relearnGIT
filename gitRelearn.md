git init
git config --global user.email '466980971@qq.com'
git config --global user.name 'tjb'
git add fileName   添加文件到暂存区
git add -A
git commit -m '备注'  将暂存区文件提交到分支   如果文件没有被add到暂存区，此命令不会有任何作用
git status   查看仓库当前状态
git diff 查看不同
git reset --hard HEAD^    返回上一个版本
git reset --hard id       返回指定id的版本

git reflog    查看命令历史  可以查看要回去的版本

git checkout 分支         切换分支

git reset HEAD fileName  撤销暂存区的文件到工作区
git checkout -- fileName    将文件撤销到暂存区一样的状态，（两个配合使用）


 ssh-keygen -t rsa -C "youremail@example.com"   邮箱改成自己的邮箱，一路回车
 然后会在用户主目录找到id_rsa      私钥
                      id_rsa.pub  公钥
 到github上面，设置里面添加ssh key  里面添加新的   title随便写，内容填上id_rsa.pub的文本即可


 然后在github上面创建一个新的repo

 git remote add origin git@github.com:xiaomitangtang/relearnGIT.git
 将本地库与远程库进行关联
 git push -u origin master   推送本地库所有内容到远程上（第一次加上 -u，绑定本地master和远程mster）
 git push origin master   以后直接这样简写就可以
 git clone git@github.com:xiaomitangtang/relearnGIT.git   就可以clone别人的项目


分支
git checkout -b dev   创建并切换分支
相当于
  git branch dev
  git checkout dev

  git branch  查看当前分支
  git branch -d dev 删除dev分支

git merge dev   将dev分支进行合并到当前所在分支
            如果两个版本合并之后发现冲突了，需要手动修改之后再次add  commit
             然后就将其他版本合并到当前版本了，可以删除其他版本

----这是修正冲突之后的版本


git merge --no-ff -m "merge with no-ff" dev  这样表示禁用Fast forward，会创建新的commit

git stash    将现场临时存储起来，
git stash list 查看临时存储的列表


git stash apply
git stash apply stash{0}   回复到制定的stash版本
git stash drop
git stash pop


git brach -D 分支名称    强制删除分支，没有被完全合并的分支也可以删除


git remote 查看远程仓库信息
git remote -v  查看远程仓库详细信息


--这是master2--

git branch --set-upstream dev origin/dev


首先，可以试图用git push origin branch-name推送自己的修改；

如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

如果合并有冲突，则解决冲突，并在本地提交；

没有冲突或者解决掉冲突后，再用git push origin branch-name推送就能成功！

如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream branch-name origin/branch-name。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。


标签
  git tag  v1.0   创建一个  v1.0的标签，和当前的版本进行绑定
  git tag v1.0  id   给指定版本打一个v1.0的标签
  git tag -a v0.1 -m "version 0.1 released" 3628164   给指定版本打标签，并且有备注
  git tag       查看所有标签
  git tag -d v1.0 删除标签
  git push origin v1.0    推送标签
  git push origin --tags  推送所有标签

  删除标签
  先删除本地标签  git tag -d v1.0
  在远程删除     git push origin :refs/tags/v0.9


  使用github   Fork别人的项目到自己的github上面，然后可以从自己的项目进行clone
              只有从自己的账号clone的才可以推送
              然后可以在github上面发起一个pull request等待对方接受
        Git托管服务   ----码云（gitee.com）


git config --global color.ui true

git config --global alias.st status  配置别名

git log -2  显示几条数据
