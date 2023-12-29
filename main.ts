// List of possible ships
let all_ships = [[2,2],[1,3]] 

// Place ships
function PlaceShips(ship_type: [int8]) {

    let starting_pos = [0,0]
    let direction = 0 // 1 = Up, 2 = Left, 3 = Down, 4 = Right
    let index = 0
    
    while (true) {
        if (index == 0) {
            if (input.buttonIsPressed(Button.A)) {
                starting_pos[0] += 1
            }
            if (input.buttonIsPressed(Button.B)) {
                starting_pos[0] -= 1
            }
        } else if (index == 1) {
            if (input.buttonIsPressed(Button.A)) {
                starting_pos[1] += 1
            }
            if (input.buttonIsPressed(Button.B)) {
                starting_pos[1] -= 1
            }
        } else if (index == 2) {
            if (input.buttonIsPressed(Button.A)) {
                direction -= 1
            }
            if (input.buttonIsPressed(Button.B)) {
                direction += 1
            }
        } else if (index == 3) {
            
        }

        if (input.logoIsPressed()) {
            index += 1
        }
    }

    if (ship_type == [2,2]) {
        if (direction == 1) {

        }
    }
}

// Display ship
function DisplayShip(ship_type: string) {

}

// Game loop
basic.forever(function () {
	
})
