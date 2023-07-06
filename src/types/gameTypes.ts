export type gameScreenType =
  | "homeScreen"
  | "mainMenuScreen"
  | "activeGameScreen"
  | "scoreScreen";

export type categoryValueType =
  | "18"
  | "15"
  | "23"
  | "22"
  | "21"
  | "11"
  | "12"
  | "9";

export type categoryLabelType =
  | "Computer Science"
  | "Video Games"
  | "History"
  | "Geography"
  | "Sports"
  | "Film"
  | "Music"
  | "Mixed";

export type categoryChoiceType = {
  value: categoryValueType;
  label: categoryLabelType;
};

export type difficultyValueType = "easy" | "medium" | "hard" | "mixed";

export type difficultyLabelType = "Easy" | "Medium" | "Hard" | "Mixed";

export type difficultyChoiceType = {
  value: difficultyValueType;
  label: difficultyLabelType;
};

export type questionsType = "5" | "10" | "15" | "20";

export type questionsChoiceType = {
  value: questionsType;
  label: questionsType;
};

export type scoreType = "correct" | "incorrect";

export type apiQuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type gameQuestionType = {
  question: string;
  correct: string;
  choices: string[];
};
