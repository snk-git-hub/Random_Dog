async function fetchDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.message) {
            throw new Error('Unexpected response format');
        }

        const dogImageElement = document.getElementById('dog-image');
        dogImageElement.src = data.message;
        dogImageElement.alt = 'A random dog image';
    } catch (error) {
        console.error('Failed to fetch the dog image:', error);

        const dogImageElement = document.getElementById('dog-image');
        dogImageElement.src = '';
        dogImageElement.alt = 'Failed to load a dog image';

        alert('Oops! Something went wrong while fetching the dog image. Please try again later.');
    }
}
