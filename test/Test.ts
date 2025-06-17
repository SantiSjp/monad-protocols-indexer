import assert from "assert";
import { 
  TestHelpers,
  Ambient_AuthorityTransfer
} from "generated";
const { MockDb, Ambient } = TestHelpers;

describe("Ambient contract AuthorityTransfer event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Ambient contract AuthorityTransfer event
  const event = Ambient.AuthorityTransfer.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Ambient_AuthorityTransfer is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Ambient.AuthorityTransfer.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAmbientAuthorityTransfer = mockDbUpdated.entities.Ambient_AuthorityTransfer.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAmbientAuthorityTransfer: Ambient_AuthorityTransfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      authority: event.params.authority,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAmbientAuthorityTransfer, expectedAmbientAuthorityTransfer, "Actual AmbientAuthorityTransfer should be the same as the expectedAmbientAuthorityTransfer");
  });
});
