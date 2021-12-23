export default function BasketItem(props) {
  const { id, name, price, quantity, removeFromBasket, decrementQuantity, incrementQuantity } = props
  return (
    <li className="collection-item">{name} x{quantity} = {price * quantity}$
      <span className="secondary-content">
        <a onClick={() => incrementQuantity(id)} className="waves-effect waves-light btn btnq" href="#!">
          <i className="material-icons left">exposure_plus_1</i>add</a>
        <a
          style={{ margin: '0px 10px' }}
          onClick={() => decrementQuantity(id)}
          className="waves-effect waves-light btn btnq" href="#!">
          <i className="material-icons left">exposure_minus_1</i>remove</a>
        <a href="#!"
          className="waves-effect waves-light btn btnq"
          onClick={() => removeFromBasket(id)}>
          <i className="material-icons basket-delete" >delete_forever</i>
        </a>

      </span>
    </li>
  )
}