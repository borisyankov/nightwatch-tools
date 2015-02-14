var crypto = require('crypto');

exports.randomString = function (count, customChars) {

    var chars = customChars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789',
        len = chars.length,
        rnd = crypto.pseudoRandomBytes(count),
        value = new Array(count);

    for (var i = 0; i < count; i++) {
        value[i] = chars[rnd[i] % len];
    }

    return value.join('');
};

exports.randomStringLowercase = function (count) {
    return randomString(count, 'abcdefghijklmnopqrstuwxyz');
};

exports.randomEmail = function () {
    return randomStringLowercase(10) + '@' + randomStringLowercase(10) + '.com';
};
