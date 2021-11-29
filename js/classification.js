window.onload = function () {
    // document.getElementById('introduction').style.display = 'none';
    document.getElementById('introduction').style.backgroundColor = "white";
    document.getElementById('introduction').style.color = "black";
    try {
        document.getElementById('algorithm_list_1').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('algorithm_list_2').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('algorithm_list_3').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('algorithm_list_4').style.display = 'none';
    } catch (err) {
        console.log(err);
    }

    try {
        document.getElementById('algorithm_list_5').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('algorithm_list_6').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('algorithm_list_7').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('algorithm_list_8').style.display = 'none';
    } catch (err) {
        console.log(err);
    }



    try {
        document.getElementById('problem_1').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('solution_1').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('resources').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    var str = sessionStorage.getItem("page");
    if (str != null) {

        Toggle(str);
        sessionStorage.clear();
    }
};

var open_block = "introduction";


function Toggle(id) {

    var t = document.getElementById(open_block);

    for (var i = 0; i < t.length; i++) {
        // t[i].style.display = "none";
        console.log(t[i].innerHTML);
    }

    var x = document.getElementById(id);

    if (x.style.display === "none") {
        // document.getElementById("b_"+open_block).style.backgroundColor = "gray";
        // document.getElementById("b_"+open_block).style.color = "yellow";
        document.getElementById("b_" + open_block).classList.remove('button_select');
        document.getElementById("b_" + open_block).classList.add('button');

        t.style.display = "none"
        x.style.display = "block";
        // document.getElementById("b_"+id).style.backgroundColor = "white";
        document.getElementById("b_" + id).classList.remove('button');
        document.getElementById("b_" + id).classList.add('button_select');

        open_block = id;
        // localStorage.setItem("page", open_block);
        document.getElementsByClassName("heading")[0].innerHTML = document.getElementById("b_" + id).innerHTML;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // document.getElementsByClassName("content")[0].scrollIntoView();
}


function show_solution(id) {
    var x = document.getElementById(id);

    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
