let n = document.getElementById('btnNew');
var x =0;
n.addEventListener('click',function (e){
    e.preventDefault();
    document.getElementById('username').value=""
    document.getElementById('schoolname').value=""
    document.getElementById('contact').value=""
   document.getElementById('usermessage').innerHTML=""
    document.getElementById('schoolmessage').innerHTML=""
   document.getElementById('contactmessage').innerHTML=""

})




let f= document.getElementById('save')
f.addEventListener('click',function(e){
    e.preventDefault()
    let username = document.getElementById('username').value;
    let school = document.getElementById('schoolname').value;
    let contact = document.getElementById('contact').value;

    
    let patt = /[^a-z]/gi;
    let pattschool = /[^a-z \s]/gi;
    let pattContact = /[^0-9]/gi;
    let msgResult = document.getElementById('usermessage');
    let sResult = document.getElementById('schoolmessage');
    let pResult = document.getElementById('contactmessage');


  let info = {
        username:username,
        school:school,
        contact:contact

    }
    let sValaidate;
    let uValidate;
    let cValidate;
    if (username.match(patt) != null){
        msgResult.innerHTML = "*Please input only character from a-z";
        msgResult.style.color = 'red';
        uValidate = false;
    }

    if(username.match(patt) == null){
        msgResult.innerHTML = "The value is correct";
        msgResult.style.color = 'green';
        uValidate = true;
      
    }
    
    if(username == "" || username == null){
        msgResult.innerHTML = "*Please input the value";
        msgResult.style.color = 'red';
 

        uValidate = false;
    }
    if (school.match(pattschool) != null){
        sResult.innerHTML = "*Please input only character from a-z";
        sResult.style.color = 'red';
        sValidate = false;
    }

    if(school.match(pattschool) == null){
        sResult.innerHTML = "*Correct";
        sResult.style.color = 'green';
        sValidate = true;
      
    }
    if(school == "" || school == null){
        sResult.innerHTML = "*Please input school name";
        sResult.style.color = 'red'
        sValaidate = false;
    }
    if(contact == "" || contact == null){
        pResult.innerHTML = "*Please phone number";
        pResult.style.color = 'red'
        cValaidate = false;
    }
    
  
    if(contact.length >9 || contact.length >10){
        pResult.innerHTML = "*invalid contact"
        pResult.style.color = 'red';
        cValidate = false;

    }
    if (contact.match(pattContact) != null){

        pResult.innerHTML = "*invalid contact"
        pResult.style.color = 'red';
        cValidate = false
    }
    if (contact[0] == '0' && contact.match(pattContact) == null){
        pResult.innerHTML = "correct"
        pResult.style.color = "green"
        cValidate = true
    }
  
    if (uValidate && sValidate && cValidate){
        addTable(info);
         document.getElementById('save').setAttribute('data-dismiss', "modal")
        
         toastr.success('1 row is added');
      }

      else{
      
        document.getElementById('save');

      }
})
function addTable(info){
    let row = document.createElement('tr');
    let column1 = document.createElement('td');
    let column2 = document.createElement('td');
    let column3 = document.createElement('td');
    let column4 = document.createElement('td');
    let title = document.createTextNode("Delete");
    let b = document.createElement('button');
    b.setAttribute("onclick","removeinfo(this)");
    b.className = "btn btn-outline-secondary waves-effect"
        // new button edit
 
    // let edit = document.createTextNode('Edit');
    // let e = document.createElement('button');
    // e.setAttribute("onclick","removeinfo(this)");
    // e.className = "btn btn-outline-secondary waves-effect"
    let usr = document.createTextNode(info.username);
    let sname = document.createTextNode(info.school);
    let contact = document.createTextNode(info.contact);
//    --------------------------------appen child.......................--

    column1.appendChild(usr)
    column2.appendChild(sname)
    column3.appendChild(contact)
    b.appendChild(title);
    column4.appendChild(b);
    // e.appendChild(edit);
    // column4.appendChild(e);

    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);
}
let isValidate ; 

function removeinfo(btn){
    // let r= confirm("Do you want to delete?");




    // if(r ==true){
    let parent = btn.parentNode.parentNode.parentNode;
    let currentrow = btn.parentNode.parentNode;
 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          parent.removeChild(currentrow);
        }
      })
    
}
