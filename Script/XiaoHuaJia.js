body = $response.body.replace(/vip":0/g, 'vip":1').replace(/vip_expire_time":0/g, 'vip_expire_time":4100726622').replace(/ai_book_count":0/g, 'ai_book_count":20').replace(/"_s":\{[^}]+\}/g, "\"tt\":\{\}");
$done({body});
