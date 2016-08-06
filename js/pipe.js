/**
 * Created by Administrator on 2016/7/22 0022.
 */

(function (w) {
    function Pipe(x) {

        if (!Pipe.isInit) {
            throw "Pipe没有初始化，请回吧！";
        }

        this.x = x;
        //随机获取显示高度
        this.height = Math.random() * 150 + 80;

        //上下管道间距为120
        this.disSpace = 150;
        //设置pipeDown管道的坐标
        this.pipeDownH = this.height - Pipe.pipeDownHeight;
        //设置pipeUp管道的坐标
        this.pipeUpH = this.height + this.disSpace;
        this.speed = -2;
        this.speedPlus=-0.0001;
    }

    Pipe.init = function (ctx, pipeDownImg, pipeUpImg) {
        Pipe.ctx = ctx;
        //接收钢管Down对象
        Pipe.pipeDownImg = pipeDownImg;
        Pipe.pipeDownwidth = Pipe.pipeDownImg.width;
        Pipe.pipeDownHeight = Pipe.pipeDownImg.height;
        //接收钢管Up对象
        Pipe.pipeUpImg = pipeUpImg;
        Pipe.pipeUpWidth = Pipe.pipeUpImg.width;
        Pipe.pipeUpHeight = Pipe.pipeUpImg.height;

        if (ctx && pipeDownImg && pipeUpImg) {
            Pipe.isInit = true;
        }
    }

    extend(Pipe.prototype, {
        draw: function () {
            Pipe.ctx.drawImage(Pipe.pipeDownImg, this.x, this.pipeDownH);
            Pipe.ctx.drawImage(Pipe.pipeUpImg, this.x, this.pipeUpH);
            //调用绘制路径的方法，用于判断小鸟是否撞到管道
            this.drawPipePath();
        },
        drawPipePath:function(){
            //由于strokeRect与路径无关，因此只能用rect
            //Pipe.ctx.strokeRect(this.x,this.pipeDownH,Pipe.pipeDownwidth,Pipe.pipeUpHeight);
            //Pipe.ctx.strokeRect(this.x,this.pipeUpH,Pipe.pipeDownwidth,Pipe.pipeUpHeight)

            Pipe.ctx.rect(this.x,this.pipeDownH,Pipe.pipeDownwidth,Pipe.pipeUpHeight);
            Pipe.ctx.rect(this.x,this.pipeUpH,Pipe.pipeDownwidth,Pipe.pipeUpHeight)

        },

        update: function () {
            this.x+=this.speed;
            this.speed+=this.speedPlus;
            //钢管间距是两个管道宽度，每三个管道作为一个整体。即每三个管道的距离出现另一个钢管：|、、|、、|
            //只要一个管道出了画布就可以让重新回到最后。
            if(this.x<-Pipe.pipeUpWidth){
                this.x+=Pipe.pipeUpWidth*3*6;

                //随机获取显示高度
                this.height = Math.random() * 180 + 80;
                //重新出现时更新管道的高度，设置pipeDown管道的坐标
                this.pipeDownH = this.height - Pipe.pipeDownHeight;
                //重新出现时更新管道的高度，设置pipeUp管道的坐标
                this.pipeUpH = this.height + this.disSpace;
            }



        }
    })
    w.Pipe = Pipe;
}(window))