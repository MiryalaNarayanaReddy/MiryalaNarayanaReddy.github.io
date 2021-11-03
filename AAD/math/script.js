function Toggle(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onload = function()  {
    document.getElementById('prime_method_1').style.display = 'none';
    document.getElementById('prime_method_2').style.display = 'none';
    document.getElementById('prime_method_3').style.display = 'none';


    document.getElementById('prime_problem_1').style.display = 'none';
    document.getElementById('prime_solution_1').style.display = 'none';
  
};
