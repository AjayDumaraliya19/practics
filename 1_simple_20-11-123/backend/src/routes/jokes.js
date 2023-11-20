import express from "express";

/* ------------------------- Create router function ------------------------- */
const router = express.Router();

/* ------------------------------ Create routes ----------------------------- */
router.get("/joke", (req, res) => {
  const joke = [
    {
      id: 1,
      title:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title:
        "I told my wife she was drawing her eyebrows too high. She looked surprised. I said, ‘You’re a moron!’",
    },
    {
      ititled: 3,
      title:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "What do you call a bear with no teeth? A gummy bear!",
    },
    {
      id: 5,
      title: "What do you call an alligator in a vest? An investigator!",
    },
    {
      id: 6,
      title: "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 7,
      title: "What's orange and sounds like a parrot? A carrot!",
    },
    {
      id: 8,
      title: "Why couldn't the bicycle stand up by itself? It was two-tired!",
    },
    {
      id: 9,
      title: "Did you hear about the kidnapping at the park? They woke up!",
    },
  ];
  res.send(joke);
});

/* --------------------------- Exports all modules -------------------------- */
export default router;
