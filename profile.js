/* Toggle between adding and removing the "responsive" 
class to topnav when the user clicks on the icon */
function dropMenu() {
	var x = document.getElementById("topMenu");
	if (x.className === "menu") {
		x.className += " responsive";
	} else {
		x.className = "menu";
	}
}

/*add profile photo to posts helper*/
function addProfilePhoto() {
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "icon.jpg");
    photo.setAttribute("id", "propic");
    return photo;
}

/*add name date time to posts helper*/
function addNameDateTime() {
	var time = new Date();
    var ndt = document.createTextNode(" Bipp ("+time+"): ");
    return ndt;
}

function addLikeCount(){
	var input = document.createElement("input");
	input.setAttribute("value", "0");
    input.setAttribute("class", "like_count");
	input.setAttribute("id", Date.now()); //using Data.now() for unique id

    var likeButton = document.createElement("BUTTON");
    var lbtxt = document.createTextNode("Like!");
    likeButton.appendChild(lbtxt);
    likeButton.setAttribute("id", "up");
    likeButton.setAttribute("class", "test--like_button");
    likeButton.setAttribute("onclick", "modifyCount(1, this)");


    var dislikeButton = document.createElement("BUTTON");
    var dlbtxt = document.createTextNode("Dislike!");
    dislikeButton.appendChild(dlbtxt);
    dislikeButton.setAttribute("id", "down");
    dislikeButton.setAttribute("onclick", "modifyCount(-1, this)");

    return [likeButton, dislikeButton, input];
}

function postAsText() {
	var para = document.createElement("P");
    para.setAttribute("class", "test--post_content");

	var photo = addProfilePhoto();
	para.appendChild(photo);

	var form = addNameDateTime();
	para.appendChild(form);

    var txt = document.getElementById("myText").value;
    var post = document.createTextNode(txt);
    para.appendChild(post);

    var likes = addLikeCount();
    para.appendChild(likes[0]);
    para.appendChild(likes[1]);
    para.appendChild(likes[2]);

    document.getElementById("allPosts").appendChild(para);
}

function postAsImg() {
	var para = document.createElement("P");
    para.setAttribute("class", "test--post_content");

	var photo = addProfilePhoto();
	para.appendChild(photo);

	var form = addNameDateTime();
	para.appendChild(form);

	var url = document.getElementById("myImg").value;
    var img = document.createElement("IMG");
    img.setAttribute("src", url);
    img.setAttribute("alt", "Not a valid URL");
    img.setAttribute("id", "picpost");
    para.appendChild(img);

    var likes = addLikeCount();
    para.appendChild(likes[0]);
    para.appendChild(likes[1]);
    para.appendChild(likes[2]);

    document.getElementById("allPosts").appendChild(para);
}

/*like counter function for profile feed*/
function modifyCount(val, ele) {
    var countId = ele.parentNode.lastChild.id;
    var count = document.getElementById(countId).value;
    var new_count = parseInt(count,10) + val;
    
    if (new_count < 0) {
        new_count = 0;
    }
    
    document.getElementById(countId).value = new_count;
    return new_count;
}
