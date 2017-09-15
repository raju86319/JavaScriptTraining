var SearchComponent = (function () {
    //"use strict";
    function SearchComponent() { };
    SearchComponent.prototype.renderSearchComponent = function () {
        var searchSection = document.createElement('div');
        searchSection.classList.add('search-section');
        var searchEl = document.createElement('input');
        searchEl.setAttribute('type', 'text');
        searchEl.setAttribute('id', 'searchText');
        var searchButton = document.createElement('input');
        searchButton.setAttribute('type', 'button');
        searchButton.setAttribute('value', 'Search');
        searchButton.addEventListener('click', this.searchVideos.bind(this));
        searchSection.appendChild(searchEl);
        searchSection.appendChild(searchButton);
        document.body.appendChild(searchSection);
        this.attachResizeHandler();
    }

    SearchComponent.prototype.searchVideos = function (evt) {
        var searchInputEl,
            searchKey,
            searchUrl,
            params;
        searchInputEl = document.querySelector('#searchText');
        searchKey = searchInputEl.value;
        searchUrl = CONSTANTS.get('YOUTUBE_API_SEARCH_URL');
        params = {
            key: CONSTANTS.get('API_KEY'),
            maxResults: CONSTANTS.get('MAX_RESULTS'),
            part: CONSTANTS.get('PART'),
            type: CONSTANTS.get('TYPE'),
            q: searchKey
        };
        utility.resetTotalCards();
        var self = this;
        youtubeApiCalls.makeCallToYoutubeApi(searchUrl, params).then(function(response) {
            utility.setTotalCards(response.items);
            self.renderVideoCards();
        });
    }

    SearchComponent.prototype.renderVideoCards = function () {
    	youtube.renderCards();
    }

    SearchComponent.prototype.attachResizeHandler = function () {
    	var self = this;
        window.addEventListener('resize', function(evt)  {
            var numberOfCardsToRender = utility.getNumberOfCardsToRender(),
                currentNumberOfCardsInPage = document.querySelectorAll('.videos-div').length;
            if (currentNumberOfCardsInPage === 0) {
                return;
            }
            if (numberOfCardsToRender > currentNumberOfCardsInPage) {
                self.renderVideoCards();
            } else {
                if (numberOfCardsToRender < currentNumberOfCardsInPage) {
                    var searchResults = document.getElementById('search-results');
                    searchResults.removeChild(searchResults.lastChild);
                    pagination.renderPaginationControls();
                }
            }
        })
    }
    return SearchComponent;
})();