/**
 * Created by Administrator on 2016/7/21 0021.
 */
//������Ϸ�����ͼ����Դ
(function (w) {

    //�����洢ͼƬ��ַ�Ķ���
    var imgSrc = {
        birds: "images/birds.png",
        land: "images/land.png",
        pipedown: "images/pipeDown.png",
        pipeup: "images/pipeUp.png",
        sky: "images/sky.png"
    }
    //�����洢��ȾͼƬ�Ķ���
    var imgObj = {};
    var imgTemp = null;
    var imgCount = 0;

    function getImgObj(fn) {
        for (var key in imgSrc) {
            //�����µ�ͼƬ��Դ
            imgTemp = new Image();
            imgTemp.src = imgSrc[key];
            imgObj[key] = imgTemp;

            //����ͼƬ�Ƿ������,ÿ����һ��imgcount++,ÿ�δ���һ�����������Ƿ������ϣ�
            imgTemp.addEventListener("load", function () {
                imgCount++;
                if (imgCount > 4) {
                    //console.log("ͼƬ��Դ�������");
                    fn(imgObj);
                }
            })
        }
    }

    w.getImgObj = getImgObj;

//����Ϸ��ģ���е���getImgObj����ʱ�贫��ʵ���ֵ��������β���fn()���գ�
// ʵ����ͼƬ������ɺ���ã�imgOjΪʵ�Σ�imgobjΪ�βν��գ����ƴ˴���

    //getImgObj(function(imgobj){});

}(window))