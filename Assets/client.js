const socket = io("http/localhost:8000/");

const form = document.getElementById("send-container");
const messageinput = document.getElementById("messageinput");
const messagecontainer = document.querySelector(".container");

const names = prompt("Enter your name to join the chat");
socket.emit("new-user-joined", names);
console.log("new-user-joined", names);
