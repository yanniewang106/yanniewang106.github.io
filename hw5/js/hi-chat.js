// a reference to firebase (messages)
var messageRef = new Firebase("https://hi-chat.firebaseio.com/");

// register DOM elements
var nameField = $('#nameInput');
var messageField = $('#messageInput');
var messageList = $('#chatbox');

// keypress event
messageField.keypress(function(e)
{
	if(e.which == 13 || e.keyCode == 13) // press enter to submit a username or message
	{
		pushData();
	}
});

$("#submitMessage").click(function()
{
	pushData();
})

// add a callback that is triggered for each chat message
messageRef.limitToLast(10).on('child_added', function(snapshot)
{
	// get data
	var data = snapshot.val();
	var username = data.name;
	var message = data.text;

	// create elements message & sanitize text
	var messageElement = $("<li>");
	var nameElement = $("<strong class='username-chat'></strong>");
	nameElement.text(username + ": ");
	messageElement.text(message).prepend(nameElement);

	// add message
	messageList.append(messageElement);

	// scroll to bottom of message list
	messageList[0].scrollTop = messageList[0].scrollHeight;
});

function pushData()
{
	// field values
		var username = nameField.val();
		var message = messageField.val();

		if (username == '')
		{
			alert("Please enter a username!");
		}
		else
		{
			// save data to firebase and chatbox
			messageRef.push({name:username, text:message});
			messageField.val('');
		}
}