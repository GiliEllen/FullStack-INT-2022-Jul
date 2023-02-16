//CLIENT

async function getUSerHistory() {
  try {
    const productsId = []
    //@ts-ignore
    const {data} = await axios.post(`/api/v1/products/${userId}`, {productsId})
    const {products} = data;

    renderTable(products)
  } catch (error) {
    console.error(error)
  }
}

//SERVER

export async function getAllUsersProducts(req,res) {
  try {
    const {userId} = req.params;
    
    
    const userProductsDB = await UserProductModel.find({userId: userId})

    const products = []

    await userProductsDB.forEach( async (userProduct) => {
      const productInfo = await ProductModel.findById(userProduct._id)
      products.push(productInfo)
    });

    res.send({products})

  } catch (error) {
    
  }
}