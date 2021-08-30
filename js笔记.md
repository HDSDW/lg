## 使用innerHTML修改HTML文件的内容，通过以下方法获取到元素位置

## 1 `document.getElementsByTagName("tagname")[number]`

 方法可返回带有指定标签名的对象的集合HTMLCollection，再通过innerHTML获取元素中的内容，记得加[],不然只会获取到一个集合

## 2 `document.getElementById("id")` 

方法可返回对拥有指定 ID 的第一个对象的引用。注意 只能改变该元素里的第一个对象
记得用加法防止其他内容被覆盖 inner.innerHTML=inner.innerHTML + html
记得请求数据的方法别写重了

## 3 `Element.getElementsByClassName('classname')` 

方法返回一个即时更新的（live） HTMLCollection，包含了所有拥有指定 class 的子元素。
  Element表示文档中的元素，不是固定的, **注意是element不是elements**  

## document.querySelector()选择器
文档对象模型Document引用的querySelector()方法返回文档中与指定选择器或选择器组匹配的第一个 HTMLElement对象。如果您需要与指定选择器匹配的所有元素的列表，则应该使用 `querySelectorAll()`

## Document.createElement()方法
用于创建一个由标签名称 tagName 指定的 HTML 元素

## EventTarget.addEventListener() 事件监听器
方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 

例：`button.addEventListener('DOMContentLoaded', function)`

## DOMContentLoaded 事件
当纯HTML被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载。

## let 
允许你声明一个作用域被限制在 块级中的变量、语句或者表达式。与 var 关键字不同的是， var声明的变量只能是全局或者整个函数块的。 var 和 let 的不同之处在于后者是在编译时才初始化. `let x=1`

# Node 接口
***Node.textContent***  属性 表示一个节点及其后代的文本内容。可取代innerHTML

语法`let text = someNode.textContent;`
`someOtherNode.textContent = string;`

***Node.appendChild()*** 方法将**一个**节点附加到指定父节点的子节点列表的末尾处。可用 `Element.append()` 替代

例：`var p = document.createElement("p"); document.body.appendChild(p);`

***Element.append()***   方法在 Element的最后一个子节点之后插入一组 Node 对象或 DOMString 对象。被插入的 DOMString 对象等价为 Text 节点。

与 `Node.appendChild()` 的差异：
`Element.append()`允许追加  DOMString 对象，而 `Node.appendChild()` 只接受 Node 对象。
`Element.append()` 没有返回值，而 `Node.appendChild()` 返回追加的 Node 对象。
`Element.append()` 可以追加多个节点和字符串，而 `Node.appendChild()` 只能追加一个节点。








`Number.MAX_VALUE` JS中可以表示的最大数字超过则为Infinity 

`Number.MIN_VALUE` JS中可以表示的大于零的最小值

Infinity 表示正无穷
`typeof`  检查字符类型

NaN  表示 not a number

JS无法进行精确度较高的浮点数运算

## 强制类型转换,转换数据类型

String

1，方法 `a = a.toString();`返回结果，不会影响原数据，对null和undefine无效

2，函数`a = String(a);`

Number

1，函数 `a = Number(a);` 布尔值转换结果为1和0

2, 函数 `parseInt();`将字符串转换为整数 `parseFloat();`将字符串转换为浮点数

Boolean
`Boolean();`

数字转Boolean,0和NaN结果为false,其他为ture

字符串转Boolean,空字符串为false,其余为ture


% 取模运算


`prompt(“描述”);` 弹出一个带有输入框的提示框，返回输入的内容

返回值是string类型，进行数字相关运算时需要进行类型转换 `a = +prompt("描述")；`


`var obj = new Object();` 构造一个对象

`obj.name = "name";`给对象添加或修改属性
`
`var obj = {name:"name",name2:"name2"...}` 构造对象的同时添加属性

`delete obj.name;`删除属性

`document.write("内容");` 向body中写入内容

`Function` 也是一个对象

`var fun = new Function();` 创建函数

使用函数声明创建函数

```
function fun([形参]）｛
        语句
    } 
```

使用函数表达式创建一个匿名函数，赋值给fun

`return` 设置函数的返回值,return后的语句不会执行

```
var fun = funtion() {
    语句
    return a;
};
```
`fun();` 调用函数

``` ```

