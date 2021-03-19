function triangle(row) {
  row=row.split('')
  while (row.length>1){

    for(let i = 0;i<row.length-1;i++){
      row[i] = row[i]==row[i+1]?row[i]:thirdColor(row[i],row[i+1])
    }
    row.pop()
    console.log(row)

  }
  return row[0]
}

function thirdColor(c1,c2){
  var color = c1+c2
  switch (color){
    case 'BG':
    return 'R';
    case 'GB':
    return 'R';
    case 'BR':
    return 'G';
    case 'RB':
    return 'G';
    case 'RG':
    return 'B';
    case 'GR':
    return 'B';
  }
}


console.log(triangle('BBRBBGBRGRBGGRGRGRGRGGRBRBGRBGRBRGRBGRGRBRGBRGBRGRBGRBRGBRGRBGRBRGBRGRBGRBGGGRGRGBBBRBRGRGRGRGRGRRGRBRG'))
