// Kullanıcı ülkesine(parametre olarak country) ürün teslimatının mümkün olup olmadığını kontrol eden
// ve sonuç hakkında bir mesaj döndüren getShippingCost(country) fonksiyonunu tanımlayın.Kesinlikle
// switch ifadesini kullanın.

// Gönderilen dize formatı "Shipping to <country> will cost <price> credits", burada < country > ve
//     < price > yerine ilgili değerleri yerleştirmek gereklidir.

// Ülke listesi ve teslimat maliyeti:

// China - 100 kredi
// Chile - 250 kredi
// Australia - 170 kredi
// Jamaica - 120 kredi
// Listeden görülebileceği gibi teslimat her yerde mümkün değil.Belirtilen ülke listede yer almıyorsa,
//     işlev "Sorry, there is no delivery to your country" dizesini döndürmelidir.

function getShippingCost(country) {
  let price;
  switch (country) {
    case 'China':
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;

    case 'Chile':
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;

    case 'Australia':
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;

    case 'Jamaica':
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;

    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
