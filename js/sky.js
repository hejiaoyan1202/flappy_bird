/**
 * Created by Administrator on 2016/7/21 0021.
 */
(function (w) {
    function Sky(x, y) {
       if(!Sky.isInit){
           throw "callback";
       }
        this.x = x || 0;
        this.y = y || 0;
        //this.w=w;
        //this.h=h;
        this.speed = 4;
        Sky.total++;
    }

    //���һ����̬����
    Sky.total = 0;

    Sky.init = function (ctx, skyImg) {
        Sky.ctx = ctx;
        //��sky�����ͼ����Դ
        Sky.skyImg = skyImg;
        Sky.skyWidth = Sky.skyImg.width;
        Sky.skyHeight = Sky.skyImg.height;

        if (ctx && skyImg) {
            Sky.isInit = true;
        }
    }

    //��дԭ��
    Sky.prototype = {
        constructor: Sky, //�ֶ���ȫ��д��ʧ��constructor
        draw: function () {
            Sky.ctx.drawImage(Sky.skyImg, this.x, this.y)
        },
        update: function () {
            this.x -= this.speed;
            if (this.x <-Sky.skyWidth) {
                //this.x = Sky.skyWidth-this.speed;
                this.x+=Sky.skyWidth*Sky.total;
            }
        }
    }

    w.Sky = Sky;
}(window))