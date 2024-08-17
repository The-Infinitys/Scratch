//messages counter

const messages_count = {
  name: "messages count",
  elem: document.createElement("div"),
};
const messages_count_input = document.createElement("input");
const messages_count_result = document.createElement("p");
messages_count_result.innerHTML="made by The Infinity's";
messages_count.elem.append(messages_count_input);
messages_count.elem.append(messages_count_result);
messages_count_input.addEventListener("change", (e) => {
  fetch("https://api.scratch.mit.edu/users/" + e.value + "/messages/count/")
    .then((data) => data.json())
    .then((info) => {
      if (info.count == undefined) {
        messages_count_result.innerHTML = t + "という名前のユーザーは居ません";
      } else {
        messages_count_result.innerHTML =
          t + "のメッセージ数は、" + info.count.toString() + "です";
      }
    });
});

Scratch_Infinity_framework.import(messages_count.name, messages_count.elem);
