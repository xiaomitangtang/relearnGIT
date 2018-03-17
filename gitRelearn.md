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
git checkout -- fileName    将文件撤销到暂存区一样的状态，
git checkout 分支         切换分支
----------------------------
-------------------------
