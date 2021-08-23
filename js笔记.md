使用innerHTML修改HTML文件的内容，通过以下方法获取到元素位置
1 document.getElementsByTagName("tagname")[数字（表示该元素的第几个段落）] 方法可返回带有指定标签名的对象的集合HTMLCollection，再通过innerHTML获取元素中的内容，记得加[],不然只会获取到一个集合
详解 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByTagName

2 document.getElementById("id") 方法可返回对拥有指定 ID 的第一个对象的引用。注意 只能改变该元素里的第一个对象
记得用加法防止其他内容被覆盖 inner.innerHTML=inner.innerHTML + html
记得请求数据的方法别写重了
3 Element.getElementsByClassName() 方法返回一个即时更新的（live） HTMLCollection，包含了所有拥有指定 class 的子元素。
  Element表示文档中的元素，不是固定的
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getElementsByClassName
注意是element还是elements
















`Number.MAX_VALUE` JS中可以表示的最大数字超过则为Infinity 

`Number.MIN_VALUE` JS中可以表示的大于零的最小值

Infinity 表示正无穷
`typeof`  检查字符类型

NaN  表示 not a number

JS无法进行精确度较高的浮点数运算

强制类型转换,转换数据类型

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

