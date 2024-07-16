import classNames from "classnames";

import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ItemCard from "./ItemCard";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";

const useStyles = makeStyles((theme) => ({
  selected: {
    boxShadow: "0 0 0 5px #D745D1",
    borderRadius: "100px",
    height: "150px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: "5%",
  },
  scrollableContainer: {
    display: "flex",
    overflowX: "auto",
    gap: theme.spacing(2),
    padding: theme.spacing(1),
    "&::-webkit-scrollbar": {
      display: "none", // Hide the scrollbar
    },
  },
  card: {
    flex: "0 0 auto",
    margin: 15,
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
  selectedMusicians?: Musician[];
  selectedInstruments?: Instrument[];
  handleClickItem: (item: Musician | Instrument) => void;
}

const ItemGrid = ({
  musicians,
  instruments,
  selectedInstruments,
  selectedMusicians,
  handleClickItem,
}: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div className={classNames({ [classes.scrollableContainer]: isMobile })}>
        {musicians
          ? musicians.map((musician) => (
              <div
                className={classNames(classes.card, {
                  [classes.selected]: selectedMusicians?.some(
                    (selectedMusician) =>
                      selectedMusician.musician_id === musician.musician_id
                  ),
                })}
                key={musician.musician_id}
              >
                <ItemCard
                  item={musician}
                  onClick={() => handleClickItem(musician)}
                />
              </div>
            ))
          : instruments?.map((instrument) => (
              <div
                className={classNames(classes.card, {
                  [classes.selected]: selectedInstruments?.some(
                    (selectedInstrument) =>
                      selectedInstrument.instrument_id ===
                      instrument.instrument_id
                  ),
                })}
                key={instrument.instrument_id}
              >
                <ItemCard
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
