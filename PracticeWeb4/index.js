$(".rating").on("click", function (event) {
    $(".rating").removeClass("active");
    $(event.target).addClass("active");
    $(event.target.parentNode).addClass("active");
    console.log(event.target.textContent|| event.target.parentNode.text);
    var selectedRating= event.target.textContent|| event.target.parentNode.textContent;
    // var selectedRating= event.target.textContent;
    $(".btn").on("click", function(){
        $(".container").html( `
            <strong>Thank you!!!</strong>;
            <br><br>
            <strong>Feedback:${selectedRating}</strong>;
            <p>We will use your feedback to improve our customber support</p>
        `
        )
    })
})