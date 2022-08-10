export default function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove("ativo");
            })
            tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function(){
                activeTab(index);
            })
    })}
};