import "./GlassCard.css";

function GlassCard(props) {
  const classes = "glass-card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default GlassCard;
