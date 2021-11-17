//Book Constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){}

//Add book to list
UI.prototype.addBookToList = function(book){
    // console.log(book);
    const list = document.getElementById('book-list');
    //Create tr element
    const row = document.createElement('tr');
    // const data = document.createElement('td');

    // console.log(row);
    //Instantiate values of book element
    row.innerHTML = 
    `   <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;

    list.append(row);

}
//Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '',
    document.getElementById('author').value = '',
    document.getElementById('isbn').value = ''
}

//Show Alert
UI.prototype.showAlert = function(message,className){
    //Create div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div,form);
    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault();
    //Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    // console.log(title,author,isbn);

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Please fill in all fields','error');
    }else{

        //Add book to list
        ui.addBookToList(book);
        //Show sucess
        ui.showAlert('Book Added !','success');


        //Clear fields
        ui.clearFields();


    }

})
