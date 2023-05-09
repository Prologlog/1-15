// let input = document.querySelector('#input');
// let table = document.querySelector('#table');		
// let arr = {2020: [{date: '11.11.2020',name: 'событие 1',text: 'описание события 1'},{date: '11.11.2020',name: 'событие 2',text: 'описание события 2'}],
//                 2021: [
//                     {
//                         date: '11.11.2021',
//                         name: 'событие 3',
//                         text: 'описание события 3'
//                     },
//                     {
//                         date: '11.11.2021',
//                         name: 'событие 4',
//                         text: 'описание события 4'
//                     },
//                     {
//                         date: '11.11.2021',
//                         name: 'событие 5',
//                         text: 'описание события 5'
//                     },
//                 ],
//                 2022: [
//                     {
//                         date: '11.11.2022',
//                         name: 'событие 6',
//                         text: 'описание события 6'
//                     },
//                     {
//                         date: '11.11.2022',
//                         name: 'событие 7',
//                         text: 'описание события 7'
//                     },
//                     {
//                         date: '11.11.2022',
//                         name: 'событие 8',
//                         text: 'описание события 8'
//                     },
//                     {
//                         date: '11.11.2022',
//                         name: 'событие 9',
//                         text: 'описание события 9'
//                     },
//                 ],
//             };            
// input.addEventListener('keydown',func)
// function func(event) {
// if (event.key == 'Enter') {
//     let year = input.value;
//     if (arr[year]) {
//         table.textContent = '';
//         for (let event of arr[year]) {
//             let tr = document.createElement('tr');
//             let td = document.createElement('td');
//             td.textContent = event.date;
//             tr.appendChild(td);
//             td = document.createElement('td');
//             td.textContent = event.name;
//             tr.appendChild(td);
//             td = document.createElement('td');
//             td.textContent = event.text;
//             tr.appendChild(td);
//             table.appendChild(tr);
//             }
//         }
//     }
// }
            