function direction(facing, turn) {
    const dirs = ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'];
    turn = turn / 45;

    if (turn < 0) {
        dirs.reverse();
        turn *= -1;
    }

    let index = dirs.indexOf(facing) + turn + 1;
    if (index > 8) {
        if (index % 8 === 0) {
            return dirs[7];
        }
        return dirs[index % 8 - 1];
    }

    return dirs[index - 1];
}