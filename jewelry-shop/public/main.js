let gridNav = document.getElementsByClassName("grid-tab");
let gridTabsArr = [].slice.call(gridNav);

let productGrid = document.getElementsByClassName("collections-grid");
let productGridArr = [].slice.call(productGrid);

//Collections Nav

gridTabsArr.forEach((ele) => {
    ele.addEventListener("click", activateTab);
});

function activateTab() {
    if (this.classList.contains("active-tab")) { return; }

    let ind = gridTabsArr.indexOf(this);
    this.classList.add("active-tab");
    productGridArr[ind].classList.add("active-grid");

    deactivate((ind) == 0 ? 1 : 0);
}

function deactivate(ind) {
    gridTabsArr[ind].classList.remove("active-tab");
    productGridArr[ind].classList.remove("active-grid");
}

//animate sections once in view
/*
const element = document.querySelector('.monster');
const observer = new IntersectionObserver(entries => {
    productGridArr[0].classList.toggle( 'animation', entries[0].isIntersecting );
});

observer.observe( productGridArr[0] );*/