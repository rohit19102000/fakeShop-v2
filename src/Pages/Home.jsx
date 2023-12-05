import ProductResults from '../components/Products/ProductResults'
export default function Home({getDetails}) {

  return (
    <div>
      <ProductResults  getDetails={getDetails}/>
    </div>
  )
}


