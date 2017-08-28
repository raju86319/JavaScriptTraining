var YoutubeApiCalls = (function(){
    "use strict";
   function YoutubeApiCalls(){};
   YoutubeApiCalls.prototype.makeCallToYoutubeApi = function(url, params){
    url = url + '?' + this.buildUrlFromParams(params);
        return new Promise(function(resolve, reject){
            fetch(url)
                .then(function (res) {
                    resolve(res.json());
                }, function (err) {
                    reject(err);
                });
        });
   }
     YoutubeApiCalls.prototype.buildUrlFromParams = function(inputParams) {
        var searchUrl = '';
        for (var value in inputParams) {
            if (searchUrl.length > 0) {
                searchUrl += '&';
            }
            searchUrl += encodeURI(value + '=' + inputParams[value]);
        }
        return searchUrl;
    }
    return YoutubeApiCalls;
})();