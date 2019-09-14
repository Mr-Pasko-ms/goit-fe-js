function calculateEngravingPrice(message, pricePerWord) {
  console.log(`Цена за гравировку - ${(message.split(' ').length) * pricePerWord}`);
}
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10); // 80
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20); // 160
calculateEngravingPrice('Donec orci lectus aliquam est', 40); // 200
calculateEngravingPrice('Donec orci lectus aliquam est', 20); // 100
