const country_btn = document.querySelectorAll(".country_btn");
const catalog_items = document.querySelectorAll(".catalog_cards");

country_btn.forEach(Active_on_click);

function Active_on_click(item)
{
    item.addEventListener("click", function() 
    {
        let current_btn = item;
        let tab_id = current_btn.getAttribute("data-tab");
        let current_tab = document.querySelector(tab_id);

        if (! current_btn.classList.contains("active") )
        {
            country_btn.forEach((item) => {
                
                item.classList.remove("active");
                item.classList.remove("btn_green_mod");

            });

            catalog_items.forEach((item) => {
                
                item.classList.remove("active");

            });

            
            current_btn.classList.add("btn_green_mod");
            current_tab.classList.add("active");
        }
    });
}

document.querySelector(".country_btn").click();

const arrow = document.querySelector("#menu_btn");
const menu = document.querySelector("#menu");
const menu_el = document.querySelectorAll(".menu_item");

arrow.addEventListener("click", () =>
{
    if (!menu.classList.contains("show"))
    {
        menu.classList.add("show");
    }
    else
    {
        menu.classList.remove("show");
    }

    setTimeout(function()
    {
    menu.classList.remove("show");
    }, 5000);
});

for (var i=0; i < menu_el.length; i++)
{
    menu_el[i].addEventListener("click", () => 
    {
        if (menu.classList.contains("show"))
        {
            menu.classList.remove("show");
        }
    });
}

