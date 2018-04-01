function parseTj(arr) {
  arr.forEach(function(obj,val) {
    if(obj.tj == true){
      arr.unshift(arr[val]);
      arr.splice(val+1,1);
    }
  }, this);
  return arr
}

export{
  parseTj
}
