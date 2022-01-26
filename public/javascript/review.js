async function reviewFormHandler(event) {
    event.preventDefault();
  
    const review_text = document.querySelector('textarea[name="review-body"]').value.trim();

    const maid_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const title = document.querySelector('input[name="review-title"]').value.trim();
  
    if (review_text) {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
          maid_id,
          title,
          review_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

  document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);
  