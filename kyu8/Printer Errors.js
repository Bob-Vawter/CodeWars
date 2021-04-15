//Printer Errors
function printerError(s) {
    return s.split('').filter(a=>a.charCodeAt()>'\m'.charCodeAt()).length+'/'+s.length
}
