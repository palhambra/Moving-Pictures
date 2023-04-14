

const newInstrument = async (event) => {
  event.preventDefault();

  const product_name = document.querySelector('#product_name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  const description = document.querySelector('#description').value.trim();
  const category_id = document.querySelector('#category_id').value;
  const image = document.querySelector('#image').files[0];

  if (product_name && price && stock && category_id && image) {
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('description', description);
    formData.append('category_id', category_id);
    formData.append('image', image);

    const response = await fetch('/api/instruments', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add instrument');
    }
  }
};

document
  .querySelector('.new-instrument-form')
  .addEventListener('submit', newInstrument);