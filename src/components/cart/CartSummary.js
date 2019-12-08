import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import LoadingButton from "../layouts/LoadingButton";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    position: "-webkit-sticky",
    position: "sticky",
    top: theme.spacing(1)
  },
  right: {
    float: "right"
  },
  divider: {
    margin: theme.spacing(1)
  },
  control: {
    marginBottom: theme.spacing(2)
  }
}));

const CartSummary = ({ cart, to, handleClick }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.control}>
        <Typography display="inline">
          Total Price ({cart.items_count} product)
        </Typography>
        <Typography display="inline" className={classes.right}>
          {(cart.total_price + cart.total_customer_profit).toFixed(2)}$
        </Typography>
      </div>
      <div className={classes.control}>
        <Typography color="primary" display="inline">
          Your profit
        </Typography>
        <Typography color="primary" display="inline" className={classes.right}>
          {cart.total_customer_profit}$
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.control}>
        <Typography align="center" className={classes.center}>
          The amount payable:
        </Typography>
        <Typography variant="h6" align="center" className={classes.center}>
          {cart.total_price}$
        </Typography>
      </div>
      <LoadingButton
        onClick={handleClick}
        component={Link}
        to={to}
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Check out
      </LoadingButton>
    </Paper>
  );
};

export default CartSummary;
