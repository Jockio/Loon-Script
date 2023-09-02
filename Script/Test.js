body = $response.body.replace(/vip_type":0/g, 'vip_type":1').replace(/expire_time":0/g, 'expire_time":4100726622').replace(/ai_book_count":0/g, 'ai_book_count":20').replace(/month":0/g, 'month":12').replace(/year":0/g, 'year":2023');
$done({body});
