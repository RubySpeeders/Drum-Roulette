import Link from "next/link";
import Image from "next/image";
import navyLogo from "../../public/assets/images/USNavy-Band-Logo.png";

export default function Assignments() {
  return (
    <div>
      <h1>Musician Personnel Assignment</h1>
      <h3>Please Select Your Branch</h3>
      <Link href="/selectPlayers">
        <Image src={navyLogo} alt="navyLogo" />
      </Link>
    </div>
  );
}
