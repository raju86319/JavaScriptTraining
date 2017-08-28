(function () {
    function init() {
        searchComponent = new SearchComponent();
        pagination = new Pagination();
        utility = new Utility();
        youtube = new Youtube();
        youtubeApiCalls = new YoutubeApiCalls();
        searchComponent.renderSearchComponent();
    }
    init();
})();