async function ringCreatorHandler(event) {
    event.preventDefault();
  
    const band = document.querySelector('#band-selection').value.trim();
    const stone = document.querySelector('#stone-selection').value.trim();
    const size = document.querySelector('#ring-size').value.trim();
    const title = document.querySelector('#ring-title').value.trim();
  
    if (band && stone) {
      const response = await fetch(`/api/rings`, {
        method: 'post',
        body: JSON.stringify({
          band,
          stone,
          title,
          size
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/ring');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.ring-creator-submit').addEventListener('submit', ringCreatorHandler);