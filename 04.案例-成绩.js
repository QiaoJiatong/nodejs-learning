//1. 自己新建文件夹data/成绩.txt，粘贴进去字符串
//2. 先读取成绩.txt里的内容
const { log } = require("console");
let fs = require("fs");
fs.readFile(__dirname + "/data/成绩.txt", (err, data) => {
  let str = data.toString();
  //3. JS代码处理
  let arr = str.split(" "); //['小红=99','小白=100'....]
  //4. 将数组中的‘=’替换成‘：’
  let newArr = arr.map((str) => str.replace("=", ":"));
  //5. 用join('\n')把新的数组拼接起来返回一个大的字符串
  let allStr = newArr.join("\n");
  //6.写入‘成绩-ok.txt’文件中
  fs.writeFile(__dirname + "/data/成绩-ok.txt", allStr, (err) => {
    if (err) {
      console.log(写入失败);
      console.log(err);
    } else {
      console.log(写入成功);
    }
  });
});
