// iPhoneまたは、Androidの場合は振り分けを判断
if (document.referrer.indexOf('oca.ac.jp') == -1 && ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
    if(confirm('大阪ECOへようこそ。\nこのサイトにはスマートフォン用のサイトがあります。\n表示しますか？')) {
        location.href = 'http://osaka-eco.ac.jp/';
    }
}