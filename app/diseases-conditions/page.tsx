"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { DiseaseConditionItem } from "@/components/index";
import { Button } from "@/components/ui/button";
type DiseasesConditionsItem = {
  name: string;
  url: string;
  seeMore: {
    text: string;
    url: string;
  };
};
type DiseasesConditions = { 
  [key: string]: DiseasesConditionsItem[];
};

const DiseasesConditions = () => {
  const [diseases, setDiseases] = useState<DiseasesConditions>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiseasesConditions = async () => {
      try {
        const diseasesRef = collection(db, "diseases");
        const docSnap = await getDocs(diseasesRef);
        const diseasesConditions: DiseasesConditions = {};
        if (docSnap) {
          docSnap.forEach((doc) => {
            const data = doc.data();
            const docId = doc.id;
            diseasesConditions[docId] = data.conditions;
          });
        }
        setDiseases(diseasesConditions);
      } catch (error) {
        console.error("Error fetching diseases:", error);
        setError("An error occurred while fetching the diseases."); // Set error message
      } finally {
        setLoading(false);
      }
    };
    fetchDiseasesConditions();
  }, []);

  // useEffect(() => {
  //   const fetchDiseasesConditions = async () => {
  //     try {
  //       const response = await fetch("/diseases-conditions/api");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data: DiseasesConditions = await response.json();
  //       if (data) {
  //         Object.entries(data).forEach(([letter, conditions]) => {
  //           try {
  //             setDoc(doc(db, "diseases", letter), {conditions}, { merge: true });
  //           } catch (err) {
  //             console.log(err);
  //           }
  //         });
  //       }
  //       setDiseases(data);
  //     } catch (error) {
  //       console.error("Error fetching diseases:", error);
  //       setError("An error occurred while fetching the diseases.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDiseasesConditions();
  // }, []);
  return (
    <main className="px-4 py-8 sm:px-16 md:px-32">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">
          Diseases & Conditions
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">LOADING...</div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          Object.entries(diseases).map(([letter, conditions]) => (
            <DiseaseConditionItem key={letter} mainLetter={letter}>
              {conditions.map((condition) => (
                <li key={condition.name}>
                  <a
                    target="_blank"
                    href={
                      condition.url !== "N/A"
                        ? condition.url
                        : condition.seeMore.url
                    }
                  >
                    <Button className="whitespace-break-spaces text-start" variant="link">
                      {condition.seeMore.text === "N/A"
                        ? condition.name
                        : `${condition.name} - ${condition.seeMore.text}`}
                    </Button>
                  </a>
                </li>
              ))}
            </DiseaseConditionItem>
          ))
        )}
      </div>
    </main>
  );
};

export default DiseasesConditions;
