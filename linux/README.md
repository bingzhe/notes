## SELinux 开启和关闭

SELinux 是一款为了提高系统安全性的软件，但会和很多服务冲突，可以选择关闭

* 查看 SELinux 状态

`# getenforce` Disabled 关闭，其他的都表示开启状态
`# sestatus -v` SELinux status: enabled/disabled

* 关闭 SELinux

1. 假设 SELinux 是正在运行的，我们可以使用setenforce 命令设置临时关闭，不用重启生效。

    `# setenforce 0`

2. 改变配置文件，需要重启生效

    `# vi /etc/selinux/config` 将SELINUX=enforcing改为SELINUX=disabled，保存重启即可

## 查看yum安装路径

* 查看相关的安装包

```
rpm -qa|grep mongo

mongodb-org-shell-4.0.3-1.el6.x86_64
mongodb-org-mongos-4.0.3-1.el6.x86_64
mongodb-org-server-4.0.3-1.el6.x86_64
mongodb-org-4.0.3-1.el6.x86_64
mongodb-org-tools-4.0.3-1.el6.x86_64
```

* 查看安装路径

```
rpm -ql mongodb-org-server-4.0.3-1.el6.x86_64

/etc/init.d/mongod
/etc/mongod.conf
/etc/sysconfig/mongod
/usr/bin/mongod
/usr/share/doc/mongodb-org-server-4.0.3
/usr/share/doc/mongodb-org-server-4.0.3/GNU-AGPL-3.0
/usr/share/doc/mongodb-org-server-4.0.3/LICENSE-Community.txt
/usr/share/doc/mongodb-org-server-4.0.3/MPL-2
/usr/share/doc/mongodb-org-server-4.0.3/README
/usr/share/doc/mongodb-org-server-4.0.3/THIRD-PARTY-NOTICES
/usr/share/man/man1/mongod.1;
/var/lib/mongo
/var/log/mongodb
/var/log/mongodb/mongod.log
/var/run/mongodb
```

## centOS6.8通过yuman安装MongoDB

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/