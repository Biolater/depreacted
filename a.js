import puppeteer from "puppeteer";
const training = async () => {
  const allLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.mayoclinic.org/diseases-conditions");

  const diseaseNames = {};

  for (const letter of allLetters) {
    await page.goto(
      `https://www.mayoclinic.org/diseases-conditions/index?letter=${letter}`
    );
    const diseases = (
      await page.$$(
        `#cmp-skip-to-main__content  .cmp-result-letters + ul li`
      )
    ).filter((_, idx) => idx < 10);

    const diseaseArr = [];
    await Promise.all(
      diseases.map(async (disease) => {
        const diseaseName = await disease.evaluate((el) => {
          return (
            el.querySelector(".cmp-result-name a")?.textContent ||
            el.querySelector(".cmp-results-with-primary-name p")
              ?.textContent
          );
        });

        const diseaseUrl = await disease.evaluate((el) => {
          return el.querySelector(".cmp-result-name a")?.href || "N/A";
        });

        const seeMore = await disease.evaluate((el) => {
          const seeMoreElement = el.querySelector(
            ".cmp-results-with-primary-name__see"
          );

          return {
            text: seeMoreElement ? seeMoreElement?.textContent : "N/A",
            url: seeMoreElement
              ? seeMoreElement?.querySelector("a")?.href
              : "N/A",
          };
        });

        const diseaseObj = {
          name: diseaseName,
          url: diseaseUrl,
          seeMore,
        };
        diseaseArr.push(diseaseObj);

        // await setDoc(doc(db, "diseases", letter), diseaseArr, {
        //   merge: true,
        // });
      })
    );
    // await setDoc(doc(db, "diseases", letter), diseaseArr, { merge: true });
    diseaseNames[letter] = diseaseArr;
  }

  await browser.close();
};

training();