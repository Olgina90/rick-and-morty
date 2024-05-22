import Image from "next/image";
import styles from "./page.module.css";

import RnMCard from "@/RnMCard";
import SecondCard from "@/SecondCard";

export default function Home() {
  return (
    <div>
      <RnMCard />
      <SecondCard />
    </div>
  );
}
