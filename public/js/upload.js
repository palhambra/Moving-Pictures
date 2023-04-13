const newInstrument = async (event) => {
  event.preventDefault();

  const product_name = document.querySelector('#product_name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  const category_id = document.querySelector('#category_id').value;
console.log(product_name, price, stock, category_id )

  if (product_name && price && stock && category_id) {
    const response = await fetch(`/api/instruments`, {
      method: 'POST',
      body: JSON.stringify({ product_name, price, stock, category_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    
  console.log(response)
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