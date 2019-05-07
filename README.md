# react-component
基于react实现的常用组件库

### Marquee
基于react的跑马灯实现。  
动态更新数据，每隔1s就更新数据。并实现向上滑动的效果。设置内容相对定位，然后通过动画向上移动相应高度。

### RadioButton
基于react的单选框实现。  
修改原生radio的实现，采用div实现，然后点击之后展示不一样的样式。  

### CheckBox
基于react的复选框实现。  
能够选择多项数据。对于已选择的项，再一次点击就取消选择；对于没有选择的项，当前已经达到最多可选择项时，弹出提示。

### Toast
基于react的弹出框实现。
在屏幕中间弹出一层提示框。一共有四种形式: info(普通信息提示)、error(错误信息提示)、success(成功操作提示)、loading(正在加载提示)。直接使用Toast.xxx即可调用弹出框。

### MarqueeLine
基于react的横向文字滚动实现。
父组件传展示内容给子组件。采用的是text-indent实现，所以根据不同的文本长度text-indent值不一样。需要手动修改index.中的text-indent值。

### Mask
基于react的遮罩实现。

### Modal
基于react的模态框实现。
模态框内容(包括函数处理)都是通过父组件传递而来。
使用true/false控制隐藏现实内容，当显示的时候出现遮罩层。

### Process
基于react的进度条实现。
通过父级组件传值，type--进度条类型(默认为条形进度条)，showInfo--是否展示信息，action--能否改变当前数值。
