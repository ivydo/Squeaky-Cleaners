async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="review-title"]').value.trim();

    const textarea = document.querySelector('textarea[name="review_text"]').value.trim();

    const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            textarea
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

//button to save changes to review
document.querySelector('.edit-review-form').addEventListener('submit', editFormHandler);