async function ringCreatorHandler(event) {
    event.preventDefault();
  
    const band = document.querySelector('#band-selection').value.trim();
    const stone = document.querySelector('#stone-selection').value.trim();
  
    if (band && stone) {
      const response = await fetch(`/api/rings`, {
        method: 'post',
        body: JSON.stringify({
          band,
          stone
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.ring-creator-submit').addEventListener('submit', ringCreatorHandler);