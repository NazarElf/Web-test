let opened = false;

let openButton = document.getElementById("open_button");
let chevron = document.getElementById('open_chevron');
let sidePanel = document.getElementById('side_panel');
let profileDetails = document.getElementById('profile_details')
function openCloseAction(e) {
    opened = !opened
    if (opened) {
        sidePanel.classList.replace('w-[72px]', 'w-full')
        sidePanel.classList.add('xs:w-[306px]')
        chevron.classList.replace('rotate-0', 'rotate-180')
        profileDetails.classList.replace('w-0', 'w-full')
    }
    else {
        sidePanel.classList.replace('w-full', 'w-[72px]')
        sidePanel.classList.remove('xs:w-[306px]')
        chevron.classList.replace('rotate-180', 'rotate-0')
        profileDetails.classList.replace('w-full', 'w-0')
    }
}

openButton.addEventListener("click", openCloseAction)