/**
 * Created by Administrator on 2016/7/21 0021.
 */
function extend(obj,obj2){
    for(var key in obj2){
        //obj2继承的属性不copy
        if(!obj2[key].hasOwnProperty(key)){
            obj[key]=obj2[key];
        }

    }
}


//util对象里面，可以有许多种方法
var util={
    extend:extend
}