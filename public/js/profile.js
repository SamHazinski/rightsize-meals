const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#user-name').value.trim();
  const email = document.querySelector('#user-email').value.trim();
  const password = document.querySelector('#user-password').value.trim();
  const age = document.querySelector('#user-age').value.trim();
  const gender = document.querySelector('#user-gender').value.trim();
  const height = document.querySelector('#user-height').value.trim();
  const weight = document.querySelector('#user-weight').value.trim();
  const exerciseLevel = document.querySelector('#user-exerciseLevel').value.trim();

  // let userFormInput = [name, email , password , age , gender , height , weight,exerciseLevel ]

  console.log(`Name: ${name}, Email: ${email}, ${password}, Age: ${age}, Gender: ${gender}, Height: ${height}, Weight: ${weight} Level ${exerciseLevel}`);

  if (name && email && password && age && gender && height && weight && exerciseLevel) {
    
    console.log("You clicked me!");
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({ name, email ,password , age , gender , height , weight,exerciseLevel }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(function(response){
      console.log(response);
    });
  }
  else {
    alert("Some validation failed");
  }

  //   if (response.ok) {
  //     document.location.replace('/profile');
  //   } else {
  //     alert('Incorrect entry, please make sure to fill out all items');
  //   }
  // }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('#new-user-submit')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
