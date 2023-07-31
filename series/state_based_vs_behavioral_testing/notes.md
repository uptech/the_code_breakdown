# Topics to Cover in this Series

* [x] Gain Confidence to Refactor
* [ ] Make sure the code works correctly
	* [ ] External Behavior
	* [ ] Internal Collaboration (a.k.a. Lock down collaboration)
* [ ] Provide Documentation
	* documents the usage of the object/method under test vs documents collaboration portion of the implementation
* [ ] Drive Better Design
	* mockist forces DI of all collabs vs state based push to DI only effectful collabs
* [ ] Do Mockist/Behavioral Test tell us our code actually works without also having State Based Tests?
* [ ] Catch bugs before they get into prod?
* [ ] Make sure boundaries within arch maintain contracts, contracts stay the same?
* [ ] Differences between Mockist testing with Mock objects vs Real objects (theory that Mockist testing with real objects provides verification of connectivity between real objects)
	* do you lose emergent design ability by using real objects?
	* do you gain confidence that your collaborators are actually integrating between real objects not mocks? and is that confidence a result of the type system or the test? or both?


It seems like the strategy will also need to be

1. evaluate all of the values(pros)/cons/characteristics
2. collect the results around the values(pros)/cons/characteristics and understand them
3. decide which values you (your organization) cares about
4. develop a testing strategy based on those values
5. come up with examples of how to write test for these different types
