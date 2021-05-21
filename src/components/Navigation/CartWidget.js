import { Cart } from 'react-bootstrap-icons';

export default function CartWidget() {
    return(
        <div style={{color:"white", display:"flex"}}>
        <Cart className="ml-4" size={36}/>
        </div>
    )
}