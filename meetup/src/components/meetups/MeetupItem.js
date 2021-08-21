import { useContext } from "react";

import classes from "./MeetupItem.module.css";

import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesCxt = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCxt.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    // if item is already added in favourites list remove it from the list
    if (itemIsFavourite) {
      favouritesCxt.removeFavourite(props.id);
    }
    // else add the item to the favourite list
    else {
      favouritesCxt.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from favourites" : "Add to favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
