import Link from "next/link";
import Image from "next/image";
import navyLogo from "../../public/assets/images/USNavy-Band-Logo.png";
import { Typography } from "@mui/material";

export default function Assignments() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "80vw" }}>
      <h1>Musician Personnel Assignment</h1>
      <h2>randomly generate assignments with one click</h2>
      <h3>Please Select Your Branch</h3>
      <Link href="/selection">
        <Image src={navyLogo} alt="navyLogo" height={100} width={100} />
        <Typography>US Navy Band</Typography>
      </Link>
    </div>
  );
}
