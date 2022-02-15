async function ringCreatorHandler(event) {
    event.preventDefault();
  
    const band = document.querySelector('input[name="band"]').value.trim();
    const stone = document.querySelector('input[name="stone"]').value.trim();
    const size = document.querySelector('input[name="ring-size"]').value.trim();
    const title = document.querySelector('input[name="ring-title"]').value.trim();
      
    if (band && stone && size && title) {
      const response = await fetch(`/build`, {
        method: 'POST',
        body: JSON.stringify({
          band,
          stone,
          size,
          title
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/landing');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.new-ring-form').addEventListener('submit', ringCreatorHandler);


