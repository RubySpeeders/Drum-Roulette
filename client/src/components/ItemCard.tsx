// React/ Next.js Imports
import Image from "next/image";
import { useEffect, useState } from "react";

// Library Imports
import { Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Type/ Interface Imports
import { Instrument } from "@/interfaces/instrument";
import { Musician } from "@/interfaces/musician";

interface Props {
  item: Musician | Instrument;
  onClick?: (item: Musician | Instrument) => void;
}

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    background: "white",
  },
}));

export const ItemCard = ({ item, onClick }: Props) => {
  const handleClick = () => {
    onClick && onClick(item);
    onClick;
  };

  const [isInstrument, setInstrument] = useState(false);
  const isMobile = useMediaQuery("(max-width:500px)");

  // check if the image is an instrument
  useEffect(() => {
    setInstrument(item.image.includes("instruments"));
  }, [item.image]);

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div
        className={classes.image}
        style={{
          width: isMobile ? 100 : 150,
          height: isMobile ? 100 : 150,
        }}
        onClick={handleClick}
      >
        {isInstrument && item.image ? (
          // render instruments
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={item.image}
            alt={`select ${item}`}
            width={isMobile ? 100 : 150}
            height={isMobile ? 100 : 150}
          />
        ) : !isInstrument && item.image ? (
          // render players
          <Image
            style={{ width: "auto", height: "auto" }}
            priority
            src={item.image}
            alt={`select ${
              "first_name" in item
                ? `${item.first_name} ${item.last_name}`
                : item.name
            }`}
            width={isMobile ? 100 : 200}
            height={isMobile ? 140 : 280}
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
