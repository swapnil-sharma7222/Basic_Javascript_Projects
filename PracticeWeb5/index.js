function computeTemp(event){
    if(event.target.name== celsius){
        $("input.k").val((event.target.val + 273.32).toFixed(2));
        $("input.f").val((event.target.val * 1.8 + 32).toFixed(2));
    }
}