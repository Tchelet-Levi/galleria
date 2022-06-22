class Picture {
  constructor(title, artist, value, isInStock, imgUrl) {
    this.title = title;
    this.artist = artist;
    this.value = value;
    this.isInStock = isInStock;
    this.imgUrl = imgUrl;
  }

  // Why make a getTitle() function when I can just call Picture.title?
  // But I'll still add it to the class, however..
  // * this is never used. I am using picture.title instead.
  getTitle() {
    return this.title;
  }
}

export let pictureArray = [
  new Picture(
    "Mona Lisa",
    "Leonardo Da Vinci",
    "68,000,000",
    true,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1374px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  ),

  new Picture(
    "Starry Night",
    "Vincent VanGogh",
    "156,000,000",
    true,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  ),

  new Picture(
    "The Great Wave of Kanagawa (神奈川沖浪裏)",
    "Katsushika Hokusai",
    "500,000,000",
    true,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1920px-Tsunami_by_hokusai_19th_century.jpg"
  ),

  new Picture(
    "The Persistence of Memory",
    "Salvador Dali",
    "30,000,000",
    false,
    "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
  ),

  new Picture(
    "The Last Supper",
    "Leonardo Da Vinci",
    "420,000,00",
    false,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1920px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
  ),
];
