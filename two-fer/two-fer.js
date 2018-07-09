var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  return (who == null) ? 'One for you, one for me.' : 'One for ' + who + ', one for me.';
};

module.exports = TwoFer;
