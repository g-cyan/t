pacman -S grub xfce4 iwd dhcpcd xfce4-terminal thunar pulseaudio pulseaudio-alsa xfce4-goodies lightdm lightdm-gtk-greeter
systemctl enable --now lightdm.service
systemctl enable --now NetworkManager
systemctl enable --now iwd
systemctl enable --now dhcpcd.service
