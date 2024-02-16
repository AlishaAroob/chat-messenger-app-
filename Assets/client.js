const socket = io("http/localhost:8000/");

const form = document.getElementById("send-container");
const messageinput = document.getElementById("messageinput");
const messagecontainer = document.querySelector(".container");

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innertext = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messagecontainer.append(messageElement);
};
const name = prompt("Enter your name to join the chat");
socket.emit("new-user-joined", name);

socket.on =
  ("user-joined",
  (name) => {
    append(`${name} joined the chat`, "right");
  });
