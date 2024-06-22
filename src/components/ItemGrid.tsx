import classNames from "classnames";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ItemCard from "./ItemCard";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: "5%",
  },
  container: {
    maxWidth: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  scrollableContainer: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    "&::-webkit-scrollbar": {
      display: "none", // Hide the scrollbar
    },
  },
  card: {
    flex: "0 0 auto",
    margin: 15,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 8,
      marginRight: 8,
    },
    display: "flex",
  },
  grid: {
    display: "grid",
    gap: theme.spacing(2),
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  },
  gridItem: {
    flex: "1 1 100%",
  },
}));

interface Props {
  musicians?: Musician[];
  instruments?: Instrument[];
  selected: Musician[] | Instrument[];
  handleClickItem: (item: Musician | Instrument) => void;
}

const ItemGrid = ({
  musicians,
  instruments,
  selected,
  handleClickItem,
}: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isItemSelected = (item: Musician | Instrument) => {
    if ("musician_id" in item) {
      return selected.some(
        (selectedItem) =>
          "musician_id" in selectedItem &&
          selectedItem.musician_id === item.musician_id
      );
    } else {
      return selected.some(
        (selectedItem) =>
          "instrument_id" in selectedItem &&
          selectedItem.instrument_id === item.instrument_id
      );
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={classNames(classes.container, {
          [classes.scrollableContainer]: isMobile,
        })}
      >
        {musicians
          ? musicians.map((musician) => (
              <div className={classes.card} key={musician.musician_id}>
                <ItemCard
                  selected={isItemSelected(musician)}
                  item={musician}
                  onClick={() => handleClickItem(musician)}
                />
              </div>
            ))
          : instruments?.map((instrument) => (
              <div className={classes.card} key={instrument.instrument_id}>
                <ItemCard
                  selected={isItemSelected(instrument)}
                  item={instrument}
                  onClick={() => handleClickItem(instrument)}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ItemGrid;
