/**
 * Created by Administrator on 2016/7/21 0021.
 */

(function (w) {

    function Land(x, y) {
        if(!Land.isInit){
            throw "callback";
        }
        this.x = x ;
        this.y = y || 488;
        //�жϵ�ǰ��ظ��������>1����ΪLand.total����Ϊ0����ֵΪ1��
        Land.total=Land.total>=1?Land.total+1:1;
        //Land.total++;

        this.speed=-2;
    }
    //Land.total=0;
    Land.init=function(ctx,landImg){
        Land.ctx=ctx;
        Land.landImg=landImg;
        Land.imgWidth=Land.landImg.width;
        Land.imgHeight=Land.landImg.height;
        if (ctx && landImg) {
            Land.isInit = true;
        }
    }

    Land.prototype={
        constructor:Land,
        draw:function(){
            Land.ctx.drawImage(Land.landImg,this.x,this.y);
        },
        update:function(){
            this.x+=this.speed;
            if(this.x<-Land.imgWidth){
                this.x+=Land.imgWidth*Land.total;
            }
        }
    }

    w.Land = Land;
}(window))