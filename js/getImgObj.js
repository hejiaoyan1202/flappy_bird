/**
 * Created by Administrator on 2016/7/21 0021.
 */
//加载游戏所需的图像资源
(function (w) {

    //用来存储图片地址的对象
    var imgSrc = {
        birds: "images/birds.png",
        land: "images/land.png",
        pipedown: "images/pipeDown.png",
        pipeup: "images/pipeUp.png",
        sky: "images/sky.png"
    }
    //用来存储渲染图片的对象
    var imgObj = {};
    var imgTemp = null;
    var imgCount = 0;

    function getImgObj(fn) {
        for (var key in imgSrc) {
            //创建新的图片资源
            imgTemp = new Image();
            imgTemp.src = imgSrc[key];
            imgObj[key] = imgTemp;

            //监听图片是否加载完,每加载一张imgcount++,每次创建一个对象后监听是否加载完毕，
            imgTemp.addEventListener("load", function () {
                imgCount++;
                if (imgCount > 4) {
                    //console.log("图片资源加载完毕");
                    fn(imgObj);
                }
            })
        }
    }

    w.getImgObj = getImgObj;

//在游戏主模块中调用getImgObj函数时需传入实参字调函数，形参有fn()接收，
// 实参在图片加载完成后调用，imgOj为实参，imgobj为形参接收，类似此处。

    //getImgObj(function(imgobj){});

}(window))