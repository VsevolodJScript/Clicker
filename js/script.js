$(function () {
    let score = 0
    $("#plus").on("click", function () {
        score = score + 1
        $("h3").remove()
        $("body").append('<h3>')
        $("h3").append("Score: " + score)
    })
})