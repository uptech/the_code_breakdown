# State Based Testing vs Behavioral Testing

This is a series of screencasts that I created to explore the characteristics
of State Based/Classical Testing and Behavioral/Mockist Testing in the hopes
that it would help me and others not only understand the characteristics of the
two testing styles better, but to also enable us to better reason about when we
should use one style of testing or the other.

My rough plan for doing this is as follows.

1. evaluate all of the characteristics (pros & cons)
2. collect the results around the characteristics and understand them
3. decide which values you/your organization) cares about
4. develop a testing strategy based on those values
5. come up with examples of how to write test for these different types

## Characteristics Breakdown

The following is a table breaking down the characteristics and the respective
results for State Based and Behavioral testing along with the link to the
screencast where I explore them with live coding.

| Characteristic (& videos)       | State Based                          | Behavioral (using mock objs)        | Behavioral (mocking methods on real objs) |
| ------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------------|
| [Gain Confidence to Refactor][] | **does**                             | **does NOT** & **creates overhead** | ?   								       |
| [Test Internal Collaboration][] | **only** for effectful collaborators | **does** for all collaborators      | ?                                         |
| Test External Behavior          | ?                                    | ?                                   | ?                                         |
| Provide Documentation           | ?                                    | ?                                   | ?                                         |
| Drive Better Design             | ?                                    | ?                                   | ?                                         |
| Behavioral Tests Stand Alone?   | ?                                    | ?                                   | ?                                         |
| Test Permutations               | ?                                    | ?                                   | ?                                         |
| Test Isolation                  | ?                                    | ?                                   | ?                                         |
| Test Coupling to Implementation | ?                                    | ?                                   | ?                                         | 
| Design Pressure                 | ?                                    | ?                                   | ?                                         |
| Emergent Design                 | ?                                    | ?                                   | ?                                         |

## Characteristics I Value & Ones I Don't

**TODO:** I will fill this out after I complete the Characteristics Breakdown above
and I will go into why I do or don't care about each of the characteristics.
Then I will extract the ones from the table above that align with the ones I
care about and hopefully the results will guide me as to what type of test to
write and when.

## Testing Strategy

**TODO:** I will fill this out after completing the Characteristics Breakdown
and the Chosen Values above. I will outline here what I believe the best
strategy is for writing State Based & Behavioral tests and in what scenarios.

## Notes

The following are simply notes for myself as I go through this series.

* Provide Documentation
	* documents the usage of the object/method under test vs documents collaboration portion of the implementation
* Drive Better Design
	* mockist forces DI of all collabs vs state based push to DI only effectful collabs
* Catch bugs before they get into prod?
* Make sure boundaries within arch maintain contracts, contracts stay the same?
* Differences between Mockist testing with Mock objects vs Real objects (theory that Mockist testing with real objects provides verification of connectivity between real objects)
	* do you lose emergent design ability by using real objects?
	* do you gain confidence that your collaborators are actually integrating between real objects not mocks? and is that confidence a result of the type system or the test? or both?

It seems like the strategy will also need to be

1. evaluate all of the values(pros)/cons/characteristics
2. collect the results around the values(pros)/cons/characteristics and understand them
3. decide which values you (your organization) cares about
4. develop a testing strategy based on those values
5. come up with examples of how to write test for these different types


[Gain Confidence to Refactor]: https://youtu.be/DF7y2DA3YIY
[Test Internal Collaboration]: https://youtu.be/jEgkG2oCZaI
