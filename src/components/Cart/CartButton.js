import { useDispatch, useSelector } from 'react-redux';
import { togleUi } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const cartTogleHandler = () => {
    dispatch(togleUi());
  };

  return (
    <button className={classes.button} onClick={cartTogleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
