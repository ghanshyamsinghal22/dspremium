import ProductDisplay from '../PrdouctDisplay';
import Coriander_500_0 from '../../img/500gm/Coriander500-0.jpg';
import Coriander_500_1 from '../../img/500gm/Coriander500-1.jpg';
import Coriander_500_2 from '../../img/500gm/Coriander500-2.jpg';
import Coriander_500_3 from '../../img/500gm/Coriander500-3.jpg';

function Coriander500(){
  const productData = {
    name: "D S Premium Coriander Powder (500 gm)",
    price: 500,
    originalprice:500,
    images: [Coriander_500_0,Coriander_500_1,Coriander_500_2,Coriander_500_3],
    description:"Coriander powder is a spice made from dried and ground coriander seeds. It is a popular ingredient in many cuisines around the world, coriander powder is a versatile spice that can be used in a wide range of dishes to add a unique and aromatic taste. Its culinary uses and health benefits make it a valuable addition to many kitchens around the world. It is a good source of dietary fiber, vitamins, and minerals, including calcium, iron, and magnesium. It is commonly used as a seasoning in curries, stews, marinades, and spice blends.",
    weight:500
};
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default Coriander500;