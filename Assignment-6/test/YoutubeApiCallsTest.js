describe('Testing the Youtube api calls', function () {
	var apiTester;
	beforeAll(function () {
		apiTester = new YoutubeApiCalls();
	});

	it("No of videos should be 15", function (done) {
		var searchUrl = "https://www.googleapis.com/youtube/v3/search";
		params = {
			key: CONSTANTS.get('API_KEY'),
			maxResults: CONSTANTS.get('MAX_RESULTS'),
			part: CONSTANTS.get('PART'),
			type: CONSTANTS.get('TYPE'),
			q: "monkey"
		};
		apiTester.makeCallToYoutubeApi(searchUrl, params).then(function (response) {
			expect(response.items.length).toBe(15);
			done();
		});

		


		});

	  it("URL formation", function (done) {

		inputParams = {
			key: CONSTANTS.get('API_KEY'),
			maxResults: CONSTANTS.get('MAX_RESULTS'),
			part: CONSTANTS.get('PART'),
			type: CONSTANTS.get('TYPE'),
			q: "monkey"
		};
		   var response=apiTester.buildUrlFromParams(inputParams);
			expect(response).toBe("key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&maxResults=15&part=snippet&type=video&q=monkey");
			done();
		});

});



