function pr() {
    console.log(3);
}

function fn(arg) {
    var z = "";
    if (typeof arg == "number") {
        console.log(arg * 2);
    } else if (typeof arg == "string") {
        for (var i = 0; i < arg.length; i++) {
            z += arg[i].toUpperCase();
            console.log(z);
        }
    }
}

function fn2(arg, fnc) {
    return fnc(arg);
}

function fn3(arg, fnc) {
    setTimeout(function() {
        fnc(arg);
    }, 5000);
}

fn(2);
fn2(4, fn);
fn3(8, fn);
