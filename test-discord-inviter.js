import parseq from "./parseq.js";

function testDiscordInviter() {
    const inviter = document.getElementById("inviter");
    console.assert(inviter);
}

function testContainer(discordWidget) {
    console.assert(discordWidget.tagName === "DIV"); 

}

function discordWidget() {
    return;
}

testDiscordInviter();

testContainer(discordWidget());
