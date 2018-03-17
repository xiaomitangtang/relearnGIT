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


----这是master

