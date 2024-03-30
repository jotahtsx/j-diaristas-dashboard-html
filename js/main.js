const dropdown = () => {
    const _variables = {
        main: "j-dropdown",
        menu: "j-dropdown__menu",
        target: "data-dropdown-target",
        active: "j-active",
    }

    const dropDown = [...document.querySelectorAll(`.${_variables.main}`)]

    document.addEventListener("click", e => {
        const target = e.target.closest(`.${_variables.main}`)

        const targetedeMenu = e.target.closest(`.${_variables.menu}`)

        if (!target || targetedeMenu) return

        const targetId = target.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)

        const activeMenu = document.querySelector(`#${targetId}`)

        const nonTargeted = dropDown.map(drop => {
            const nonActiveId = drop.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)
            const nonActive = document.querySelector(`#${nonActiveId}`)

            return nonActive;

        })
        
        const filterExcepActive = nonTargeted.filter(target =>
            target !== activeMenu)

        filterExcepActive.forEach(drop => drop.classList.remove(_variables.active))    

        if (activeMenu) activeMenu.classList.toggle(_variables.active)
    })

    document.addEventListener("click", e => {
        const clickedInsideDropdown = e.target.closest(`.${_variables.main}`)

        if (!clickedInsideDropdown) {
            dropDown.forEach(dropdown => {
                dropdown.querySelector(`.${_variables.menu}`).classList.remove(_variables.active)
            });
        }
    });
}

dropdown();
