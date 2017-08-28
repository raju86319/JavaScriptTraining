var SearchComponent = (function () {
    "use strict";
    function SearchComponent() { };
    SearchComponent.prototype.renderSearchComponent = function () {
        let searchSection = document.createElement('div');
        searchSection.classList.add('search-section');
        let searchEl = document.createElement('input');
        searchEl.setAttribute('type', 'text');
        searchEl.setAttribute('id', 'searchText');
        let searchButton = document.createElement('input');
        searchButton.setAttribute('type', 'button');
        searchButton.setAttribute('value', 'Search');
        searchButton.addEventListener('click', this.searchVideos.bind(this));
        searchSection.appendChild(searchEl);
        searchSection.appendChild(searchButton);
        document.body.appendChild(searchSection);
        this.attachResizeHandler();
    }

    SearchComponent.prototype.searchVideos = function (evt) {
        let searchInputEl,
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
        youtubeApiCalls.makeCallToYoutubeApi(searchUrl, params).then((response) => {
            utility.setTotalCards(response.items);
            this.renderVideoCards();
        });
    }

    SearchComponent.prototype.renderVideoCards = function () {
        youtube.renderCards();
    }

    SearchComponent.prototype.attachResizeHandler = function () {
        window.addEventListener('resize', (evt) => {
            let numberOfCardsToRender = utility.getNumberOfCardsToRender(),
                currentNumberOfCardsInPage = document.querySelectorAll('.videos-div').length;
            if (currentNumberOfCardsInPage === 0) {
                return;
            }
            if (numberOfCardsToRender > currentNumberOfCardsInPage) {
                this.renderVideoCards();
            } else {
                if (numberOfCardsToRender < currentNumberOfCardsInPage) {
                    let searchResults = document.getElementById('search-results');
                    searchResults.removeChild(searchResults.lastChild);
                    pagination.renderPaginationControls();
                }
            }
        })
    }
    return SearchComponent;
})();