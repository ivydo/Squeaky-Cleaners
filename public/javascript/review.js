

async function reviewFormHandler(event) {
    event.preventDefault();
  
    const review_text = document.querySelector('textarea[name="review-body"]').value.trim();

    const maid_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const title = document.querySelector('input[name="review-title"]').value.trim();

    //const username = document.querySelector('{{username}}').value.trim();
  
    if (review_text) {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
          maid_id,
          title,
          review_text,
          //username
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        document.location.reload();
      })
      .catch(err => {
        console.log(err);
        alert(response.statusText);
      });

      // if (response.ok) {
        
      // } else {
        //alert(response.statusText);
      // }
    }
}

//submit new review
  document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);
  