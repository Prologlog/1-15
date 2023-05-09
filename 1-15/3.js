// let elem = document.querySelector('#elem')
// let p = document.querySelector('#p')
// elem.addEventListener('blur', func)
// function func(){
//     let a = elem.value
//     let arr = []
//     arr.push(a)
//     let b = a.split(" ")
//     p.textContent = b.length
//     console.log (b)

// }

// let elem = document.querySelector('#elem')
// let p = document.querySelector('#p')
// elem.addEventListener('blur', func)
// function func(){
//     let a = elem.value
//     let arr = []
//     arr.push(a)
//     let b = a.split("")
//     p.textContent = b.length
//     console.log (b)

// }


// let elem = document.querySelector('#elem')
// let p = document.querySelector('#p')
// elem.addEventListener('blur', func)
// function func(){
//     let a = elem.value
//     let arr = []
//     arr.push(a)
//     let b = a.split("").filter(function(elem) {
//         if (elem > (' ')) {
//             return true;
//         }
//         });
//     p.textContent = b
//     console.log (b)

// }




// let elem = document.querySelector('#elem')
// let p = document.querySelector('#p')
// elem.addEventListener('blur', func)
// function func(){
//     let a = elem.value
//     let arr = {}
//    for(let i=0; i<a.length;i++){
//     let char = a.charAt(i)
//     if(!arr[char]){
//         arr[char] = 1;
//     }
//     else{
//         arr[char] += 1;
//     }
   
//     let text = '';
//     for(let texts in arr){
//         let g = arr[char];
//         let h = ((g/a.length)*100).toFixed(2);
//         text += texts +";"+ h + "%"
//     }

//     p.textContent =text

//     console.log (arr)
// }
// }





// let elem = document.querySelector('#elem')
// let check1 = document.querySelector('#check1')
// let check2 = document.querySelector('#check2')
// let check3 = document.querySelector('#check3')
// let check4 = document.querySelector('#check4')
// let p = document.querySelector('#p')
// elem.addEventListener('blur', func)
// function func(){
//     if(check1.checked){
//     let a = elem.value
//     let arr = []
//     arr.push(a)
//     let b = a.split(" ")
//     p.textContent = b.length
//     console.log (b)
// }
// if(check2.checked){
//         let a = elem.value
//     let arr = []
//     arr.push(a)
//     let b = a.split("")
//     p.textContent = b.length
//     console.log (b)
// }

// if(check3.checked){
//     let a = elem.value
//     let arr = []
//     arr.push(a)
//     let b = a.split("").filter(function(elem) {
//         if (elem > (' ')) {
//             return true;
//         }
//         });
//     p.textContent = b.length
//     console.log (b)
// }
// if(check4.checked){
//     let a = elem.value
//         let arr = {}
//        for(let i=0; i<a.length;i++){
//         let char = a.charAt(i)
//         if(!arr[char]){
//             arr[char] = 1;
//         }
//         else{
//             arr[char] += 1;
//         }
       
//         let text = '';
//         for(let texts in arr){
//             let g = arr[char];
//             let h = ((g/a.length)*100).toFixed(2);
//             text += texts +";"+ h + "%"
//         }
    
//         p.textContent =text
    
//         console.log (arr)
//     }
// }
// }