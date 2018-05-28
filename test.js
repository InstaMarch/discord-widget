import parseq from "./parseq.js";

parseq.sequence([inviteRequestor], 3000)(testRequest);

function testRequest(value, reason) {
    if (reason) {
        console.error(reason);
    }
    console.assert(value.id === "430758941530783754", "Not the Imaginary Jobs Discord widget.");
    console.assert(value.responseURL === "https://discordapp.com/api/guilds/430758941530783754/widget.json", "Bad responseURL.");
    console.assert(value.status === "200", "Failed to receive correct response status.");
}

function inviteRequestor(callback, value) {
    const invitationRequest = new XMLHttpRequest();
    invitationRequest.addEventListener("load", function successHandler(event) {
        const {id} = JSON.parse(event.target.responseText);
        callback({
            id,
            responseURL: event.target.responseURL
        });
    });
    invitationRequest.open("GET", "https://discordapp.com/api/guilds/430758941530783754/widget.json");
    invitationRequest.send();
}




