async function newFormHandler(event) {
    event.preventDefault();
  
    const rings = document.querySelector('input[name="ring"]').value;
    const display = document.querySelector('input[name="ring-img"]').value;
  
    const response = await fetch(`/api/rings`, {
      method: 'POST',
      body: JSON.stringify({
        rings,
        display
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-ring-form').addEventListener('submit', newFormHandler);