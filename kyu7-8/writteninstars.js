function starSign(date) {
  var day = date.getDate()
  var month = date.getMonth()+1
      if(month == 12 && day >= 22 || month == 1 && day <= 20){
        return 'Capricorn'
      }
      if(month == 11 && day >= 23 || month == 12 && day <= 21){
        return 'Sagittarius'
      }
      if(month == 10 && day >= 24 || month == 11 && day <= 22){
        return 'Scorpio'
      }
      if(month == 9 && day >= 24 || month == 10 && day <= 23){
        return 'Libra'
      }
      if(month == 8 && day >= 24 || month == 9 && day <= 23){
        return 'Virgo'
      }
      if(month == 7 && day >= 23 || month == 8 && day <= 23){
        return 'Leo'
      }if(month == 6 && day >= 22 || month == 7 && day <= 22){
        return 'Cancer'
      }
      if(month == 5 && day >= 22 || month == 6 && day <= 21){
        return 'Gemini'
      }
      if(month == 4 && day >= 21 || month == 5 && day <= 21){
        return 'Taurus'
      }
      if(month == 3 && day >= 21 || month == 4 && day <= 20){
        return 'Aries'
      }
      if(month == 2 && day >= 20 || month == 3 && day <= 20){
        return 'Pisces'
      }
      if(month == 1 && day >= 21 || month == 2 && day <= 19){
        return 'Aquarius'
      }
      return 'error'
  }


  //kyu 7 writtin in stars
