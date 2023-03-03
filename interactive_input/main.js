
// window.addEventListener('load', () => {  
//     const form = document.querySelector("#new-table-form")
//     const name_input = document.querySelector("#name-input")
//     const age_input = document.querySelector("#age-input")
//     const job_input = document.querySelector("#job-input")
//     const color_input = document.querySelector("#color-input")
//     const main_table_el = document.querySelector("#task-body")


//     form.addEventListener('click', () => {
// 		e.preventDefault();

//         const name = name_input.value;
//         const age = age_input.value;
//         const job = job_input.value;
//         const color = color_input.value;


//         const table_el = document.createElement('tr')
        
//         const input_td_name = document.createElement('td')
//         input_td_name.innerText = name_input

//         const input_td_age = document.createElement('td')
//         input_td_age.innerText = age_input       

//         const input_td_job = document.createElement('td')
//         input_td_job.innerText = job_input

//         table_el.appendChild(input_td_name)
//         table_el.appendChild(input_td_age)
//         table_el.appendChild(input_td_job)

//         main_table_el.appendChild(table_el)
//     })
// })


function deleteRow(e) {
    const btn = e.target;
    btn.closest("tr").remove();
}

function addData(){

    const name_input = document.querySelector("#name-input").value
    const age_input = document.querySelector("#age-input").value
    const job_input = document.querySelector("#job-input").value
    const color_input = document.querySelector("#color-input").value
    const main_table_el = document.querySelector("#task-body")

    
    const table_el = document.createElement('tr')
        
    const input_td_name = document.createElement('td')
    input_td_name.innerText = name_input

    const input_td_age = document.createElement('td')
    input_td_age.innerText = age_input       

    const input_td_job = document.createElement('td')
    input_td_job.innerText = job_input

    const delete_td_row = document.createElement("td")

    const row_delete_el = document.createElement('button')
    row_delete_el.classList.add('delete')
	row_delete_el.innerText = 'Delete'
    
    // basılınca fonksiyonu çalıştıracak
    row_delete_el.addEventListener("click", deleteRow);
    
    delete_td_row.appendChild(row_delete_el)

    

    table_el.appendChild(input_td_name)
    table_el.appendChild(input_td_age)
    table_el.appendChild(input_td_job)
    table_el.appendChild(delete_td_row)
    table_el.style.backgroundColor = color_input

    main_table_el.appendChild(table_el)

    

}




