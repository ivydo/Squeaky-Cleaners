async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="review_text"]').value;
  
    const response = await fetch(`/api/maids`, {
      method: 'POST',
      body: JSON.stringify({
        review_text      
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
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  