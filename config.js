/**
 * 小程序配置文件
 */



var host ="localhost:47847/api/oasis.ashx?action"//localhost
var config = {

  // 下面的地址配合云端 Server 工作
  host,

  //https-----------------------------------------

  // 登录地址，用于建立会话
  OnLogin: `https://${host}=OnLogin`,
  // 加密
  CheckWxOpenSignature: `https://${host}=CheckWxOpenSignature`,
  // 解密
  DecodeEncryptedData: `https://${host}=DecodeEncryptedData`,

  

  //http-----------------------------------------
  // //正式版图片地址
  MUrl: `http://m.xiaocong-media.com`,
  //新版服务器图片地址
  ImgUrl: `http://cdn.littleoasisgroup.com`,
 


};

module.exports = config