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

import classNames from "classnames";

interface Props {
  item: Musician | Instrument;
  selected: boolean;
  onClick?: (item: Musician | Instrument) => void;
}

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    background: "white",
  },
<<<<<<< HEAD
  imageSelected: {
=======
  selected: {
>>>>>>> 3457be7 (fixing where the selected class is applied)
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
  }, [item.image]);

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div
<<<<<<< HEAD
        onClick={handleClick}
        className={classNames(classes.image, {
          [classes.imageSelected]: item.selected,
        })}
=======
        className={classNames(classes.image, { [classes.selected]: selected })}
        onClick={handleClick}
>>>>>>> 3457be7 (fixing where the selected class is applied)
      >
        {isInstrument && item.image ? (
          // render instruments
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={item.image}
            alt={`select ${item}`}
            width={150}
            height={150}
          />
        ) : !isInstrument && item.image ? (
          // render players
          <Image
            style={{ width: "auto", height: "280px" }}
            priority
            src={item.image}
            alt={`select ${
              "first_name" in item
                ? `${item.first_name} ${item.last_name}`
                : item.name
            }`}
            width={200}
            height={280}
          />
        ) : (
          <Image
            style={{ width: "auto", height: "auto" }}
            priority
            src="/assets/images/default-avatar-dark.svg"
            alt="default profile avatar dark"
            width={200}
            height={200}
          />
        )}
      </div>
      <Typography style={{ marginTop: "5%" }}>
        {"first_name" in item
          ? `${item.first_name} ${item.last_name}`
          : item.name}
      </Typography>
    </div>
  );
};

export default ItemCard;
