alias nn='vim /home/a/.bashrc && . /home/a/.bashrc && cp -rfv /home/a/.bashrc /home/a/t/'
alias gts='git status'
alias pwd2='echo -n $(pwd) | xclip -selection clipboard;'
alias rmv='rm -rfv'
alias status='sudo systemctl status '
alias restart='sudo systemctl enable --now '
alias upgrade='sudo pacman -Syu'
alias upgrade2='yay -Syu'
alias install2='upgrade && yay -S '
alias uninstall2='upgrade && yay -R '
alias install='upgrade;sudo pacman -S'
alias uninstall='upgrade;sudo pacman -R'
alias mr='mkdir'
alias dvlp='xdg-open ./;exit;#caja command can also be used'
alias rbt='reboot'
alias v='vim'
alias m='cat /home/a/.bashrc | grep -i '
alias off='shutdown now'
alias e='exit'
alias enable='sudo systemctl enable'
alias asdf='cd /home/a/t ; git add --all; git commit -a --allow-empty-message -m "" ; git push origin main;'
alias gtpl='git fetch --all; git reset --hard origin main;git pull;update'
alias mvt='cd /home/a/t/'

#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
