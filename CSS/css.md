# CSS

[1. 盒模型的宽度如何计算？](#pro1)  
[2. margin 纵向重叠问题](#pro2)  
[3. margin 负值问题](#pro3)  
[4. BFC 是什么？如何应用？](#pro4)  
[5. float](#pro5)  
[6. flex 实现一个三点的色子](#pro6)  
[7. absolute 和 relative 分别依据什么定位？](#pro7)  
[8. 居中对齐有哪些实现方式？](#pro8)  
[9. line-height 如何继承](#pro9)  
[10. rem 是什么？](#pro10)  
[11. CSS-响应式-ww/vh](#pro11)
[12. 画一个三角形？](#pro12)

<br>

<h3 id="pro1">1. 盒模型的宽度如何计算？</h3>

offsetWidth = 内容宽度 width + 内边框 border + 内边距 padding，不包括外边距。  
如果要让 offfsetWidth 的值等于 width，设置 box-sizing:border-box;

<br>

<h3 id="pro2">2. margin 纵向重叠问题</h3>

- 相邻元素的 margin-top 和 margin-bottom 会发生重叠
- 空白内容也会重叠

<br>

<h3 id="pro3">3. margin 负值问题</h3>

- margin-top 和 margin-left 负值，元素向上、向左移动
- margin-right 负值，右侧元素左移，自身不受影响
- margin-bottom 负值，下方元素上移，自身不受影响

<br>

<h3 id="pro4"> 4. BFC 是什么？如何应用？</h3>

- Block format context，块级格式化上下文块独立渲染区域，内部元素的渲染不会影响边界以外的元素
- 形成 BFC 的常见条件
  - float 不是 none
  - display 是 flex inline- block 等 position 是 absolute 或 fixed
  - overflow 不是 visible

<br>

<h3 id="pro5">5. float</h3>

- 如何实现圣杯布局和双飞翼布局

  - 圣杯布局和双飞翼布局的技术总结:
    1. 使用 float 布局两侧使用 margin 负值，以便和中间内容横向重叠
    2. 防止中间内容被两侧覆盖，一个用 padding -个用 margin

- 手写 clearfix

```css
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

<br>

<h3 id="pro6">6. flex 实现一个三点的色子</h3>

align-self 属性定义 flex 子项单独在侧轴（纵轴）方向上的对齐方式。
align-items 属性定义 flex 子项在 flex 容器的当前行的侧轴（纵轴）方向上的对齐方式。  
align-items 是控制容器内的元素布局，而 align-self 则是控制自身的。  
具体：外面的 div display: flex; justify-content: space-between; 里面三个点的 div,第二个点 align-self: center; 第三个点尾对齐 align-self: flex-end;

<br>

<h3 id="pro7">7. absolute 和 relative 分别依据什么定位？</h3>

- relative 依据自身定位
- absolute 依据最近一层的定位元素定位
  - 定位元素: absolute relative fixed body

<br>

<h3 id="pro8">8. 居中对齐有哪些实现方式？</h3>

- 水平居中
  - inline 元素：text-align: center;
  - block 元素：margin: auto;
  - absolute 元素：let：50% + margin-left 负值(宽度一半)
  - absolute 元素：let：50% + transform: translateX(-50%)
- 垂直居中
  - inline 元素：line-height 等于 height
  - absolute 元素：top: 50% + margin-top 负值
  - absolute 元素：top: 50% + transform: translateY(-50%)
  - absoulte 元素：top, left, bottom, right = 0 + margin: auto

> 总结：

- 行内元素水平垂直居中

```css
.box {
  height: 100px;
  text-align: center;
  line-height: 100px;
}
```

- 块级元素水平垂直居中

1. 已知宽高

```css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}
```

2. 不知宽高

```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 可能存在兼容性问题 */
}
```

3. 不知宽高

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* 不存在兼容性问题 */
}
```

4. 不知宽高

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

<br>

<h3 id="pro9">9. line-height 如何继承</h3>

- 写具体数值，如 30px，则继承该值（比较好理解）
- 写比例，如 2 或 1.5，则继承该比例（比较好理解）
  - 父元素 line-height: 1.5;则子元素的 line-height 等于 子元素 font-size 的值乘以 1.5
- 写百分比，如 200%，则继承计算出来的值（考点）
  - 父元素 line-height: 200%;则子元素的 line-height 等于父元素的 font-size 的值乘以父元素的 line-height 百分比的值

<br>

<h3 id="pro10">10. rem 是什么？</h3>

- px，绝对长度单位，最常用
- em，相对长度单位，相对于父元素，不常用
- rem，相对长度单位，相对于根元素，常用于响应式布局

> 响应式布局的常用方案: media-query，根据不同的屏幕宽度设置根元素 font-size

<br>

<h3 id="pro11">11. CSS-响应式-vw/vh</h3>

- rem 的弊端：“阶梯”性
- 网页视口尺寸：
  - window.screen.height //屏幕高度
  - window.innerHeight //网页视口高度
  - document.body.clientHeight //body 高度
- vw/vh
  - 1vh 网页视口高度的 1/100
  - 1vw 网页视口宽度的 1/100
  - vmax 取两者最大值;vmin 取两者最小值
    > window.innerHeight = 100vh
    > window.innerwidth = 100vw

<br>

<h3 id="pro12">12. 画一个三角形？</h3>

```css
.div1 {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
<div class="div1"></div>
```
