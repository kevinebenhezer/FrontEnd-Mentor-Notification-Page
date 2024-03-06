const markAsRead = document.getElementById("mark-as-read");
const totalNotif = document.getElementById("total-notifications");
const itemOne = document.getElementById("item-one");
const itemTwo = document.getElementById("item-two");
const itemThree = document.getElementById("item-three");

const firstRedDot = document.getElementById("first-red-dot");
const secondRedDot = document.getElementById("second-red-dot");
const thirdRedDot = document.getElementById("third-red-dot");

markAsRead.addEventListener("click", readed);

function readed() {
	if (!(totalNotif.innerHTML = "")) {
		totalNotif.style.display = "none";
		firstRedDot.style.display = "none";
		secondRedDot.style.display = "none";
		thirdRedDot.style.display = "none";
		itemOne.classList.remove("new-notification");
		itemTwo.classList.remove("new-notification");
		itemThree.classList.remove("new-notification");
	}
}
