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
  bytesToSize: (bytes) => {
    if (bytes === 0) return '0 B';
    let k = 1000;
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  },
  dateFormat: ( date,time) => {
    const timestampToTime = (date) => {
      let Y = date.getFullYear() + "年";
      let M =
          (date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1) + "月";
      let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "日";
      return Y + M + D ;
    }

    let dateJson = new Date(date).toJSON();

    let myDateStr = new Date(+new Date(dateJson) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    let myDate =  new Date(Date.parse(myDateStr.replace(/-/g,  "/")));
    return timestampToTime(myDate);
  },
  getLastSegmentFromUrl:(url)=>{
    // 使用URL对象来解析URL
    const urlObj = new URL(url);

    // 获取pathname（路径部分）并用斜杠进行分割
    const segments = urlObj.pathname.split('/');

    // 去除可能的空白和空段，获取最后一个非空段
    let lastSegment = '';
    for (let i = segments.length - 1; i >= 0; i--) {
      if (segments[i].trim() !== '') {
        lastSegment = segments[i];
        break;
      }
    }
    // 返回最后一个非空段
    return lastSegment;
  }


}
