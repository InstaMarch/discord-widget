import parseq from "./parseq.js";

parseq.sequence([inviteRequestor], 3000)(testRequest);

function testRequest(value, reason) {
    if (reason) {
        console.error(reason);
    }
    console.assert(value.id === "430758941530783754", "Not the Imaginary Jobs Discord widget.");
}

function inviteRequestor(callback, value) {
}
