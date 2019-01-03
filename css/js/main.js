
document.addEventListener('DOMContentLoaded', function() { //監聽頁面
  // default
  const monitor = document.querySelector('.calculator__monitor').innerText = '0'
  let background = ''

  let memory1 = ''
  let memory2 = ''
  let operator = ''
  let Answer = 0
  
  //multiple
  document.querySelector('#ac').addEventListener('click', () => {
      document.querySelector('.calculator__monitor').innerText = '0' //螢幕顯示數字
      background = ''
      memory1 =''
  })
  document.querySelector('#negative').addEventListener('click', () => {
      document.querySelector('.calculator__monitor').innerText *= -1 //螢幕顯示數字
  })
  document.querySelector('#percent').addEventListener('click', () => {
      document.querySelector('.calculator__monitor').innerText *= 0.01 //螢幕顯示數字
  })

  //number    
  let number = document.querySelectorAll(".calculator__keyboard--number > input")
  //0
  number[0].addEventListener('click', () => {
      if (background!=='') { // 最高位數不能是0 
          background += 0 
          document.querySelector('.calculator__monitor').innerText = background
      }
  })    
  
  //1-9 重複的動作用迴圈完成            
  let max = number.length
  for (let i=2; i<max; i++){
      number[i].addEventListener('click', () => {
          background += i-1 // 現在背景處理之後才顯示在螢幕上
          document.querySelector('.calculator__monitor').innerText = background
      })
  }
  //dot 
  number[1].addEventListener('click', () => {
      // 一組數字只能有一個小數點
      let check = document.querySelector('.calculator__monitor').innerText 
      let n = check.length-1
      let counter = 0
      for (n; 0<=n; n--) { //檢查前面有沒有小數點
          if (check[n]==='.') {
              counter += 1
              break
          } 
      }
      if (counter ===0 ) {
          background += '.'
          console.log(background)
          document.querySelector('.calculator__monitor').innerText = background 
      }
  })  
          
  //operator
  document.querySelector('#plus').addEventListener('click', () => {
      memory1 = document.querySelector('.calculator__monitor').innerText // 將螢幕上的數字存到記憶體1
      operator ='+'
      background = '' // 清空 background 不然再按數字會累計在螢幕上
  })
  document.querySelector('#minus').addEventListener('click', () => {
      memory1 = document.querySelector('.calculator__monitor').innerText
      operator ='-'
      background = '' // 清空 background 不然再按數字會累計在螢幕上
  })
  document.querySelector('#multiply').addEventListener('click', () => {
      memory1 = document.querySelector('.calculator__monitor').innerText
      operator ='*'
      background = '' // 清空 background 不然再按數字會累計在螢幕上
  })
  document.querySelector('#divided').addEventListener('click', () => {
      memory1 = document.querySelector('.calculator__monitor').innerText
      operator ='/'
      background = '' // 清空 background 不然再按數字會累計在螢幕上
  })
  document.querySelector('#equal').addEventListener('click', () => { 
      let memory2 = document.querySelector('.calculator__monitor').innerText
      if (operator==='') Answer = document.querySelector('.calculator__monitor').innerText
      if (operator==="+") Answer = Number(memory1) + Number(memory2)
      if (operator==="-") Answer = Number(memory1) - Number(memory2)
      if (operator==="*") Answer = Number(memory1) * Number(memory2)
      if (operator==="/") Answer = Number(memory1) / Number(memory2)
      document.querySelector('.calculator__monitor').innerText = Answer 
      background = '' // 清空 background 不然再按數字會累計在螢幕上
  })
})
