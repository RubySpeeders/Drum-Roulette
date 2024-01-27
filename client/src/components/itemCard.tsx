// React/ Next.js Imports
import React from "react";
import Image from "next/image";
// Library Imports
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// Type/ Interface Imports
import { Instrument } from "@/interfaces/instrument";
import { Musician } from "@/interfaces/musician";
// Styles or CSS Imports
import classNames from "classnames";

interface Props {
  item: Musician | Instrument;
  onClick: (item: Musician | Instrument) => void;
}

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "2%",
  },
  selected: {
    boxShadow: "0 0 0 5px #37A8FA",
  },
  image: {
    width: 200,
    height: 200,
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const ItemCard = ({ item, onClick }: Props) => {
  const handleClick = () => {
    onClick(item);
  };
  const classes = useStyles();
  return (
    <div className={classNames(classes.card)}>
      <div
        className={classNames(classes.image, {
          [classes.selected]: item.selected,
        })}
        onClick={handleClick}
      >
        <Image
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
      </div>
      <Typography style={{ marginTop: "5%" }}>
        {"first_name" in item
          ? `${item.first_name} ${item.last_name}`
          : item.name}
      </Typography>
    </div>
  );
};
