
window.onload = function () {
    // document.getElementById('introduction').style.display = 'none';
    document.getElementById('definition').style.backgroundColor = "white";
    document.getElementById('definition').style.color = "black";
    try {
        document.getElementById('importance').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('history').style.display = 'none';
    } catch (err) {
        console.log(err);
    }
    try {
        document.getElementById('mastery').style.display = 'none';
    } catch (err) {
        console.log(err);
    }

    Toggle('definition');
};


var open_block = "definition";

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
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // document.getElementsByClassName("content")[0].scrollIntoView();
}
