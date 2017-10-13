/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  // 在此处理单行数据
  const [num1, no, num2] = line.split(' ')
  // 返回处理后的结果
  return jian(num1, num2)
}

//减法
function jian(a, b) {
  var zong = [a, b];
  var fen = [];
  zong = getMax(zong[0], zong[1]);
  if(zong.length == 3) {
      alert("金币不足");
      return false;
  }
  zong[0] = zong[0].split('');
  zong[1] = zong[1].split('');
  var jialing;
  if(!(zong[0].length == zong[1].length)) {
      jialing = new Array(zong[0].length-zong[1].length+1).join('0');
      zong[1] = jialing.split('').concat(zong[1]);
  }
  var next = 0;
  for(var i=(zong[0].length-1); i>=0; i--) {
      var cha = Number(zong[0][i]) - Number(zong[1][i]) - next;
      next = 0;
      if(cha<0) {
          cha = cha + 10;
          next = 1;
      }
      fen.unshift(cha%10);
  }
  var result = fen.join('');
  if(result[0] == 0) {
      result = shanchuling(result);
  }
  return result;
}

//获取最大值
function getMax(a, b) {
  var result = [a, b];
  //如果a长度小于b长度
  if(a.length<b.length)
  {
      //b放前面
      result[0] = b;
      result[1] = a;
      //返回result长度为3，为了减法的不够减而准备
      result[2] = 'not';
      //返回最终数组
      return result;
  }
  //如果a长度等于b长度
  if(a.length == b.length) {
      //循环对比a,b里面的单个元素
      for(var i=0; i<a.length; i++) {
          if(result[0][i]>result[1][i]) {
              result[0] = a;
              result[1] = b;
              return result;
          }
          if(result[0][i]<result[1][i]) {
              result[0] = b;
              result[1] = a;
              result[2] = 'not';
              return result;
          }
          //假如全部相等，当最后一个元素，以上条件都不执行，则执行默认的返回结果
          if(i == a.length-1) {
              return result;
          }
      }
  }
  if(a.length>b.length) {
      return result;
  }
}

console.log(solution('1231231237812739878951331231231237812739878951331231231237812739878951331231231237812739878951331231231237812739878951331231231237812739870 - 89513312312312378127398789513312312312378127398789513312312312378127398789513'))
