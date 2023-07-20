import md5 from "blueimp-md5"
export const utils = {
  inArray(search,array){
    for(let i in array){
      if(array[i]===search){
        return true;
      }
    }
    return false;
  },
  getRandomData(){
    return md5(new Date().getTime() + Math.random() + "");
  },
  getContentId(content){
    return md5(content);
  },
  arrayFormats(input,changes){
    let  toRawType = value => {
      return Object.prototype.toString.call(value).slice(8, -1);
    }
    let type = toRawType(input);
    if(type === 'Array'){
      return input.map( (item)=> {
        return utils.arrayFormats(item,changes);
      });
    } else if(type === 'Object'){
      for(let key  in input){
        input[key] = utils.arrayFormats(input[key],changes);
      }
      return input;
    } else {
      //console.log();
      return changes[input + ''] !== undefined ? changes[input] : input;
    }
  },
  sendId() {
    let timeStamp = this.currentTime();
    let randId = this.randomNumber(100000, 999999);
    return timeStamp + "-" + randId
  },
  currentTime() {
    return (new Date()).valueOf()
  },
  randomNumber(minNum, maxNum) {
    let random = 0;
    switch (arguments.length) {
      case 1:
        random = parseInt(Math.random() * minNum + 1 +"", 10);
        break;
      case 2:
        random = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        break;
    }
    return random;
  },
  isMobile(){
    let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (mobile) {
      return true;
    } else {
      //假设小于等于 768px 的设备视为移动设备
      return window.innerWidth <= 768;
    }
  }

}
