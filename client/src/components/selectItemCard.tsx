import React from "react";
import { Instrument } from "@/interfaces/instrument";
import { Musician } from "@/interfaces/musician";
import classNames from "classnames";
import Image from "next/image";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  item: Musician;
  handleClick: (item: Musician) => void;
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

export const SelectItemCard = ({ item, handleClick }: Props) => {
  const classes = useStyles();
  return (
    <div key={item.user_id} className={classNames(classes.card)}>
      <div
        className={classNames(classes.image, {
          [classes.selected]: item.selected,
        })}
        key={item.user_id}
        onClick={() => handleClick(item)}
      >
        <Image
          priority
          src={item.image}
          alt={`select ${item.first_name}`}
          width={200}
          height={280}
        />
      </div>
      <Typography style={{ marginTop: "5%" }}>
        {item.first_name} {item.last_name}
      </Typography>
    </div>
  );
};
