var Pagination = (function() {
    //"use strict";
    function Pagination() { }
    Pagination.prototype.renderPaginationControls = function() {
        var numberOfpages = this.calculateNumberOfPages();
        this.renderPageNumbers(numberOfpages);
    }

    Pagination.prototype.renderPageNumbers = function(numberOfpages) {
        this.clearPaginationControls();
        var paginationEl = document.createElement('div');
        paginationEl.setAttribute('id', 'pagination');
        
        var paginationControlsEl = document.createElement('div');
        paginationControlsEl.classList.add('pagination-controls')
        
        var fragment = document.createDocumentFragment();
        for(var i=0; i<numberOfpages; i++) {
            var aTag = document.createElement('a');
            aTag.appendChild(document.createTextNode(i+1));
            aTag.setAttribute('id', 'page' + (i+1));
            aTag.setAttribute('href', '#');
            fragment.appendChild(aTag);
        }
        paginationControlsEl.appendChild(fragment);
        paginationEl.appendChild(paginationControlsEl);
        document.body.appendChild(paginationEl);
        this.markCurrentPageActive();
    }

    Pagination.prototype.clearPaginationControls = function() {
        var paginationEl = document.querySelector('#pagination');
        if (paginationEl) {
            paginationEl.parentElement.removeChild(paginationEl);
        }
    }

    Pagination.prototype.calculateNumberOfPages = function() {
        var numberOfCardsInCurrentPage = utility.getNumberOfCardsToRender();
        var totalCards = utility.getTotalCards().length;
        var additionalPagesToAdd = totalCards % numberOfCardsInCurrentPage === 0 ? 0 : 1;
        var numberOfpages = Math.floor(totalCards / numberOfCardsInCurrentPage) + additionalPagesToAdd;
        return numberOfpages;
    }

    Pagination.prototype.markCurrentPageActive = function() {
        var paginationEl = document.querySelector('#pagination').firstElementChild;
        var currentPage = utility.getCurrentPage();
        var aTag = paginationEl.querySelector('#page' + currentPage);

        if (!aTag) {
            currentPage = 1;
            utility.setCurrentPage(currentPage);
            aTag = paginationEl.querySelector('#page' + currentPage);
        }

        var previousActivePage = paginationEl.querySelector('.active');
        if (previousActivePage) {
            previousActivePage.classList.remove('active');
        }

        aTag.classList.add('active');
    }
    return Pagination;
})();