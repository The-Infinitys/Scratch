if (window.location.href.startsWith("https://scratch.mit.edu/users/")) {
    var messagescounter_url = new URL(window.location.href);
	var messagescounter_username = messagescounter_url.pathname.replace("/users/", "")
		.replace("/", "");
	fetch("https://api.scratch.mit.edu/users/" + messagescounter_username + "/messages/count/").then(
		res => res.json()).then(result => 
		alert(messagescounter_username + "のメッセージ数は、" + result["count"].toString() + "です")
	)
} else {
	alert(
		"https://scratch.mit.edu/users/(確認したいユーザー名)のURLで使用してください。(by messagescounter)"
	)
}