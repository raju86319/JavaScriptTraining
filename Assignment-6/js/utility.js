var Utility = (function () {
    var instance;
    "use strict";
    function Utility() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }
    Utility.prototype.setTotalCards = function (totalCards) {
        this.totalCards = (this.totalCards || []).concat(totalCards);
    }

    Utility.prototype.getTotalCards = function () {
        return this.totalCards;
    }

    Utility.prototype.resetTotalCards = function () {
        this.totalCards = [];
        this.currentPage = null;
    }

    Utility.prototype.setCurrentPage = function (pageNumber) {
        this.pageNumber = parseInt(pageNumber);
    }

    Utility.prototype.getCurrentPage = function () {
        return this.pageNumber || 1;
    }

    Utility.prototype.getNumberOfCardsToRender = function () {
        let windowWidth = window.innerWidth;
        let numberOfCards = 1;
        let eachCardWidth = 380;
        while (numberOfCards * eachCardWidth < windowWidth) {
            numberOfCards++;
        }
        return numberOfCards > 1 ? numberOfCards - 1 : 1;
    }

    Utility.prototype.getStartIndexForPage = function () {
        let numberOfCards = this.getNumberOfCardsToRender();
        let currentPage = this.getCurrentPage();
        return (currentPage * numberOfCards) - numberOfCards
    }

    Utility.prototype.getFormattedDate = function (date) {
        let dt = new Date(date);
        let month = dt.getMonth() + 1;
        let day = dt.getDate();
        let year = dt.getFullYear();
        return year + "-" + month + "-" + day;
    }
    return Utility;
})();