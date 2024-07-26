"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";

type DiseasesConditions = {
  [key: string]: string[];
};
const DiseasesConditions = () => {
  const [diseases, setDiseases] = useState<DiseasesConditions>({});

  const fetchDiseasesConditions = async () => {
    const querySnapshot = await getDocs(collection(db, "diseases"));

    const fetchedDiseases: DiseasesConditions = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data() as DiseasesConditions;

      const sortedLetters = Object.keys(data).sort();

      sortedLetters.forEach((letter) => {
        fetchedDiseases[letter] = data[letter];
      });
    });

    setDiseases(fetchedDiseases);
  };
  useEffect(() => {
    fetchDiseasesConditions();
  }, []);
  return (
    <div>
      {Object.entries(diseases).map(([key, value]) => (
        <div key={key}>
          <h1>{key}</h1>
          <ul>
            {value.map((disease) => (
              <li key={disease}>{disease}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DiseasesConditions;
