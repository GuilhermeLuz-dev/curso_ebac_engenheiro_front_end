$(document).ready(() => {
    $("form").on('submit', (e) => {
        e.preventDefault();
        updadeList();
    })
})

function updadeList() {
    const input = $("form input");
    let item = `<li style="display:none">${input.val()}</li>`;
    $(item).appendTo("ul");
    input.val("");
    $('li').fadeIn(500);

    itemCheck();
}

function itemCheck() {
    $("li").click((e) => {
        $(e.target).css("text-decoration", "line-through")
    })
}