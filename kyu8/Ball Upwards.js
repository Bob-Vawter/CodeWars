function maxBall(v0) {
    // your code
    // h = v*t - .5*g*t*t
    // g = 9.81 m/s**2
    // t in tenths of a sec
    // v in km
    // y = ax**2 +bx+c
    // vertex at y = a(x-h)**2
    // x coord of vertex = -b/2a
    // b = v
    // 2a = -g
    // -b/2a = v/g
    // kmh => m/s  km/h/3.6
    // all result divide by ten and round to get in tenths of seconds
    
    v0 = v0 / 3.6
    let g = 9.81

    return Math.round(v0/g*10)
}
