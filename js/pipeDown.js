/**
 * Created by Administrator on 2016/7/21 0021.
 */
(function (w) {
    function PipeDown(x, y) {
        //if (!PipeDown.isInit) {
        //    throw "callback";
        //}
        this.x = x||0;
        this.y = y||-210;
        this.speed=-2;
        PipeDown.total++;
    }

    PipeDown.total=0;
    PipeDown.init = function (ctx, imgdipeDown) {
        PipeDown.ctx = ctx;

        PipeDown.imgdipeDown = imgdipeDown;
        PipeDown.imgwidth = PipeDown.imgdipeDown.width;
        PipeDown.imgHeight = PipeDown.imgdipeDown.height;

        if (ctx & imgdipeDown) {
            PipeDown.init = true;
        }
    }

    PipeDown.prototype = {
        constructor: PipeDown,
        draw: function () {
            PipeDown.ctx.drawImage(PipeDown.imgdipeDown,this.x,this.y)
        },
        update:function(){
            this.x+=this.speed;

            if(this.x<-180){
            this.x+=(PipeDown.imgwidth+52)* PipeDown.total;
            }
        }

    }

    w.PipeDown = PipeDown;
}(window))