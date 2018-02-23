//  把请求jsonp通用的参数暴露出去
export const commonParams = {
  g_tk: 5381,
  format: 'json',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0