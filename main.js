menu_list_array = ["Rejuneum",
    "Rejuneum Plus",
    "Raper-DSR",
    "Raper-20",
    "Paneum-D",
    "Paneum-40",
    "Citromaxx",
    "righter-50",
    "righter-100",
    "Villi-One",
    "Mirthtab",
    "reedify"


];

function getmenu() {
    var htmldata = "";
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;

}
