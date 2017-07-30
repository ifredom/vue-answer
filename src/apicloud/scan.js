
function apicloud_Scan(){
  return   new Promise((resolve, reject) => {
  
    var FNScanner = api.require('FNScanner');
    FNScanner.openScanner({
      autorotation: true,
    },function( ret, err ){
      if( ret ){
        resolve(ret)
      }else{
        reject(err)
      }
    });


  })
}

export  {apicloud_Scan};
