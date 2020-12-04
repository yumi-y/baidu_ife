randomize.addEventListener('click', result);
const customName = document.getElementById("customname");
//返回文档中匹配指定选择器的一个元素
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
//获取数组随机元素
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//定义基础变量
let storyText = '今天气温 34 摄氏度，:insertx:出去遛弯。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，李雷全程目睹但并没有慌，因为:insertx:是一个 130 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['肯德基', '迪士尼乐园', '白宫'];

/* 为 randomize 变量增加一个点击事件的监听器。于是当所引用的按钮被点击时，result() 函数就会运行 */
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('李雷', name);
    }

    if (document.getElementById("american").checked) {
        let weight = Math.round(300) + '磅';
        let temperature = Math.round(94) + '华氏度';
        newStory = newStory.replace('35 摄氏度', temperature);
        newStory = newStory.replace('140 公斤', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}