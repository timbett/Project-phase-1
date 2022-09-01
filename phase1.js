const submitToServer =  (data) => {
    const url = 'http://localhost:3000/questions'
    fetch(url, { method: 'POST', body: JSON.stringify(data)}).then(
        resp => resp.json()
    ).then(data => {
        console.log(data)
        return data
    })

}




function submitQuestion(){

    event.preventDefault()
    let loading = false
    const payload = {}
    const owner =  document.getElementById('student-name').value
    const table =  document.getElementById('table').value
    const question =  document.getElementById('student-question').value
    const tms = ['Koech Walui', 'Tim Karani', 'Lydia Muthoni', 'Gillian Chep', 'Tyrees Praus']
    const index = Math.floor(Math.random() * tms.length)
    const tm = tms[index]

    payload.owner = owner
    payload.table = table
    payload.question = question
    payload.tm = tm
    
    const response = submitToServer(payload)
    console.log(response)

}



