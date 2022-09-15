const sharePop = document.querySelector('.share');
    const getPop = document.querySelector('.popover-content');
    const shareIcon = document.querySelector('.share-icon');

function popUp(){
    if (getPop.style.visibility == 'visible') {
        getPop.style.visibility = 'hidden'
    } else {
        getPop.style.visibility = 'visible'
    }
    
}  
shareIcon.addEventListener('click', popUp);

