describe('Testing the Youtube api calls', function () {
	var utilityTester;
	beforeAll(function () {
		utilityTester = new Utility();
	});

	it("testing total cards", function () {
		var formttedDate = utilityTester.getFormattedDate("2016-12-26T03:51:02.000Z");
		expect(formttedDate).toBe("2016-12-26");
	});
});