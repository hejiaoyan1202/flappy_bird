/**
 * Created by Administrator on 2016/7/21 0021.
 */

(function (w) {
    //����
    function Birds(x, y, w, h) {
        //1.1δ��ʼ������ʱ������
        if (!Birds.isInit) {
            throw '���ȳ�ʼ��Bird�࣡������ذɣ�';
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
        //1��������ƻ�����ʼ��
        Birds.ctx = ctx;

        //2����birds�����ͼƬ���󣬻��ͼ����Դ
        Birds.birdsImg = birdsImg;
        Birds.birdsWidth = Birds.birdsImg.width / 3;
        Birds.birdsHeight = Birds.birdsImg.height;

        //1.2 �����������ĳ�ʼ�����������Ҵ�����һ���������ʼ����ɣ����Դ���ʵ��
        if (ctx) {
            Birds.isInit = true;
        }
    }

//��Birdsԭ������չ����
    extend(Birds.prototype, {
        draw: function () {
            //////���뱣��С��ĳ�ʼ״̬
            Birds.ctx.save();
            //3��ʵ����������У�С����ԭ����תһ���Ƕȣ�1��ƽ������ϵ2)��ת������3)ȷ��С����������ϵ�е�λ�ÿ�߸���һ��
            Birds.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
            var angle = 8 * this.speed;
            angle=angle>60?0:angle;
            Birds.ctx.rotate(Math.PI / 180 * angle);


            //1������С��ʵ�����ƣ�1)��ʼ��С����ƻ��� 2����ȡͼ����Դ
            Birds.ctx.drawImage(Birds.birdsImg,
                this.clipX, this.clipY, Birds.birdsWidth, Birds.birdsHeight,
                -this.w / 2, -this.h / 2, this.w, this.h);
            //////����ع���ǰ�����״̬���൱���µĿ�ʼ
            Birds.ctx.restore();
        },


        update: function () {
            //2����С��չ�ֳ����ɡ���״̬��Ȼ��������
            this.clipX = Birds.birdsWidth * this.index;
            this.index++;
            this.index = this.index > 2 ? 0 : this.index;

            //С�������ٶȣ�����Ӽ��ٶ�
            this.y += this.speed;
            /////////////////////////////////////С������ļ��ٶȣ�Խ��Խ��
            this.speed += this.speedPlus;

        }
    })

    w.Birds = Birds;

}(window))
