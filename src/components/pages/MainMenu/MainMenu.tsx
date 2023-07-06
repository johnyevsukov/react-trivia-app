import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { selectStyles } from "./selectStyles";

import { Button } from "../../molecules/Button";
import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import { Title } from "../../atoms/Title";
import { Wrapper } from "../../atoms/Wrapper";
import { FlexBox } from "../../atoms/Box";

import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";
import clickSfx from "../../../sounds/click.mp3";
import startSfx from "../../../sounds/start.mp3";

import { gameScreenType } from "../../../types/gameTypes";
import { categoryChoiceType } from "../../../types/gameTypes";
import { difficultyChoiceType } from "../../../types/gameTypes";
import { questionsChoiceType } from "../../../types/gameTypes";
import { apiQuestionType } from "../../../types/gameTypes";

import axios from "axios";
import * as yup from "yup";
import * as styles from "./styles";

const difficulties: difficultyChoiceType[] = [
  {
    value: "easy",
    label: "Easy",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "hard",
    label: "Hard",
  },
  {
    value: "mixed",
    label: "Mixed",
  },
];
const questions: questionsChoiceType[] = [
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "15", value: "15" },
  { label: "20", value: "20" },
];
const categories: categoryChoiceType[] = [
  {
    value: "18",
    label: "Computer Science",
  },
  {
    value: "15",
    label: "Video Games",
  },
  {
    value: "23",
    label: "History",
  },
  {
    value: "22",
    label: "Geography",
  },
  {
    value: "21",
    label: "Sports",
  },
  {
    value: "11",
    label: "Film",
  },
  {
    value: "12",
    label: "Music",
  },
  {
    value: "9",
    label: "Mixed",
  },
];

interface MainMenuProps {
  handleNextScreen: (screen: gameScreenType) => void;
  initializeGameQuestions: (questions: apiQuestionType[]) => void;
}
export const MainMenu: React.FC<MainMenuProps> = ({
  handleNextScreen,
  initializeGameQuestions,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [click] = useSound<PlayFunction>(clickSfx);
  const [start] = useSound<PlayFunction>(startSfx);

  const [formValues, setFormValues] = useState({
    difficulty: "",
    category: "",
    questions: [],
  });

  const handleDifficulty = useCallback(() => {
    if (formValues.difficulty === "mixed") {
      return "";
    } else {
      return `&difficulty=${formValues.difficulty}`;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    start();
    setIsLoading(true);
    axios
      .get(
        `https://opentdb.com/api.php?amount=${formValues.questions}&category=${
          formValues.category
        }${handleDifficulty()}`
      )
      .then((res) => {
        initializeGameQuestions(res.data.results);
        handleNextScreen("activeGameScreen");
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
      });
  };

  const handleSelectChange = (
    e: any,
    name: "difficulty" | "category" | "questions"
  ) => {
    click();
    setFormValues({
      ...formValues,
      [name]: e.value,
    });
  };

  useEffect(() => {
    validationSchema.isValid(formValues).then((valid) => {
      setIsDisabled(!valid);
    });
  }, [formValues]);

  return (
    <Wrapper>
      <Card>
        <VStack $spacing={32} $spacingMobile={24}>
          <Title>Settings</Title>
          <styles.Form onSubmit={handleSubmit}>
            <VStack $spacing={24} $spacingMobile={16}>
              <VStack $spacing={10}>
                <styles.SelectLabel as="label" htmlFor="difficulty">
                  Difficulty:
                </styles.SelectLabel>
                <Select
                  name="difficulty"
                  options={difficulties}
                  onChange={(e) => handleSelectChange(e, "difficulty")}
                  styles={selectStyles}
                  isSearchable={false}
                />
              </VStack>
              <VStack $spacing={10}>
                <styles.SelectLabel as="label" htmlFor="category">
                  Category:
                </styles.SelectLabel>
                <Select
                  name="category"
                  options={categories}
                  onChange={(e) => handleSelectChange(e, "category")}
                  styles={selectStyles}
                  isSearchable={false}
                />
              </VStack>
              <VStack $spacing={10}>
                <styles.SelectLabel as="label" htmlFor="questions">
                  Questions:
                </styles.SelectLabel>
                <Select
                  name="questions"
                  options={questions}
                  onChange={(e) => handleSelectChange(e, "questions")}
                  styles={selectStyles}
                  isSearchable={false}
                />
              </VStack>
              <FlexBox>
                {isLoading ? (
                  <>loading</>
                ) : (
                  <Button disabled={isDisabled} $variant="purple" type="submit">
                    Start
                  </Button>
                )}
              </FlexBox>
            </VStack>
          </styles.Form>
        </VStack>
      </Card>
    </Wrapper>
  );
};

const validationSchema = yup.object().shape({
  difficulty: yup
    .string()
    .oneOf(["easy", "medium", "hard", "mixed"], "Difficulty is required."),
  category: yup
    .string()
    .oneOf(
      ["23", "22", "21", "12", "11", "9", "15", "18"],
      "Category is required."
    ),
  questions: yup
    .string()
    .oneOf(["5", "10", "15", "20"], "Question number is required."),
});
