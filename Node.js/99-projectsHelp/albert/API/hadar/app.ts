function renderImages(imageArray) {
    try {
      const root = document.querySelector(".root");
  
      imageArray.forEach(image => {
        const imageId = image._id
        const imageContainer = document.createElement('div')
        const img = document.createElement('img')
        img.src = image.src
        const header = document.createElement('h3')
        const deleteimage = document.createElement('span') // google icons
        //classlist material-symbols-outlined
        deleteimage.innerText = "close"
        deleteimage.setAttribute('onclick', `handelDeleteImage(${imageId})`)
  
        header.innerText = `${image.imagename}`
  
        //append img to div and div to root append image to div append closesapn
        //classlist 
  
  
      });
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handelDeleteImage() {
  
  }

  //new page calles editimage
  //find the image by name
  //form edit image by name