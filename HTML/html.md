# HTML
### 1. 如何理解html语义化？  
- 让人更容易读懂（增强代码可读性）
- 让搜索引擎更容易读懂（SEO）
> 解释以上两点，再举个例子。比如h1表示标题，用div手写样式也可以达到同样的效果，但是代码可读性不强。同样，html语义化能让搜索引擎分清网页的主次关系，更容易读懂。

<br>

### 2. 默认情况下，哪些HTML标签是块级元素、哪些是内联元素？  
- 块级元素：独占一行，默认情况下宽度自动填满其父元素宽度，可以设置宽高和margin，padding值；
 display:block/table; 比如div h1 h2 table ul ol p等
- 内联元素：不会独占一行，相邻的内联元素会排在同一行。其宽度随内容的变化而变化。不可以设置宽高，可以设置margin和padding值，只在水平方向有效； display:inline/inline-block；比如span img input button等

