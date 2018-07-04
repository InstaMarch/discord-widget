/*jslint
    devel, browser
*/
import parseq from "./parseq.js";

function testRequest(value, reason) {
    if (reason) {
        console.error(reason);
    }


    const ijpDiscordID = "430758941530783754";

    const ijpDiscordUrl =
            "https://discordapp.com/api/guilds/430758941530783754/widget.json";

    const assertions = {
        "Not the Imaginary Jobs Discord widget.": value.id === ijpDiscordID,
        "Bad responseURL.": value.responseURL === ijpDiscordUrl,
        "Failed to receive correct response status.": value.status === 200

    };

    const failingAssertions =
            Object.keys(assertions).filter(
        (assertion) => !assertions[assertion]
    );

    if (failingAssertions.length === 0) {
        console.log("All tests are passing");
    }

    if (failingAssertions.length !== 0) {
        console.error(failingAssertions);
    }

}

function inviteRequestor(callback) {
    const invitationRequest = new XMLHttpRequest();
    invitationRequest.addEventListener("load", function successHandler(event) {
        const {id} = JSON.parse(event.target.responseText);
        callback({
            id,
            responseURL: event.target.responseURL,
            status: event.target.status
        });
    });
    invitationRequest.open(
        "GET",
        "https://discordapp.com/api/guilds/430758941530783754/widget.json"
    );
    invitationRequest.send();
}


parseq.sequence([inviteRequestor], 3000)(testRequest);

