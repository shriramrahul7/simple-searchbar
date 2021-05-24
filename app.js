searchBar = document.getElementById("searchbar")

para = document.getElementById("para");


const handleChange = () => {
    searchValue  = searchBar.value;
    para.innerHTML = searchBar.value;
    
    window.open("https://" + searchValue + ".com", "_blank");


}

searchBar.addEventListener("change", handleChange);
