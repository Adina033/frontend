function loadContent(page) {
    var dynamicContent = document.getElementById('dynamicContent');

    switch (page) {
       
        
        case 'ip':
            dynamicContent.innerHTML = '<p style="font-size:18">subnet mask: 255.255.192.0 <br>' +
            '11111111.11111111.11000000.00000000 <br>' +
            'subnet address: 192.168.192.0 <br>' +
            'n = 2^14−2 = 16382 <br>' +
            'Максимум хост саны n = ? <br>' +
            'host 1 address: 192.168.192.1 <br>' +
            'host n address: 192.168.255.254</p>' +
            '<img src="img/logo.png" alt="">';;
            break;
        case 'about':
            dynamicContent.innerHTML = '<p>1. **Flexbox же Grid Layout:** Колдонуучуга ыңгайлуу галереянын макетін түзүү үчүн `display: flex` же `display: grid` колдонуңуз. Бул сүрөттөрдү бөлүштүрүүнү оңой башкарууга мүмкүндүк берет.2. **Жауаптуу:** Галерея ар кандай түзмөктөрдө жана экрандын чечилишинде жакшы көрүнүшү үчүн стилдөө. Сиз стилдерди ар кандай шарттарга ылайыкташтыруу үчүн медиа сурамдарын колдоно аласыз.<br>'+
            '3. **Сүрөт стили:** Визуалдык тажрыйбаны жакшыртуу үчүн сүрөттөргө стилдерди колдонуу. Мисалы, бурчтарды тегеректөө, чапкыч эффекттер, ченеп (кичирейтүү), анимациялар ж.б.!</p>';
            break;
        case 'rest-api':
            dynamicContent.innerHTML = '<h1>rest api</h1>';
            break;
        
    }
}





