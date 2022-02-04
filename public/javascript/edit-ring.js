async function editFormHandler(event) {
    event.preventDefault();
  
    const rings = document.querySelector('input[name="ring"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/rings/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        rings
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-ring-form').addEventListener('submit', editFormHandler);