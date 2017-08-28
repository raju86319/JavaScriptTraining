var Youtube = (function() {
    "use strict";
    function Youtube() {};
    Youtube.prototype.renderCard = function(card, index) {
        let t = document.querySelector('#videos-template');
        let clone = document.importNode(t.content, true);
        clone.querySelector('.videos-div').setAttribute('id', 'video_' + index);

        let imgEl = clone.querySelector('img');
        imgEl.setAttribute('src', card.snippet.thumbnails.medium.url);

        let title = clone.querySelector('.title');
        let aTag = document.createElement('a');
        aTag.setAttribute('href', CONSTANTS.get('YOUTUBE_WATCH_LINK') + card.id.videoId);
        aTag.setAttribute('target', '_blank');
        aTag.appendChild(document.createTextNode(card.snippet.title));
        title.appendChild(aTag);

        let channelTitle = clone.querySelector('.channelTitle');
        channelTitle.appendChild(document.createTextNode(card.snippet.channelTitle));

        let publishedDate = clone.querySelector('.publishedDate');
        publishedDate.appendChild(document.createTextNode(utility.getFormattedDate(card.snippet.publishedAt)));

        let description = clone.querySelector('.description');
        description.appendChild(document.createTextNode(card.snippet.description));

        return clone;
    }
    Youtube.prototype.renderCards = function() {
        let cardsData = utility.getTotalCards();
        let allCardsEl = document.createElement('div');
        let allCardsFragment = document.createDocumentFragment();
        let numberOfCards = utility.getNumberOfCardsToRender();
        let startIndex = utility.getStartIndexForPage();

        this.clearSearchResults();

        allCardsEl.setAttribute('id', 'search-results');
        allCardsEl.classList.add('search-results');
        
        for (let i=startIndex; i < (startIndex + numberOfCards); i++) {
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
        let allcardsEl = document.querySelector('#search-results');
        if (allcardsEl) {
            allcardsEl.parentElement.removeChild(allcardsEl);
        }
    }
    Youtube.prototype.attachPageChangeListener = function() {
        let paginationControlsEl = document.querySelector('#pagination').firstElementChild;
        paginationControlsEl.addEventListener('click', (evt) => {
            if (evt.target.tagName === 'A') {
                utility.setCurrentPage(evt.target.text);
                this.renderCards();
                pagination.markCurrentPageActive();
            }
        });
    }
    return Youtube;
})();
