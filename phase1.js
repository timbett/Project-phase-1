
var form = document.getElementById('q-form')
var url = 'http://localhost:3000/questions'

form.addEventListener('submit', function(e){
    e.preventDefault()
    let loading = false
    var payload = {}
    var owner =  document.getElementById('student-name').value
    var table =  document.getElementById('table').value
    var question =  document.getElementById('student-question').value
    var tms = ['Koech Walui', 'Tim Karani', 'Lydia Muthoni', 'Gillian Chep', 'Tyrees Praus']
    var index = Math.floor(Math.random() * tms.length)
    var tm = tms[index]
    payload.owner = owner
    payload.table = table
    payload.question = question
    payload.tm = tm
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then(function(response){ 
    form.reset()
    return response.json()})
    .then(function(data)
    {console.log(data) 
    var leftContainer = document.getElementById('left-container')
    var dataContainer =  createNode('div')
    dataContainer.classList.add("query-container")
    var owner = createNode('p')
    var assignee = createNode('p')
    owner.innerHTML = `Question Owner: ${data.owner}`
    assignee.innerHTML = `Assigned To: ${data.tm}`
    dataContainer.append(owner)
    dataContainer.append(assignee)
    leftContainer.append(dataContainer) 

    }).catch(error => console.error('Error:', error)); 
});

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el); 
}

var leftContainer = document.getElementById('left-container')
window.onload = function red_flags(){

fetch(url,{
    method: 'GET',
    })
      .then((res)=> res.json())
      .then((data) =>{
        console.log(data, 'data')
            return data.forEach(question => {
                var dataContainer =  createNode('div')
                dataContainer.classList.add("query-container")
                var owner = createNode('p')
                var assignee = createNode('p')
                owner.innerHTML = `Question Owner: ${question.owner}`
                assignee.innerHTML = `Assigned To: ${question.tm}`
                dataContainer.append(owner)
                dataContainer.append(assignee)
                leftContainer.append(dataContainer) 
             })

        })
       .catch((e)=> console.log(e))
    }