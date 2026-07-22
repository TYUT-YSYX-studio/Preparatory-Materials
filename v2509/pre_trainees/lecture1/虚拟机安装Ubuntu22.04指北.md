# 虚拟机安装Ubuntu22.04指北

## VMware安装

1. 如果还没有下载VM安装包的话，[点击链接下载VMware](https://release-assets.githubusercontent.com/github-production-release-asset/225538126/59adf681-3562-4b76-952f-cae2ba7a93c8?sp=r&sv=2018-11-09&sr=b&spr=https&se=2025-07-25T12%3A56%3A33Z&rscd=attachment%3B+filename%3DVMware-workstation-full-17.6.3-24583834.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2025-07-25T11%3A55%3A58Z&ske=2025-07-25T12%3A56%3A33Z&sks=b&skv=2018-11-09&sig=SqipfzDIAhFvKNkfpuvesfNU4jmgSVhCPfMKQUweCGY%3D&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc1MzQ0NTI5MSwibmJmIjoxNzUzNDQ0OTkxLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.8lFGJ-YyWZtm12OD4lXDSnt64gVfWU7h5Vqbrgm_kCY&response-content-disposition=attachment%3B%20filename%3DVMware-workstation-full-17.6.3-24583834.exe&response-content-type=application%2Foctet-stream)。（<strong>如果链接点不开，可以在群文件中找到安装包</strong>）

    a. 官网下载需要登录，所以直接下载github上的安装包最佳。

    b. 安装前检查一遍文件名是否带有"full"关键字，文件后缀是否为exe


2. 随后找到安装包双击打开。

3. 正确打开后应该显示如下图样：


![](../static/JcERbao8noADc4xilyQcZTvInDc.png)

4. 等待一会儿后在下一步选择安装装路径时将路径改为C盘以外的盘<strong>（如果电脑只有C盘，装在C盘即可）</strong>

    a. 这样可以避免C盘空间不足，Windows系统文件几乎都在C盘。

    b. 装错了盘也不用担心，win10/win11已经预留了一定的系统占用空间，这部分只要你没乱动过就几乎不会有系统运行的问题。未来逐渐学会使用电脑后，你也就能自己解决这些问题了。

    c. 只会打游戏不算



![](../static/OvRpb13eEosG21xcJX8cdQ2dnSh.png)

5. 取消勾选更新检查及体验提升计划（可选）


![](../static/GoWYb2AeHosfOHxgMB2crjMnnjd.png)

6. 然后一直下一步就可以了，直到安装完成。

    a. 如果VMware报告有兼容问题，则勾选自动安装WHP

    b. 已经选择下一步的同学也可以继续操作，若遇到问题可直接在群内询问



## 下载并安装Ubuntu22.04

> [!WARNING]
> 为了确保大家不是拿着网上的图随便糊弄，请在第21步时严格按照要求进行操作。

首先你需要下载我们所需的安装镜像

1. 访问[中国科学院软件研究所开源镜像站-Ubuntu22.04](https://mirror.iscas.ac.cn/ubuntu-releases/22.04/)或[清华大学开源软件镜像站-Ubuntu22.04](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/22.04/)

2. 找到ubuntu-22.04.5-desktop-amd64.iso文件，点击下载

    a. 注意是desktop，不是live

    b. 等待时间久的话，就先泡杯茶喝吧就先看看后面的步骤吧，不过不要记错了

    c. 最慢下载速度应该也能达到4MB/s左右，整体时间应该不会多于20min，如果传输太慢请检查自己的网络

    d. 如果还是觉得太慢了，尝试使用IDM这类下载工具（可能收费）


3. 如果下载到了C盘，移至D盘（可选）

4. 打开VMware，看到如下界面。选择创建新的虚拟机。（特别操作会用红色标识）


![](../static/Uhq1bQj3wo6V8ixXRdpcwqWcnAg.png)

5. 选中典型，然后下一步


![](../static/AgxYbbHTdoZADKxeKpXcz45vn4g.png)

6. 随后选择稍后安装操作系统（此时选择中间的安装选项会导致进行简易安装，不方便我们进行详细配置）


![](../static/Fmijb7JRAo2PAixPeUMcF8rxn4f.png)

7. 选择Linux Ubuntu64位 下一步


![](../static/M6thbAuQToiccBxxjevcObzMnBe.png)

8. 取一个喜欢的名字或者保持默认名字，并选择合适的路径，避免安装在C盘


![](../static/EA1sbVSlcokKoCx030JcuV4WnOg.png)

9. 将最大磁盘大小调整至30G以上，尽可能大些。把虚拟磁盘存为单文件。


![](../static/KZxXbRUUComaaAxgL1McQB6UnZf.png)

10. 选择自定义硬件


![](../static/COqLb9atooCYwExFl6fcfqCJnVe.png)

11. 内存设置至少4G


![](../static/ZWLLbyQpRoV69vxeRKvcMjPlnLd.png)

12. 处理器数量选择1-2个，4-12核即可（如果2处理器12核（如果支持的话）正常使用下依然卡顿，尝试增加内存到6G，仍无法解决则联系助教 ）


![](../static/AcoYbsvlwoWToixBGAHcJeRcnLh.png)

13. 在CD/DVD（SATA）处使用`浏览`选择ISO文件为刚刚下载的镜像


![](../static/HNbHbWjUtogbJSxiL0ycxt04nKf.png)

14. 检查


![](../static/CW63bz1H9ogFKUxQCjBcdu6WnSf.png)

15. 点击左上角打开虚拟机


![](../static/Ii7fbvgHBo90Fwxcei8cNyNKnAe.png)

16. 期间可能让你选择一个选项，选择默认的第一个install选项并Enter即可

    a. 如果无效，先使用`Ctrl + G`快捷键进入虚拟机控制再操作


17. 进入成功后，选择English，并点击install（选择非English可能会导致Ubuntu运行问题，为了锻炼程序员必须的英语素养，也为了避免潜在的问题，请不要选择Chinese）


![](../static/SU0Tbl5fRoAa4BxNXUhcZ97VnXc.png)

18. 考虑到大家键盘大部分都是QWERTY布局，接下来直接确定即可。你也可以用下方的`Detect`以防万一。如果你用的是mac，请先尝试STFW，无果则向群内询问。


![](../static/BU2zbLxxlo9J8Ixg1IrcgFnCnqb.png)

19. 随后一直continue然后选择install now，出现以下界面并确认（continue）


![](../static/AYykbH8N2ozVZXxRemFcJGEUnsc.png)

20. 时区选择 shanghai


![](../static/Vz7Zb15Knoiyfox0QlNcsctHnub.png)

21. 重要步骤！

    a. 设置Your name为你的名字首字母+学号后两位。

    b. 设置一个密码，保证自己能记得。

    c. continue后等待完成并restart。



![](../static/K9cpbe2GvoZj16x4JMUcDHPHnNg.png)

22. 之后可能提示你按ENTER，按下Enter即可。

23. 选择账号登录，或者可以直接跳过


![](../static/Iv1Bb6QIXofhYNxvt3XcKQNNnTc.png)

24. 在下一个界面不要选择Ubuntu pro，因为我们用不上


![](../static/ZAVqbauIKoV1HYxEwRvcmOsInYd.png)

25. 然后拒绝发送信息，也不提供位置


![](../static/P1yXbWOkNoDkKPxX9sBcx6ZWnHg.png)

![](../static/ZXOCbqq0joDfrtx28h4cRyHgnzc.png)

26. 然后点击Done即可完成Ubuntu的安装

27. 进入桌面后用`Ctrl + Alt + T`快捷键打开终端

28. 在终端输入你的名字首字母 + 你的学号

    a. 期间不要让虚拟机全屏，方便截图

    b. 用`Ctrl + Alt`快捷键退出虚拟机控制后点击`PrtSc`键即可截图

    c. 其他截图方式见本周讲义-计算机基操，均需要退出虚拟机控制



示例截图

![](../static/Us0MbkZRRo7dg9xHdQLc1aiAnqf.png)

> [!TIP]
> # 保存截图
>
> 截图下来不只是让大家用来纪念的，这也是作业的一部分，<strong>将你的截图重命名为</strong>`vmware`。

> [!TIP]
> # <strong>创建快照</strong>
>
> 刚刚装完系统，要是不小心坏了再重装就不好了。找到下方图片提示的选项，创建自己虚拟机的第一个快照。

![](../static/QN9ybN24FoKIKQxHuzCcU7F6nWe.png)

> [!TIP]
> # <strong>学会关机</strong>
>
> 如果你无法养成勤加快照的习惯，至少每次退出时记得用`sudo poweroff`命令或右上角关机

## 你可能会遇到的问题

### 很小的桌面（如图）

![](../static/YIJhbMS6RoPkoIxCjK2cK4VKnDd.png)

#### 法1 治标

在VM的工具栏上选择自由拉伸就可以让画面充满虚拟机屏幕区域

![](../static/Ai6fbiXHJo43poxzDascqiSnn2e.png)

你可能还需要更改一下屏幕分辨率让眼睛看起来舒服点

![](../static/Uxqtbl1OAokSCzxHtvYcXiQbnRh.png)

#### 法2 治本

这说明虚拟机没有安装VMware tools。我们在Ubuntu中用`Ctrl + Alt + T`快捷键打开终端

输入以下命令：

```bash
$ sudo apt install open-vm-tools-desktop -y    # sudo需要你再输入你刚刚设置的密码
```

目前主机还无法直接向虚拟机复制文本和文件，所以需要你手动输入命令。

输入密码时不会显示输入的密码，这是为了保护密码安全。

`#`后面跟的是注释，不用作为命令输入。

前面的`$`是命令行标识，也不用输入

然后就是正常大小的桌面了！

![](../static/FkgCb00Mxo0wWXxrJyCcWtmxnKf.png)

观察虚拟机设置里的屏幕分辨率可知，vmtool通过创造一个“不标准”的分辨率来让虚拟机能正常显示。

### 瞎眼的命令行

这其实是Ubuntu的锅，它的默认命令行主题真的很瞎眼。不仅如此，命令行的大小也对眼睛很不友好。所以这里来简单配置一下终端。

1. 在终端右上角找到`三`这样的图标，点开后打开preference并完成左栏最下方选项卡中的以下更改：


![](../static/U1oKbS51zoEEIpxO7NtcJ3IenrT.png)

2. 上侧导航栏中的colors选项中找到built-in schemes并选择为Tango这样比较养眼的主题配色，或者自己调整


![](../static/NHvQbIzTVoz14uxx395cq6Osnuh.png)

3. 你也可以更改上方的背景选项，需要先关闭Use colors from system theme选项

4. 最终配置好后，你的终端默认打开就可以变成这样：


![](../static/C0jbbejmDo6mXgxeDutcCx29nLh.png)

5. 最后别忘了保存快照
