const database =
{
    "kolay": [
      {
        "id": 1,
        "question": "If komutu ne işe yarar?",
        "options": [
          "Döngü oluşturmak için kullanılır",
          "Koşullu ifadeler oluşturmak için kullanılır",
          "Değişken tanımlamak için kullanılır",
          "Fonksiyon tanımlamak için kullanılır"
        ],
        "correctAnswer": "Koşullu ifadeler oluşturmak için kullanılır",
        "explanation": "If komutu, belirli bir koşulun doğru olup olmadığını kontrol eder ve ona göre kod bloklarını çalıştırır."
      },
      {
        "id": 2,
        "question": "HTML'de paragraf oluşturmak için hangi etiket kullanılır?",
        "options": [
          "<paragraph>",
          "<p>",
          "<para>",
          "<text>"
        ],
        "correctAnswer": "<p>",
        "explanation": "HTML'de paragraf oluşturmak için <p> etiketi kullanılır."
      },
      {
        "id": 3,
        "question": "Değişkene değer atamak için hangi operatör kullanılır?",
        "options": [
          "==",
          "=>",
          "=",
          ":="
        ],
        "correctAnswer": "=",
        "explanation": "Değişkene değer atamak için eşittir (=) operatörü kullanılır."
      },
      {
        "id": 4,
        "question": "CSS'te bir sınıfa stil vermek için hangi seçici kullanılır?",
        "options": [
          "#",
          ".",
          "&",
          "@"
        ],
        "correctAnswer": ".",
        "explanation": "CSS'te bir sınıfa stil vermek için nokta (.) seçicisi kullanılır. Örneğin: .myClass"
      },
     
    ],
    "orta": [
      {
        "id": 1,
        "question": "JavaScript'te bir dizinin elemanlarını döngülemek için en uygun yöntem hangisidir?",
        "options": [
          "for döngüsü",
          "while döngüsü",
          "forEach metodu",
          "if-else yapısı"
        ],
        "correctAnswer": "forEach metodu",
        "explanation": "forEach metodu, bir dizinin tüm elemanlarını kolayca döngülemek için tasarlanmıştır ve modern JavaScript'te tercih edilen yöntemdir."
      },
      {
        "id": 2,
        "question": "Aşağıdakilerden hangisi bir CSS seçici (selector) değildir?",
        "options": [
          ":hover",
          ":active",
          ":function",
          ":focus"
        ],
        "correctAnswer": ":function",
        "explanation": ":function geçerli bir CSS seçici değildir. Diğerleri ise CSS'de pseudo-class olarak kullanılır."
      },
      {
        "id": 3,
        "question": "localStorage ve sessionStorage arasındaki fark nedir?",
        "options": [
          "localStorage daha büyük veri depolayabilir",
          "sessionStorage verileri tarayıcı kapatıldığında silinir",
          "localStorage daha hızlıdır",
          "sessionStorage şifrelenmiştir"
        ],
        "correctAnswer": "sessionStorage verileri tarayıcı kapatıldığında silinir",
        "explanation": "localStorage verileri kalıcı olarak saklar, sessionStorage ise verileri yalnızca tarayıcı oturumu boyunca (tarayıcı kapatılana kadar) saklar."
      },
      {
        "id": 4,
        "question": "Bir JSON dosyasını JavaScript'te nasıl bir JavaScript nesnesine dönüştürürsünüz?",
        "options": [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.decode()"
        ],
        "correctAnswer": "JSON.parse()",
        "explanation": "JSON.parse() metodu, JSON formatındaki bir string'i JavaScript nesnesine dönüştürür."
      },
      {
        "id": 5,
        "question": "Responsive tasarım için CSS'te en yaygın kullanılan özellik hangisidir?",
        "options": [
          "flexbox",
          "grid",
          "media queries",
          "animations"
        ],
        "correctAnswer": "media queries",
        "explanation": "Media queries (@media), farklı ekran boyutları için farklı stillerin tanımlanmasını sağlayarak responsive tasarım oluşturmak için kullanılır."
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 6
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 7
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 8
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 9
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 10
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 11
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 12
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 13
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 14
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 15
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 16
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 17
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 18
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 19
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 20
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 21
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 22
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 23
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 24
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 25
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 26
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 27
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 28
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 29
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 30
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 31
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 32
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 33
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 34
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 35
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 36
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 37
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 38
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 39
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 40
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 41
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 42
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 43
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 44
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 45
      },
      {
        "question": "Python'da liste elemanlarını sıralamak için hangi metod kullanılır?",
        "options": [
          "sort()",
          "filter()",
          "order()",
          "arrange()"
        ],
        "correctAnswer": "sort()",
        "explanation": "sort() metodu, Python'da listeleri küçükten büyüğe sıralamak için kullanılır.",
        "id": 46
      },
      {
        "question": "SQL'de veri güncellemek için hangi komut kullanılır?",
        "options": [
          "UPDATE",
          "SET",
          "CHANGE",
          "MODIFY"
        ],
        "correctAnswer": "UPDATE",
        "explanation": "UPDATE komutu, SQL'de mevcut kayıtların verilerini güncellemek için kullanılır.",
        "id": 47
      },
      {
        "question": "JavaScript'te arrow function ifadesi hangisidir?",
        "options": [
          "() => {}",
          "function() {}",
          "(=>) {}",
          "[] => {}"
        ],
        "correctAnswer": "() => {}",
        "explanation": "Arrow function sözdizimi modern JavaScript'te sıkça kullanılır. Yazımı: () => {}",
        "id": 48
      },
      {
        "question": "CSS grid sisteminde satır boşluğu hangi özellik ile belirlenir?",
        "options": [
          "row-gap",
          "grid-row",
          "gap-row",
          "line-height"
        ],
        "correctAnswer": "row-gap",
        "explanation": "'row-gap', CSS grid sisteminde satırlar arasındaki boşluğu belirler.",
        "id": 49
      },
      {
        "question": "Bir Python sözlüğünde tüm anahtarları almak için hangi metod kullanılır?",
        "options": [
          "keys()",
          "get()",
          "values()",
          "items()"
        ],
        "correctAnswer": "keys()",
        "explanation": "keys() metodu bir sözlükteki tüm anahtarları döndürür.",
        "id": 50
      }
    ],
    "zor": [
      {
        "id": 1,
        "question": "JavaScript'te 'Promise.all()' metodu ne işe yarar?",
        "options": [
          "Tüm Promise'lerin tamamlanmasını bekler ve sonuçları bir dizi olarak döndürür",
          "Yalnızca ilk tamamlanan Promise'in sonucunu döndürür",
          "Promise'leri sırayla çalıştırır",
          "Promise'leri iptal eder"
        ],
        "correctAnswer": "Tüm Promise'lerin tamamlanmasını bekler ve sonuçları bir dizi olarak döndürür",
        "explanation": "Promise.all() metodu, bir dizi Promise alır ve tümü başarıyla tamamlandığında sonuçları içeren bir dizi ile çözümlenen yeni bir Promise döndürür."
      },
      {
        "id": 2,
        "question": "Web uygulamalarında CORS nedir ve ne amaçla kullanılır?",
        "options": [
          "Client-side rendering tekniği",
          "Tarayıcı tarafından uygulanan, farklı kaynaklardan gelen istekleri kontrol eden güvenlik mekanizması",
          "CSS framework'ü",
          "Web sunucusu optimizasyon aracı"
        ],
        "correctAnswer": "Tarayıcı tarafından uygulanan, farklı kaynaklardan gelen istekleri kontrol eden güvenlik mekanizması",
        "explanation": "CORS (Cross-Origin Resource Sharing), bir web sayfasının farklı kaynaklardan (domain, protokol veya port) kaynak istemesini kısıtlayan bir tarayıcı güvenlik mekanizmasıdır."
      },
      {
        "id": 3,
        "question": "JavaScript'te 'closure' kavramı neyi ifade eder?",
        "options": [
          "Global değişkenleri yerel kapsamda kullanma",
          "Bir fonksiyonun kendi dışındaki kapsamdaki değişkenlere erişebilmesi",
          "JavaScript kodunu derlemek için kullanılan araç",
          "DOM manipülasyonu tekniği"
        ],
        "correctAnswer": "Bir fonksiyonun kendi dışındaki kapsamdaki değişkenlere erişebilmesi",
        "explanation": "Closure, bir fonksiyonun kendi dışındaki kapsamdaki değişkenlere erişebilme ve bu değişkenleri hatırlayabilme özelliğidir."
      },
      {
        "id": 4,
        "question": "HTTP ve WebSocket protokolleri arasındaki temel fark nedir?",
        "options": [
          "HTTP daha hızlıdır",
          "WebSocket yalnızca metin verisi iletebilir",
          "HTTP istek-yanıt modelini kullanırken, WebSocket tam çift yönlü iletişim sağlar",
          "WebSocket yalnızca JavaScript ile kullanılabilir"
        ],
        "correctAnswer": "HTTP istek-yanıt modelini kullanırken, WebSocket tam çift yönlü iletişim sağlar",
        "explanation": "HTTP, istemcinin istek göndermesi ve sunucunun yanıt vermesi şeklinde çalışır. WebSocket ise bağlantı kurulduktan sonra hem istemci hem de sunucu, herhangi bir zamanda veri gönderebilir."
      },
      {
        "id": 5,
        "question": "Webpack'in temel amacı nedir?",
        "options": [
          "JavaScript kodunu test etmek",
          "Modern JavaScript özelliklerini eski tarayıcılarda çalışacak koda dönüştürmek",
          "Modülleri ve bağımlılıkları birleştirip, optimize edilmiş paketler oluşturmak",
          "Web sunucusu olarak çalışmak"
        ],
        "correctAnswer": "Modülleri ve bağımlılıkları birleştirip, optimize edilmiş paketler oluşturmak",
        "explanation": "Webpack, modül paketleyicisidir. Uygulamanın tüm modüllerini ve bağımlılıklarını analiz eder, dönüştürür ve optimize edilmiş paketler oluşturur."
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 6
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 7
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 8
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 9
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 10
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 11
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 12
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 13
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 14
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 15
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 16
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 17
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 18
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 19
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 20
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 21
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 22
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 23
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 24
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 25
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 26
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 27
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 28
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 29
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 30
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 31
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 32
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 33
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 34
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 35
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 36
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 37
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 38
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 39
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 40
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 41
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 42
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 43
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 44
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 45
      },
      {
        "question": "Python'da generator nedir?",
        "options": [
          "Belleği etkin kullanan iterator üreticisi",
          "Veritabanı işlemleri yapan nesne",
          "CSS sınıfı",
          "Web framework bileşeni"
        ],
        "correctAnswer": "Belleği etkin kullanan iterator üreticisi",
        "explanation": "Generator fonksiyonları, yield kullanarak belleği verimli kullanan iterator’lar üretir.",
        "id": 46
      },
      {
        "question": "REST API'de POST metodu ne işe yarar?",
        "options": [
          "Veri siler",
          "Veri günceller",
          "Yeni veri oluşturur",
          "Veriyi alır"
        ],
        "correctAnswer": "Yeni veri oluşturur",
        "explanation": "POST metodu, genellikle yeni bir kaynak oluşturmak için kullanılır.",
        "id": 47
      },
      {
        "question": "JavaScript'te event bubbling nedir?",
        "options": [
          "Olayların en dış kapsayıcıdan içe doğru iletilmesi",
          "Olayların içten dışa doğru iletilmesi",
          "Yalnızca hedef elementte çalışması",
          "Event listener'ın silinmesi"
        ],
        "correctAnswer": "Olayların içten dışa doğru iletilmesi",
        "explanation": "Event bubbling, bir olayın hedef elementten başlayıp yukarıya doğru (parentlara) yayılmasıdır.",
        "id": 48
      },
      {
        "question": "SQL'de INDEX ne işe yarar?",
        "options": [
          "Tablo siler",
          "Veri şifreler",
          "Sorguları hızlandırır",
          "Yedekleme yapar"
        ],
        "correctAnswer": "Sorguları hızlandırır",
        "explanation": "INDEX, veritabanında arama işlemlerini hızlandırmak için kullanılır.",
        "id": 49
      },
      {
        "question": "React'te state değiştiğinde ne olur?",
        "options": [
          "Bileşen yeniden render edilir",
          "Sayfa yeniden yüklenir",
          "State silinir",
          "Hiçbir şey olmaz"
        ],
        "correctAnswer": "Bileşen yeniden render edilir",
        "explanation": "React'te state değiştiğinde, ilgili bileşen yeniden render edilir.",
        "id": 50
      }
    ]
  }