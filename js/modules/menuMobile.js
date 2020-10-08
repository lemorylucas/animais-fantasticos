export default function initmenuMobile() {
	const menuButton = document.querySelector('[data-menu="button"]');
	const menuList = document.querySelector('[data-menu="list"]');

	function openMenu(e) {
		menuList.classList.toggle('active');
		menuButton.classList.toggle('active');
	}

	menuButton.addEventListener('click', openMenu);
}
