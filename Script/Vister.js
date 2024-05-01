/* 
  app下载地址：Vister看天下
  version: 1.0
  MITM = open3.vistastory.com
  http-response ^https?:\/\/open3\.vistastory\.com\/v3\/api\/(vip\/get_vip_info_and_recommend_mags|article\/article_detail2|article\/get_article_list_by_mag|my\/home\/get_home_center|vip\/get_vip_price_info|magazine\/mag_column_detail|magazine\/last_mag_2|magazine\/all_mag_page_3|magazine\/get_mag|mag\/pdf\/get_mag_pdf_list|mag\/pdf\/get_mag_pdf) requires-body=1,script-path=https://raw.githubusercontent.com/Jockio/Loon-Script/main/Script/Vister.js
 */ 
body = $response.body.replace(/isFree":0/g, 'isFree":1').replace(/isfree":0/g, 'isfree":1').replace(/isFreeMag":0/g, 'isFreeMag":1').replace(/isBuyMag":0/g, 'isBuyMag":1').replace(/expireVip":1/g, 'iexpireVip":0').replace(/isMiniVip":0/g, 'isMiniVip":1').replace(/isActive":0/g, 'isActive":1').replace(/isVip":0/g, 'isVip":1').replace(/endTime":\d{13}/g, 'endTime":4100726622000').replace(/isBuyMag":0/g, 'isBuyMag":1').replace(/isBuyArticle":0/g, 'isBuyArticle":1');
$done({body});
