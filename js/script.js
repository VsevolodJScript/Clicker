$(function () {
    let score = 0
    $("#plus").on("click", function () {
        score = score + 1
        $(".result").remove()
        $("body").append('<div class="result">')
        $(".result").append("Счёт: " + score)
    })
})