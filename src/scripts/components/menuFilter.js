class MenuFilter {
    constructor() {
        this.menuWrapper = document.querySelector(".menus-area__menu-filter");
        this.menus = this.menuWrapper.querySelectorAll("a");
        this.menuItemsWrapper = document.querySelector(".menus-area__menu-items");
        this.menuItems = this.menuItemsWrapper.querySelectorAll(".food-menu");
        this.eventBindings();
    }

    eventBindings() {
        this.menus.forEach(menu => {
            menu.addEventListener("click", e => {
                this.animate(e.target);
            });
        });
    };

    animate(element) {
        const activeMenus = this.menuWrapper.querySelectorAll("a.active");
        const menuClass = element.getAttribute("menu");

        // Animate menu filter.
        element.classList.add("active");
        activeMenus.forEach(menu => {
            menu.classList.remove("active");
        });
        
        // Animate menu items.
        this.menuItems.forEach(item => {
            // Remove current active.
            item.classList.remove("active")
            if(item.classList.contains(menuClass) ) {
                item.classList.add("active");
            }
        });
    }
}

export default MenuFilter;