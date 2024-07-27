"use client";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { DiseaseConditionItem } from "@/components/index";
import puppetter from "puppeteer";
type DiseasesConditions = {
  [key: string]: string[];
};

const DiseasesConditions = () => {
  const [diseases, setDiseases] = useState<DiseasesConditions>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const fetchDiseasesConditions = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "diseases"));
  //     const fetchedDiseases: DiseasesConditions = {};
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data() as DiseasesConditions;

  //       const sortedKeys = Object.keys(data).sort();

  //       for (const letter of sortedKeys) {
  //         fetchedDiseases[letter] = data[letter];
  //       }
  //     });
  //     setDiseases(fetchedDiseases);
  //   } catch (error) {
  //     console.error("Error fetching diseases:", error);
  //     setError("An error occurred while fetching the diseases."); // Set error message
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // fetchDiseasesConditions();
  }, []);

  return (
    <main className="px-4 py-8 sm:px-16 md:px-32">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">
          Diseases & Conditions
        </h1>

        {loading ? (
          <div className="flex justify-center items-center"></div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          Object.entries(diseases).map(([letter, conditions]) => (
            <DiseaseConditionItem key={letter} mainLetter={letter}>
              {conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </DiseaseConditionItem>
          ))
        )}
      </div>
    </main>
  );
};

export default DiseasesConditions;
