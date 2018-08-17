var Cipher = function () {};

function Cipher (key) {
  if (key.length == 0) {
    throw new Error('Bad key');
  }
}

Cipher.prototype.encode = function () {
  
};

Cipher.prototype.decode = function (str) {
  
};

function randomGenerator (key) {
  var text = "";
  var key = /[a-z]/;
  for (var i = 0; i <= 100; i++){
    text += key.charAt(Math.floor(Math.random() * key.length));
    return text;
  }
};

module.exports = Cipher;