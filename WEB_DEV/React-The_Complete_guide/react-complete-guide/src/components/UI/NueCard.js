import "./NueCard.css";

function NueCard(props) {
  const classes = "nue-card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default NueCard;
