<!--
 * @Author: Yu
 * @Date: 2020-07-30 09:34:36
 * @LastEditTime: 2020-07-31 16:38:24
 * @FilePath: \KeepLearning\CSS\CSS基础.md
 * @Description: ''
-->

# CSS 基础

1. backgroud
   - **background** 简写属性
   - **background-color**
   - **background-image** background-image: url(/i/eg_bg_04.gif);
   - **background-repeat** repeat-x 和 repeat-y 分别导致图像只在水平或垂直方向上重复，no-repeat 则不允许图像在任何方向上平铺
   - **background-attachment** 设置背景图像是否固定或者随着页面的其余部分滚动(fixed)
   - **background-position** 改变图像在背景中的位置
2. 文本
   - **text-align** 水平对齐方式，center,left,right,justify(两端对齐)
   - **text-overflow** 当文本溢出包含它的元素，应该发生什么.clip,ellipsis,string
   - **text-decoration** 文本修饰。删除链接下划线: a {text-decoration:none;}
   - **text-transform** 文本转换。uppercase、lowercase、capitalize。
   - **text-shadow** 文本阴影。水平阴影，垂直阴影，模糊的距离，以及阴影的颜色:h-shadow v-shadow blur color
   - **line-height** 行高
3. 字体
   - **font** 简写属性
   - **font-family** 设置文本的字体系列。
   - **font-style** 字体样式。normal、italic、obliqu
   - **font-size** 字体大小。
   - **font-weight** 文本的粗细。normal、bold、bolder、lighter。
4. 列表样式
   - **list-style-type** 指定列表项标记的类型。circle、square、upper-roman、lower-alpha
   - **list-style-image** 指定列表项标记的图像
5. 边框
   - **border** 简写属性
   - **border-style** 边框样式，solid、dotted、dashed
   - **border-width** 边框宽度，指定长度值或者关键字:thick 、medium 和 thin
   - **border-color** 边框颜色
6. 边距
   - **margin** **padding**
7. 可见性
   - display:none;
   - visibility:hidden;
8. Positon
   - static,absolute ,fixed,relative,sticky
9. Overflow

   | 属性    | 描述                                                     |
   | ------- | -------------------------------------------------------- |
   | visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
   | hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
   | scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
   | auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
   | inherit | 规定应该从父元素继承 overflow 属性的值。                 |

10. CSS3 新特性
    |属性|描述|
    |-----|-----|
    |box-shadow|盒子阴影,水平阴影，垂直阴影，模糊的距离，以及阴影的颜色|
    |overflow-wrap|别名 word-wrap。允许长单词换行到下一行,p {overflow-wrap:break-word;}|

### 2D 转换

transform:

1. translate,根据左(X 轴)和顶部(Y 轴)位置给定的参数，从当前元素位置移动。
2. rotate,在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。
3. scale,该元素增加或减少的大小，取决于宽度（X 轴）和高度（Y 轴）的参数
4. skew(<angle> [,<angle>]),包含两个参数值，分别表示 X 轴和 Y 轴倾斜的角度，如果第二个参数为空，则默认为 0，参数为负表示向相反方向倾斜。
5. matrix()方法和 2D 变换方法合并成一个。matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。
