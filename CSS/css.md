# CSS

### 1. 盒模型的宽度如何计算？

offsetWidth = 内容宽度 width + 内边框 border + 内边距 padding，不包括外边距。  
如果要让 offfsetWidth 的值等于 width，设置 box-sizing:border-box;

<br>

### 2. margin 纵向重叠问题

- 相邻元素的 margin-top 和 margin-bottom 会发生重叠
- 空白内容也会重叠

<br>

### 3. margin 负值问题

- margin-top 和 margin-left 负值，元素向上、向左移动
- margin-right 负值，右侧元素左移，自身不受影响
- margin-bottom 负值，下方元素上移，自身不受影响

<br>

### 4. BFC 是什么？如何应用？

- Block format context，块级格式化上下文块独立渲染区域，内部元素的渲染不会影响边界以外的元素
- 形成 BFC 的常见条件
  - float 不是 none
  - display 是 flex inline- block 等 position 是 absolute 或 fxed
  - overflow 不是 visible
