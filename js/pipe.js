/**
 * Created by Administrator on 2016/7/22 0022.
 */

(function (w) {
    function Pipe(x) {

        if (!Pipe.isInit) {
            throw "Pipeû�г�ʼ������ذɣ�";
        }

        this.x = x;
        //�����ȡ��ʾ�߶�
        this.height = Math.random() * 150 + 80;

        //���¹ܵ����Ϊ120
        this.disSpace = 150;
        //����pipeDown�ܵ�������
        this.pipeDownH = this.height - Pipe.pipeDownHeight;
        //����pipeUp�ܵ�������
        this.pipeUpH = this.height + this.disSpace;
        this.speed = -2;
        this.speedPlus=-0.0001;
    }

    Pipe.init = function (ctx, pipeDownImg, pipeUpImg) {
        Pipe.ctx = ctx;
        //���ոֹ�Down����
        Pipe.pipeDownImg = pipeDownImg;
        Pipe.pipeDownwidth = Pipe.pipeDownImg.width;
        Pipe.pipeDownHeight = Pipe.pipeDownImg.height;
        //���ոֹ�Up����
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
            //���û���·���ķ����������ж�С���Ƿ�ײ���ܵ�
            this.drawPipePath();
        },
        drawPipePath:function(){
            //����strokeRect��·���޹أ����ֻ����rect
            //Pipe.ctx.strokeRect(this.x,this.pipeDownH,Pipe.pipeDownwidth,Pipe.pipeUpHeight);
            //Pipe.ctx.strokeRect(this.x,this.pipeUpH,Pipe.pipeDownwidth,Pipe.pipeUpHeight)

            Pipe.ctx.rect(this.x,this.pipeDownH,Pipe.pipeDownwidth,Pipe.pipeUpHeight);
            Pipe.ctx.rect(this.x,this.pipeUpH,Pipe.pipeDownwidth,Pipe.pipeUpHeight)

        },

        update: function () {
            this.x+=this.speed;
            this.speed+=this.speedPlus;
            //�ֹܼ���������ܵ���ȣ�ÿ�����ܵ���Ϊһ�����塣��ÿ�����ܵ��ľ��������һ���ֹܣ�|����|����|
            //ֻҪһ���ܵ����˻����Ϳ��������»ص����
            if(this.x<-Pipe.pipeUpWidth){
                this.x+=Pipe.pipeUpWidth*3*6;

                //�����ȡ��ʾ�߶�
                this.height = Math.random() * 180 + 80;
                //���³���ʱ���¹ܵ��ĸ߶ȣ�����pipeDown�ܵ�������
                this.pipeDownH = this.height - Pipe.pipeDownHeight;
                //���³���ʱ���¹ܵ��ĸ߶ȣ�����pipeUp�ܵ�������
                this.pipeUpH = this.height + this.disSpace;
            }



        }
    })
    w.Pipe = Pipe;
}(window))