const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

function cycle(a_list, total) {
    package = a_list[total]
    if (total <= a_list.length) {
        return package
    } else {
        let index = parseInt(total % a_list.length)
        console.assert(typeof(index) == 'number')
        return package
    }
}

function* next_step(steps) {
    directions = [
        [0, 1], //right
        [1, 0], //up
        [0, -1], //left
        [-1, 0], //down
        [1, 1], //up-right
        [-1, -1], //down-left
        [1, -1], //up-left
        [-1, 1], //down-right
    ]
    for (i = 0; i < steps; i++) {
        //get random number
        random_number = Math.random().toString().slice(2, )
        for (n = 0; n < random_number.length; n++) {
            try {
                random_int = parseInt(random_number[n])
                dir = cycle(directions, random_int)
                console.log(dir)
                yield [dir][0]
            } catch (error) {
                console.log(error)
                continue
            }

        }
    }
}

function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function random_walk() {

    ctx.beginPath();
    let energy = 1000
    x_now = 300
    y_now = 150
    steps = next_step(1000);
    for (i = 0; i < energy; i++) {
        try {
            a = steps.next();
            x = a.value[0] + x_now
            y = a.value[1] + y_now
            console.log(">>>>", x, y);
            ctx.moveTo(x_now, y_now)
            x_now = x
            y_now = y
            ctx.lineTo(x, y);
            ctx.stroke();
        } catch (error) {
            continue
        }

    }

}