
// 会社名取得
const companyName = document.querySelectorAll('.company_name');
// 会社名変更
companyName[0].textContent = '会社１';
companyName[1].textContent = '会社２';
  
                 // 　　ボタン取得
// ↓これじゃ駄目だった!!
// const btn = document.querySelectorAll('button');
// const calculatorBtn = document.getElementById('js-calculatorBtn');
const btns = document.getElementsByTagName('button');
// const resetBtn = document.querySelectorAll('.reset_btn');              
  
               // 会社１　計算式
function caluculate() {
  btns[0].addEventListener('click',(e) => {
    e.preventDefault();
          // リファクタリング成功
        //  company_oneの全input取得 
    const oneSalary = document.querySelectorAll('.one_salary')

    // 時給×時間＝日額  計算式↓
    const sumOne = parseInt(oneSalary[0].value, 10) * parseInt(oneSalary[1].value, 10); 
      oneSalary[2].value = sumOne;

    // 日額×日数=月額　計算式  
      sumSec = sumOne * oneSalary[3].value;
      oneSalary[4].value = sumSec;

    });
}
    caluculate();

         // 2社目計算式
  function caluculateSec() {
    btns[1].addEventListener('click',(e) => {
         e.preventDefault();
                  // リファクタリング成功
                //  company_oneの全input取得 
            const oneSalary = document.querySelectorAll('.one_salary')
        
            // 時給×時間＝日額  計算式↓
            const sumOneTwo = parseInt(oneSalary[5].value, 10) * parseInt(oneSalary[6].value, 10); 
              oneSalary[7].value = sumOneTwo;
        
            // 日額×日数=月額　計算式  
              sumSecTwo = sumOneTwo * oneSalary[8].value;
              oneSalary[9].value = sumSecTwo;
        
            });
        }
         caluculateSec();
        
  
