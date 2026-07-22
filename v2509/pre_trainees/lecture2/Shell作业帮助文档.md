# Shell作业帮助文档

# 获取脚本文件所在目录

Bash有一个内置变量`BASH_SOURCE`，你可以通过这个变量获取运行脚本的路径。例如以下脚本：

```bash
#!/bin/bash
echo $BASH_SOURCE
```

我将该脚本放在了`/tmp/`目录，所以它的路径为`/tmp/test.sh`，运行该脚本后会输出`/tmp/test.sh`。

但为了获取目录，我们还需要学习另一个命令：dirname

它能将你的文件所在目录的相对路径或绝对路径进行输出，如下：

```
$ dirname /tmp/test.sh
/tmp
```

那么我们就可以用一个变量来储存脚本文件所在目录了，注意不要加空格，就像这样：

```bash
#!/bin/bash
SCRIPT_DIR=$(dirname $BASH_SOURCE)
echo $SCRIPT_DIR
```

不过这样可能会导致输出的路径是相对于脚本运行所在目录的相对路径，所以最好继续处理一下这个变量：

```bash
#!/bin/bash
SCRIPT_DIR=$(dirname $BASH_SOURCE)
SCRIPT_DIR=$(realpath $SCRIPT_DIR)
echo $SCRIPT_DIR
```

这样就完美。。。了吗？

其实我在这里挖了一个关于BASH_SOURCE的一个小坑，但并不会真的影响这个作业的完成，就当作是完美吧^_^

# 检查文件是否存在

刚刚我们已经获得了脚本所在路径，那么接下来用find命令即可解决。

在使用find命令时，如果没有匹配到任何文件，那么就会返回一个空字符串，体现在终端的输出就是没有输出。所以我们就可以利用这个进行比较来写脚本。比如下是用来创建build路径的脚本文件：

```bash
BUILD_DIR=$(find $SCRIPT_DIR -maxdepth 1 -name "build" -type d)
if [[ "$BUILD_DIR" == "" ]]; then    # build dir isn't Exist
    BUILD_DIR="$SCRIPT_DIR/build"    # create it
    mkdir "$BUILD_DIR"
    echo "Created build directory: $BUILD_DIR"
else
    echo "Found existing build directory: $BUILD_DIR"
fi
```

# 结语

这个练习相比missing中的练习要简单些，但能让你学到更多知识并付诸实践，特别是我给出了以上两个教程后。这些原本需要你们<strong>STFW</strong>或<strong>RTFM</strong>掌握的东西直接被我以帮助文档的形式给了出来，也是希望你们在将来学习makefile或cmake时能少些阻碍。
