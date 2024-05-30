/*scroll animation handlers*/

let itemGrid = document.getElementsByClassName("item-grid")[0];
let shop = document.getElementById("shop");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            itemGrid.classList.add('active-grid');
            return;
        }
        //perks.forEach(perk => perk.classList.remove('fade-up'));

    });
}, {threshold: 0.1});

observer.observe(shop);