async function ringCreatorHandler(event) {
  console.log(event)
  event.preventDefault();
  const band = document.querySelector('input[name="band"]').value.trim();
  const stone = document.querySelector('input[name="stone"]').value.trim();
  const size = document.querySelector('input[name="ring-size"]').value.trim();
  const title = document.querySelector('input[name="ring-title"]').value.trim();
  const user_id = 1
  if (band && stone && size && title) {
    const response = await fetch(`/api/rings/add`, {
      method: 'POST',
      body: JSON.stringify({
        band,
        stone,
        size,
        title,
        user_id
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then (function(response){
      if (response.ok) {
        // document.location.replace('/ring');
      } else {
        alert(response.statusText);
      }
      return response.json()
    })
    .then(function(data){
      console.log(data)
        document.location.replace('/ring/' + data.id);
    })
}
}
document.querySelector('.new-ring-form').addEventListener('submit', ringCreatorHandler);