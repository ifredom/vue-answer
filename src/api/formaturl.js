/**
 * Created by Administrator on 2017/4/16 0016.
 */
export default {
  formatURL(obj){
    var params = new URLSearchParams();
    for(var item in obj){
      if(obj.hasOwnProperty(item)){
        params.append(item,obj.item);
      }
    }
    return params
  }
}
