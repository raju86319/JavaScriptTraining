function createSecretHolder(secret) {
    var secret = secret;
    this.setSecret = function (sec) {
        secret = sec;
    }
    this.getSecret = function () {
        return secret;
    }
    return this;
}
