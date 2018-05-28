import parseq from "./parseq.js";

parseq.sequence([inviteRequestor], 3000)(testRequest);

function testRequest(value, reason) {
    if (reason) {
        console.error(reason);
    }
    console.assert(value.id === "430758941530783754", "Not the Imaginary Jobs Discord widget.");
    console.assert(value.responseURL === "https://discordapp.com/api/guilds/430758941530783754/widget.json", "Bad responseURL.");
}

function inviteRequestor(callback, value) {
	callback({id : "430758941530783754"});
}




