/**
 * Created by Administrator on 2016/7/21 0021.
 */

(function (w) {
    //鸟类
    function Birds(x, y, w, h) {
        //1.1未初始化鸟类时，报错
        if (!Birds.isInit) {
            throw '请先初始化Bird类！否则请回吧！';
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.clipX = 0;
        this.clipY = 0;
        this.index = 0;
        this.speed = 1;
        this.speedPlus = 0.05;
    }

    Birds.init = function (ctx, birdsImg) {
        //1、鸟类绘制环境初始化
        Birds.ctx = ctx;

        //2、给birds类添加图片对象，获得图像资源
        Birds.birdsImg = birdsImg;
        Birds.birdsWidth = Birds.birdsImg.width / 3;
        Birds.birdsHeight = Birds.birdsImg.height;

        //1.2 如果调用了类的初始化方法，并且传入了一个对象，则初始化完成，可以创建实例
        if (ctx) {
            Birds.isInit = true;
        }
    }

//给Birds原型上扩展方法
    extend(Birds.prototype, {
        draw: function () {
            //////必须保存小鸟的初始状态
            Birds.ctx.save();
            //3、实现下落过程中，小鸟在原地旋转一定角度：1）平移坐标系2)旋转坐标轴3)确定小鸟在新坐标系中的位置宽高负的一半
            Birds.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
            var angle = 8 * this.speed;
            angle=angle>60?0:angle;
            Birds.ctx.rotate(Math.PI / 180 * angle);


            //1、根据小鸟实例绘制；1)初始化小鸟绘制环境 2）获取图像资源
            Birds.ctx.drawImage(Birds.birdsImg,
                this.clipX, this.clipY, Birds.birdsWidth, Birds.birdsHeight,
                -this.w / 2, -this.h / 2, this.w, this.h);
            //////必须回滚当前保存的状态，相当于新的开始
            Birds.ctx.restore();
        },


        update: function () {
            //2、让小鸟展现出“飞”的状态，然后再下落
            this.clipX = Birds.birdsWidth * this.index;
            this.index++;
            this.index = this.index > 2 ? 0 : this.index;

            //小鸟下落速度，并添加加速度
            this.y += this.speed;
            /////////////////////////////////////小鸟下落的加速度，越下越快
            this.speed += this.speedPlus;

        }
    })

    w.Birds = Birds;

}(window))
