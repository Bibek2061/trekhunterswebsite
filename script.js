function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Sabai tab content hide garne
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("show");
    }

    // Sabai buttons bata "active" class hataune
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Current tab dekhaune ra button lai active banaune
    document.getElementById(tabName).classList.add("show");
    evt.currentTarget.classList.add("active");
}