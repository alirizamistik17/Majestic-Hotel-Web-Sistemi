# 🏨 Majestic Hotel Web Sistemi

Majestic Hotel Web Sistemi, modern, minimalist ve lüks otel konseptine uygun olarak tasarlanmış, zengin kullanıcı deneyimi sunan statik bir web arayüzü projesidir. Proje, Marmara Üniversitesi BLM3008M Yazılım Mühendisliği dersi projesi kapsamında **Grup 23** tarafından geliştirilmiştir.

---

## 🚀 Proje Hakkında

Bu proje, bir butik otelin kurumsal web kimliğini temsil etmek üzere tasarlanmıştır. Kullanıcıların otel odalarını inceleyebileceği, sunulan spa, havuz, restoran gibi olanakları keşfedebileceği, otelin harita üzerindeki konumuna erişebileceği ve dinamik bir rezervasyon formu ile rezervasyon taleplerini yapılandırabileceği modern bir mimariye sahiptir.

Proje, istemci taraflı **Sorumlulukların Ayrılması (Separation of Concerns)** ilkesine bağlı kalınarak **HTML5**, **CSS3** ve **JavaScript / jQuery** teknolojileriyle geliştirilmiştir.

---

## ✨ Özellikler

*   **Duyarlı (Responsive) Tasarım:** Mobil, tablet ve masaüstü cihazlar için tam uyumlu, akıcı mizanpaj tasarımı.
*   **Görsel Slider (Carousel) Modülleri:** Anasayfa ana galeri ve müşteri yorumları alanları için dokunmatik ekran uyumlu, draggable (sürükle-bırak) özellikli görsel kaydırıcılar.
*   **CSS3 Geçiş Animasyonlu Oda Kartları:** `rooms.html` sayfasında yer alan 6 farklı oda tipinin fiyat ve özellik detaylarının, fareyle üzerine gelindiğinde (hover) CSS3 transition animasyonları ile akıcı sunumu.
*   **Dinamik Rezervasyon Formu:** `bb.html` sayfasında eklentilerle zenginleştirilmiş rezervasyon arayüzü:
    *   **Tarih Aralığı Seçici:** pickmeup.js ile giriş ve çıkış tarihlerini tek seferde seçebilme.
    *   **Sayı Sayaç Butonları:** handleCounter.js ile oda ve kişi sayılarını sınır değer analizi koruması altında (+/-) butonlarıyla belirleyebilme.
*   **Google Maps Entegrasyonu:** `contact.html` sayfasında otelin tam konumunu gösteren, özelleştirilebilir interaktif harita gösterimi.
*   **Yukarı Dön Butonu (Scroll-to-Top):** scrollUp.js eklentisi yardımıyla uzun sayfalarda kullanıcı deneyimini iyileştiren animasyonlu yukarı dön butonu.

---

## 🛠️ Kullanılan Teknolojiler ve Kütüphaneler

### Temel Teknolojiler
*   **HTML5:** Semantik etiket yapısıyla standartlara uygun içerik iskeleti.
*   **CSS3:** Özel renk paleti (Lüks Koyu Tema: `#211f17`, Vurgu Rengi: `#ec3c6a`), özel yazı tipleri (Open Sans) ve modern mizanpaj kuralları.
*   **JavaScript (ES6+) & jQuery:** Dinamik etkileşimler ve DOM manipülasyonu.

### Üçüncü Parti jQuery Eklentileri
*   **Görsel Kaydırıcı:** [Slick Slider](https://github.com/kenwheeler/slick) - Sürükle-bırak destekli responsive kaydırıcı.
*   **Tarih Seçici:** [PickMeUp](https://github.com/nazar-pc/PickMeUp) - Hafif ve özelleştirilebilir datepicker eklentisi.
*   **Sayaç Kontrolü:** [Handle Counter](https://github.com/nick-running/handle-counter) - Sayısal giriş alanları için sayaç eklentisi.
*   **Sayfa Başı Dönüş:** [ScrollUp](https://github.com/markgoodyear/scrollup) - Yumuşak geçişli yukarı kaydırma eklentisi.

---

## 📂 Dosya Yapısı

```text
Github_yükle/
├── index.html          # Anasayfa (Genel tanıtım, Slick Slider galeri ve yorumlar)
├── rooms.html          # Odalar Sayfası (Oda fiyat ve özellik listelemeleri)
├── explore.html        # Keşfet Sayfası (Otel imkanları ve aktiviteler)
├── bb.html             # Rezervasyon Sayfası (Rezervasyon formu, sayaçlar, tarih seçici)
├── contact.html        # İletişim Sayfası (İletişim formu ve Google Maps entegrasyonu)
├── check_doc.py        # Dökümantasyon ve Türkçe karakter kontrolü için statik test betiği
├── css/
│   ├── main.css        # Projeye özel ana stil dosyası (Koyu tema & tipografi)
│   ├── slick.css       # Slick Slider temel stil dosyası
│   ├── slick-theme.css # Slick Slider tema stil dosyası
│   ├── pickmeup.css    # PickMeUp tarih seçici stil dosyası
│   └── handle-counter.min.css # Handle Counter sayaç stil dosyası
├── dist/
│   ├── demo.js         # Özel eklenti başlatma ve sayfa davranış kodları
│   ├── slick.js        # Slick Slider kütüphane dosyası
│   ├── pickmeup.min.js # PickMeUp kütüphane dosyası
│   ├── handleCounter.js# Handle Counter kütüphane dosyası
│   └── jquery.scrollUp.js # ScrollUp kütüphane dosyası
└── images/             # Projede kullanılan tüm görsel varlıklar ve ikonlar
```

---

## ⚙️ Kurulum ve Çalıştırma

Proje tamamen istemci taraflı (client-side) statik dosyalardan oluştuğu için herhangi bir backend sunucusu, veritabanı kurulumu veya derleme (build) işlemi gerektirmez.

1.  Bu depoyu yerel bilgisayarınıza klonlayın veya ZIP olarak indirip çıkartın:
    ```bash
    git clone https://github.com/alirizamistik17/CS_codes_2021.git
    ```
2.  Proje klasörünün içine girin.
3.  `index.html` dosyasına herhangi bir modern web tarayıcısında (Chrome, Firefox, Safari, Edge, vb.) çift tıklayarak projeyi anında çalıştırabilirsiniz.

---

## 🧪 Test Süreçleri

Proje, yazılım mühendisliği gerçekleştirim kriterlerine göre hem statik hem de dinamik test teknikleriyle doğrulanmıştır:
*   **Statik Testler:** Projenin HTML5 ve CSS3 kodları W3C Validator standartlarına göre incelenmiş; geçersiz kod kullanımları temizlenmiştir. Manuel kod gözden geçirme (Code Review) süreçleriyle kullanılmayan atıl CSS sınıfları ve JS değişkenleri kod tabanından arındırılmıştır.
*   **Dinamik Testler:** Rezervasyon formunda (`bb.html`) sınır değer analizi testleri yapılmıştır. Oda ve kişi sayısının 1'in altına düşmediği ve 100 limitini aşmadığı doğrulanmıştır. Tarih aralığında geçmiş tarih seçimi ve mantıksız tarih aralıkları (çıkış tarihinin giriş tarihinden önce olması) engellenmiştir.

---

## 👥 Geliştiriciler (Grup 23)

*   **Ali Rıza Mıstık** - 170423851 (İstemci mimarisi, form validasyonları, jQuery eklentileri entegrasyonu, kodlama ve test süreçleri)
*   **Akil Rahman Turza** - 170422922 (UI/UX tasarımı, sayfa düzenleri, Slick Slider entegrasyonu, statik analiz ve test doğrulama)

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına (varsa) göz atabilirsiniz.