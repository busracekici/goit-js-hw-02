// Tamir droidleri satış istasyonu, satış departmanı için yazılımı yazmaya hazır,
//     yapmanız gereken tek şey, tamir droidleri satın alımı hakkında bir mesaj oluşturan
// makeTransaction(quantity, pricePerDroid, customerCredits) fonksiyonunu tanımlamaktır.

// Çağrılırken üç parametre alacak şekilde tanımlanmıştır:

// quantity - sipariş edilen droid miktarı
// pricePerDroid - bir droidin fiyatı
// customerCredits - müşterinin hesabındaki toplam miktar

// Fonksiyonu aşağıdaki gibi tamamla:

// Siparişin toplam tutarını(tüm droid siparişlerinin toplam değeri) saklamak için bir değişken
// tanımla ve bu tutarı hesaplamak için bir ifade ata.
// Müşterinin siparişi ödeyip ödeyemeyeceğini kontrol et:
// Ödenecek tutar, müşterinin hesabındaki krediden fazla ise fonksiyon, "Insufficient funds!" dizesini
// döndürmelidir.
// Aksi takdirde, işlev "You ordered <quantity> droids worth <totalPrice> credits!" dizesini döndürmelidir,
//     burada < quantity >, sipariş edilen droid miktarıdır ve < totalPrice >, bunların toplam değeridir.

//KOD AŞAMALARI
// quantity - sipariş edilen droid miktarı
// pricePerDroid - bir droidin fiyatı
// customerCredits - müşterinin hesabındaki toplam miktar
// sipariş edilen droid miktarı ile fiyatını çarp bu değer müşterinin toplam parasına eşit veya az ise
//"You ordered 5 droids worth 15000 credits!" döndür değilse
//"Insufficient funds!" döndür

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice <= customerCredits) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    return 'Insufficient funds!';
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
