// React/ Next.js Imports
import Image from "next/image";
import { useEffect, useState } from "react";

// Library Imports
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

// Type/ Interface Imports
import { Instrument } from "@/interfaces/instrument";
import { Musician } from "@/interfaces/musician";

interface Props {
  item: Musician | Instrument;
  selected?: boolean;
  onClick?: (item: Musician | Instrument) => void;
}

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "85px",
    },
  },
  image: {
    width: 125,
    height: 125,
    [theme.breakpoints.down("xs")]: {
      width: 80,
      height: 80,
    },
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    background: "white",
    position: "relative",
  },
  musicianImage: {
    objectFit: "contain",
    width: "auto",
    height: "280px",
    [theme.breakpoints.down("xs")]: {
      height: "180px",
    },
  },
  text: {
    display: "flex",
    alignItems: "center",
    height: "55px",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
    },
  },
  selected: {
    boxShadow: "0 0 0 5px #D745D1",
  },
}));

const ItemCard = ({ item, selected, onClick }: Props) => {
  const handleClick = () => {
    onClick && onClick(item);
    onClick;
  };

  const [isInstrument, setInstrument] = useState(false);

  // check if the image is an instrument
  useEffect(() => {
    setInstrument(item.image.includes("instruments"));
  }, [item?.image]);

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div
        className={classNames(classes.image, { [classes.selected]: selected })}
        onClick={handleClick}
      >
        {isInstrument && item.image ? (
          // render instruments
          <Image
            priority
            src={item.image}
            alt={`select ${"instrument_name" in item && item.instrument_name}`}
            fill
            sizes="(max-width: 480px) 80px, 150px"
            style={{ objectFit: "contain" }}
          />
        ) : !isInstrument && item.image ? (
          // render players
          <Image
            priority
            src={item.image}
            alt={`select ${
              "first_name" in item && `${item.first_name} ${item.last_name}`
            }`}
            sizes="(max-width: 480px) 80px, 150px"
            className={classes.musicianImage}
            style={{ width: "auto" }}
            width={200}
            height={280}
          />
        ) : (
          <Image
            priority
            src="/assets/images/default-avatar-dark.svg"
            alt="default profile avatar dark"
            fill
            sizes="(max-width: 480px) 80px, 150px"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      {"musician_id" in item ? (
        <Typography className={classes.text}>
          {item.first_name} {item.last_name}
        </Typography>
      ) : (
        <Typography className={classes.text}>{item.instrument_name}</Typography>
      )}
    </div>
  );
};

export default ItemCard;
