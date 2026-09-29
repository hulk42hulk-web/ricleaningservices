import DienstenClient from "./DienstenClient";

export const metadata = {
  title: "Schoonmaakdiensten Amsterdam | Kantoren, Scholen & Bedrijven",
  description:
    "Overzicht van alle professionele schoonmaakdiensten van Ri Cleaning Services in Amsterdam: kantoorschoonmaak, schoolreiniging, bedrijfsschoonmaak en huishoudelijke service.",
  keywords: [
    "kantoor schoonmaak Amsterdam",
    "school schoonmaak Amsterdam",
    "bedrijfsschoonmaak Amsterdam",
    "huishoudelijke schoonmaak Amsterdam",
    "dagelijkse schoonmaak",
    "periodieke schoonmaak",
  ],
};

export default function DienstenPage() {
  return <DienstenClient />;
}
