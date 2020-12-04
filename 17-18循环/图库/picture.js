//定义变量
//用 thumpBar变量来存储thump-bar的引用
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//遍历照片
for (var i = 1; i < 6; i++) {
    //通过指定名称创建一个元素
    let newImage = document.createElement('img');
    //为现有属性指定一个特定的值，即指定图片地址
    newImage.setAttribute('src', 'image/pic' + i + '.png');
    //为图片列表添加新的图片
    thumbBar.appendChild(newImage);

}
//给每一个缩略图添加点击处理器
thumbBar.addEventListener("click", function(event) {
    //触发元素返回上一个属性值的事件，即取上一步返回的src做为参数
    const src = event.target.getAttribute("src");
    displayedImage.setAttribute("src", src);
});

/* 编写 变暗/变量 按钮功能 */
btn.addEventListener("click", function(event) {
    //检查当前按钮的类名称
    const color = event.target.getAttribute("class");
    if (color === "dark") {
        //将按钮类名改为light
        btn.setAttribute("class", "light");
        btn.textContent = "变亮";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "变暗";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});