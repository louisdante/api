var twitter = require('twitter');
var twit = new twitter({
    consumerKey: 'Q2hlsb4hCHy1BfnEizbfIHc2e',
    consumerSecret: 't7a22U1AaE4x5AAcgwr6mIBIyx3aa9qCRGNsH5kucCQahrwwEn',
    access_token_key: '380363171-wOl8vL9R64j9lXMWdDUUhHG13tGAeTcws79Eb24u',
    access_token_secret: 'Ee8p2tAxK6HNBPDBQqffzYhCEVWlfDgFan7PR8jqAQmFy'
});

var options = { screen_name: 'sandagolcea',
                count: 3 };
T.get('statuses/user_timeline', options , function(err, data) {
  for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
  }
})