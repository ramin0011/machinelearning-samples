const serviceUrl = 'http://localhost:5000/api/ObjectDetection/IdentifyObjects';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    //alert('Before image submit');

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    formData.append('imageFile', files[0]);

    // If multiple files uploaded at the same time:
    //for (let i = 0; i < files.length; i++) {
    //    let file = files[i];
    //
    //    formData.append('imageFile[]', file);
    //}
   

    fetch(serviceUrl, {
        method: 'POST',
        body: formData
    }).then((resp) => resp.json())
      .then(function (response) {
          console.info('Response', response);
          console.log('Response', response);
                    
          document.getElementById('divPrediction').innerHTML = "Detected Objects are: " + response;

          return response;
        });


});