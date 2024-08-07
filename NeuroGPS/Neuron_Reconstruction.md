# 神经元形态重建

> 生物与医学图像处理工具

> 本站地址：https://sincostan.tech/manual


## **神经元结构**
神经元由胞体+树突+轴突组成；我们需要确认胞体位置后，追踪树突、轴突，最终得到一条完整的神经元。树突有很多条且较短，轴突从胞体出发且只有一条，但很长且有很多分支。
![](/manual/image/Neuro/image001.png)

## **软件追踪原理**

将算法生成的骨架，也就是通过图像自动识别出来结果，如左图所示（在软件里面称为“背景”），通过合并、剪裁等操作最终修订成一条完整的神经元，一条神经元只有一个胞体如右图所示。
![](/manual/image/Neuro/image003.png)![](/manual/image/Neuro/image005.png)
## **启动软件（目前仅支持windows系统）**
解压后，双击文件夹中的“BioimageVision.exe”。
![](/manual/image/Neuro/image007.png)
## **一、修订模式**
	1、点击下图红色箭头，进入修订模式；
![](/manual/image/Neuro/image009.png) 

	2、点击File,再点击open
![](/manual/image/Neuro/image011.png)	

	3、第一次进入只用选择Config Path（大数据制作的数据格式）和Swc Config（算法生成的骨架）的路径。
![](/manual/image/Neuro/image013.png)
![](/manual/image/Neuro/image015.png)
![](/manual/image/Neuro/image017.png)
![](/manual/image/Neuro/image019.png)	
## **二、确定胞体位置**
	1、按下”F1”，弹出菜单栏，如下图所示，选择“Choose Soma”。
![](/manual/image/Neuro/image021.png)
	
	2、输入胞体的坐标（这个会提前给定）；Radius代表可视化区域显示的大小。
![](/manual/image/Neuro/image023.png)		

	3、点击Back Img隐藏整个图像的背景；将level调为0；点击apply;
![](/manual/image/Neuro/image025.png)	
	
	4、调节灰度；按“G”会自动推荐一个灰度范围，人工可在此基础上调节，可以在灰度直方图中拉动；也可在Min和Max中输入灰度值；
	（最大灰度值越大图像越暗，最小灰度值越大图像轮廓越清晰，请根据实际情况调节灰度以达到最优可视化效果）
![](/manual/image/Neuro/image027.png)	
![](/manual/image/Neuro/image029.png)	
![](/manual/image/Neuro/image031.png)	
![](/manual/image/Neuro/image033.png)	
![](/manual/image/Neuro/image035.png)	

	5、设置主分支按“v”，进入画点模式：在胞体上点击后胞体上将出现一个点，按下“s”，保存该点（如下图左图所示）；鼠标选中该点，按“Y”，将该点设为主分支（如下图右图所示)
![](/manual/image/Neuro/image037.png)	
![](/manual/image/Neuro/image039.png)	

	6、连接轴突树突，将胞体上的分支都连接到胞体上（按下Alt，同时鼠标右键选中主分支的点和需要连接的背景点，松下Alt合并成功），蓝色为前景，在蓝色上进行追踪。
![](/manual/image/Neuro/image041.png)	
![](/manual/image/Neuro/image043.png)	

	7、确定完胞体的分支后，开始进行追踪。

		1) 合并：Alt+鼠标左键选中二个点。选中后松下Alt;

		2) 打断：Alt+鼠标左键选中一个点。选中后送下Alt;
	一条分支追踪完成后，按“3”，将会调出一个框用于确认后续是否没有追踪完；再按“6”，确认这条分支追踪完成，再按“4”切换到下一条分支。

   All:所有的分支

   Todo:还未检查的分支；

   Checked:已检查的分支

   Difficult:手动标记的点
![](/manual/image/Neuro/image045.png)	

## **三、纤维调图**
	1、“Ctrl+鼠标左键”单击前景纤维；调出对应的图像背景；用来确认是否是一根神经元。
![](/manual/image/Neuro/image047.png)	

	2、”Shift+鼠标左键“单击其他的背景纤维追加调图；
![](/manual/image/Neuro/image049.png)	

	3、点击“空格”键自动加载纤维图像；遇到分叉时，分支变为绿色；	
![](/manual/image/Neuro/image051.png)	

	4、点击ctrl+“空格”键自动加载下一段纤维图像；不需要鼠标进行拖动。


## **四、修订操作（裁剪纤维、合并纤维）**
	1、若确认是一根神经元上的纤维；就将其合并；“Alt+鼠标左键（选中二个点）”，松下Alt后，合并纤维（合并后纤维从背景变成了前景）；
![](/manual/image/Neuro/image053.png)	
	
	2、合并后发现一根神经元上有多条纤维；将多余的部分剪裁掉，“Alt+鼠标左键（选中一个点）”，松下Alt，剪断纤维，蓝色的那一部分将自动被删除（若不想被删除，ctrl+z撤销删除操作）
![](/manual/image/Neuro/image055.png)	
![](/manual/image/Neuro/image057.png)

	3、删除多余的神经元，鼠标左键单击要选中的神经元，如下图所示，神经元变为红色，按“D”将会删除该条神经元。“Ctrl+Z”撤销该条删除操作。
![](/manual/image/Neuro/image059.png)
		
	4、若背景纤维和前景纤维中间重合过长，不能直接合并；需先将背景纤维剪裁一部分在与前景纤维合并。
![](/manual/image/Neuro/image061.png)

	5、背景纤维与前景纤维合并时，若重合超过30个点将会有如下提示。点击是，将自动把前景和背景纤维重合的点删除。
![](/manual/image/Neuro/image063.png)

注：背景纤维是由算法自动重建出来的，需要把背景纤维加到前景纤维中，最终合成一条完整的神经元，一条神经元只有一个胞体。

## **五、标记疑问点**
	1、遇到不确定的地方点击“ctrl+w”记录；右键可对该点进行删除，备注操作。
![](/manual/image/Neuro/image065.png)	

	2、回到标记点操作，点击左侧列表中的标记点，鼠标滚轮向前滑动，将会自动定位到标记点位置，点击“空格”加载图像是图像更清晰。
![](/manual/image/Neuro/image067.png)
![](/manual/image/Neuro/image069.png)
     
## **六、感兴趣区域设置（背景框）**
	1、感兴趣区域的设置是更清晰的看到图像，直接输入“感兴趣区域坐标”或者鼠标右键点击“Interact” 选择感兴趣区域。
	
	注：显示感兴趣区域需将整个图像背景隐藏，将Back Img隐藏；
![](/manual/image/Neuro/image071.png)
	
	2、见下图中红色箭头，鼠标左键单击小球后长按然后拖动小球即可调整感兴趣区域。点击“Apply”确认已选择的区域（如下图矩形框）。再次点击“Interact”可隐藏感兴趣区域框（快捷键:B）。
![](/manual/image/Neuro/image073.png)

	注：当选择区域过大时，level值过小时，会出现显存不够的情况，此刻会有小窗口提醒，如图
![](/manual/image/Neuro/image075.png)	

	3、 Fitbox（快捷键：Ctrl+F）自动调出对应的感兴趣区域。根据当前纤维调图出来的图像。无法准确判断纤维的走向。
![](/manual/image/Neuro/image077.png)	

	4、 在需要依赖更多图像背景进行判断时，点击该点后，使用快捷键Ctrl+F；
![](/manual/image/Neuro/image079.png)

	5、 若Ctrl+f调出来的图像不足以判断时，shift+f追加调图像；
![](/manual/image/Neuro/image081.png)
		1）选择一个点，Shift+F调出背景图像；在选择其他点，Shift+F追加调出背景图像。
		
		2）shift+左侧apply；该框的图像背景将会显示。


## **七、画点模式**
	1、若图像没有对应的纤维，需要手动追；点击“V”进入画点模式；
![](/manual/image/Neuro/image083.png)

	2、点击“V”后，红色线上的最后一个点变蓝（若想在其他线上画点，直接点击想画点的位置即可，对应的点也会变蓝）。
![](/manual/image/Neuro/image085.png)
	
	3、左键单击需要追踪的位置，直接点到对应的图像上面（红色箭头代表点击的四个点，中间的点为算法自动填充）；Ctrl+Z 撤销上一步。”Z”一个点一个点撤回，若需要继续向前画点，点击空格，自动加载前面的图像，可继续画点。
	4、 若画点模式完成后：

	   1）前方有对应的背景纤维，直接按“2”即可连接；将自动退出画点模式。
![](/manual/image/Neuro/image087.png)	

	   2）点击“S”进行保存以及退出画点模式
![](/manual/image/Neuro/image089.png)

	5、画点选择方式（按C切换）

	   1）extremum：这个是极大值投影，遇到图像后面还有一层图像时使用，就不会打到下面一层上，只会打到表面的图像上。
	
	   2）Maximum：最大值投影，遇到弱信号，后面一层也没有数据时使用。
![](/manual/image/Neuro/image091.png)
## **八、2D模式**

	1、先调出Fit Box（Ctrl+F）,可以在此基础上Shift+F进行追加图像框，，如下图选择一个点按下Ctrl+F，进入2D模式后将以“选择的点”为起始点。；
	
	注：2D模式的图像范围将为调出的图像框范围；
![](/manual/image/Neuro/image093.png)	

	2、滑动鼠标滚轮，找到第一个点
![](/manual/image/Neuro/image095.png)

	3、在2D模式下根据流向判断神经元的走向，鼠标左键点击，将会出现一个蓝色的点，对应的3D模式下也会显示。撤回已经标记的点（Ctrl+Z）
![](/manual/image/Neuro/image097.png)	

	4、结束2D模式。关闭2D窗口后，3D界面将会显示在2D模式下追踪的神经元；删除该条神经元（左键单机后，按“D”删除）；和其他分支合并（Alt+鼠标左键（选中二个点））
![](/manual/image/Neuro/image099.png)

## **九、保存**
	保证前景纤维只有一种颜色（只有一条神经元，并且该条神经元已设置为主分支）
	
	1、保存当前状态:下一次打开可接着追踪。标记的分叉点和疑问点都会保存。
	
	   注、追踪过程中尽量经常保存，软件目前不太稳定，下次只用输入”state”的路径；
![](/manual/image/Neuro/image101.png)	
![](/manual/image/Neuro/image103.png)

	2、保存swc；在可视化区域单击鼠标右键，点击Save Ctrl+S（快捷键“Ctrl+S“）；下次打开将是一整条纤维；没有保存相关标记点及上一次追踪的状态。
	
	   注、整条神经元追踪完之后可使用“Ctrl+S”保存成swc，下次打开需要输入swc的位置。
![](/manual/image/Neuro/image105.png)

## **十、快捷键**
	1、调图
		1） Ctrl+鼠标左键（选中一个点）：加载纤维的背景图像

		2） Shift+鼠标左键（选中一个点）：在已加载纤维的背景图像上追加背景图像

		3） 空格:加载纤维的背景图像；
		
		4） Ctrl+空格：自动加载纤维的背景图像

		5） Ctrl+F:fitBox快捷键，调出感兴趣区域

		6） Shift+F:追加调框

		7） B：调节感兴趣区域/调节完隐藏

		8） Ctrl+A：隐藏/显示感兴趣区域

	2、画点模式（点击v进入画点模式下）
		1)  Ctrl+Z：撤销上一个点
		
		2)  Z：撤销上一次画点操作
		 
		3)  Ctrl+S：保存分支并继续画点

		4)  S：保存分支，并退出画点模式

	3、删除
		1） D：删除选中的前景/背景

		2） Alt+鼠标左键（选中一个点）：剪断纤维；蓝色的那一部分将被删除

	4、修改
		1） Ctrl+Z：撤销

		2） Alt+鼠标左键（选中二个点）：合并纤维

		3） CapsLK：选择一条分支上的两个点自动修改

	5、保存
		1） Ctrl+S：保存swc文件
		
		2） Ctrl+Shift+S：保存state文件

	6、标记
		1） Ctrl+W:标记有疑问点

		2） R：隐藏/显示标记箭头

	7、纤维操作
		1） A：隐藏/显示纤维前景

		2） E：隐藏/显示纤维背景

		3） F：聚焦（鼠标左键点击一个点，按下F即可围绕该点旋转）

		4） Z：重置纤维状态

		5） Ctrl+X：隐藏/显示纤维调图出来的背景图像。

		6） I：将选中背景插入前景

		7） X：显示/隐藏父分支

		8） Q：切换到下一条

		9） Y：将选中分支设置为主分支

  
   ## **十一、鼠标操作**
   1、平移图像：按下鼠标中间来移动鼠标；

   2、放大图像：滚动鼠标滚轮向前；

   3、缩小图像：滚动鼠标滚轮向后；

   4、旋转图像：固定左键移动鼠标；

