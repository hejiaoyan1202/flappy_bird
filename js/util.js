/**
 * Created by Administrator on 2016/7/21 0021.
 */
function extend(obj,obj2){
    for(var key in obj2){
        //obj2�̳е����Բ�copy
        if(!obj2[key].hasOwnProperty(key)){
            obj[key]=obj2[key];
        }

    }
}


//util�������棬����������ַ���
var util={
    extend:extend
}