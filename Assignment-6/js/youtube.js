/// <reference path="../karma.conf.js" />
var Youtube = (function() {
    "use strict";
    function Youtube() {};
    Youtube.prototype.renderCard = function(card, index) {
        var t = document.querySelector('#videos-template');
        var clone = document.importNode(t.content, true);
        clone.querySelector('.videos-div').setAttribute('id', 'video_' + index);

        var imgEl = clone.querySelector('img');
        imgEl.setAttribute('src', card.snippet.thumbnails.medium.url);

        var title = clone.querySelector('.title');
        var aTag = document.createElement('a');
        aTag.setAttribute('href', CONSTANTS.get('YOUTUBE_WATCH_LINK') + card.id.videoId);
        aTag.setAttribute('target', '_blank');
        aTag.appendChild(document.createTextNode(card.snippet.title));
        title.appendChild(aTag);

        var channelTitle = clone.querySelector('.channelTitle');
        channelTitle.appendChild(document.createTextNode(card.snippet.channelTitle));

        var publishedDate = clone.querySelector('.publishedDate');
        publishedDate.appendChild(document.createTextNode(utility.getFormattedDate(card.snippet.publishedAt)));

        var description = clone.querySelector('.description');
        description.appendChild(document.createTextNode(card.snippet.description));

        return clone;
    }
    Youtube.prototype.renderCards = function() {
        var cardsData = utility.getTotalCards();
        var allCardsEl = document.createElement('div');
        var allCardsFragment = document.createDocumentFragment();
        var numberOfCards = utility.getNumberOfCardsToRender();
        var startIndex = utility.getStartIndexForPage();

        this.clearSearchResults();

        allCardsEl.setAttribute('id', 'search-results');
        allCardsEl.classList.add('search-results');
        
        for (var i=startIndex; i < (startIndex + numberOfCards); i++) {
            if (cardsData[i]) {
                allCardsFragment.appendChild(this.renderCard(cardsData[i], i));
            } else {
                // get next page of records
            }
        }

        allCardsEl.appendChild(allCardsFragment);
        document.body.appendChild(allCardsEl);

        pagination.renderPaginationControls(cardsData);
        
        this.attachPageChangeListener();
    }
    Youtube.prototype.clearSearchResults = function() {
        var allcardsEl = document.querySelector('#search-results');
        if (allcardsEl) {
            allcardsEl.parentElement.removeChild(allcardsEl);
        }
    }
    Youtube.prototype.attachPageChangeListener = function () {
    	var self = this;
    	var paginationControlsEl = document.querySelector('#pagination').firstElementChild;
    	paginationControlsEl.addEventListener('click', function (evt) {
    		if (evt.target.tagName === 'A') {
    			utility.setCurrentPage(evt.target.text);
    			self.renderCards();
    			pagination.markCurrentPageActive();
    		}
    	});
    }
    return Youtube;
})();

