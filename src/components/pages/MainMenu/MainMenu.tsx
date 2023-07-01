import React, { useCallback, useEffect, useState } from "react";
import { PaddingContainer } from "../../atoms/PaddingContainer";
import { Button } from "../../molecules/Button";
import { gameScreens } from "../Game/Game";
import axios from "axios";
import * as yup from "yup";
import * as styles from "./styles";

interface HomeScreenProps {
  setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>;
}
export const MainMenu: React.FC<HomeScreenProps> = ({ setGameStack }) => {
  const [formValues, setFormValues] = useState({
    difficulty: "",
    category: "",
    questions: "",
  });
  const [formErrors, setFormErrors] = useState({
    difficulty: "",
    category: "",
    questions: "",
  });
  const [disabled, setDisabled] = useState(true);

  const difficulties = ["easy", "medium", "hard", "mixed"];
  const questions = ["5", "10", "15", "20"];
  const categories = [
    {
      label: "Computer Science",
      value: "18",
    },
    {
      label: "Video Games",
      value: "15",
    },
    {
      label: "History",
      value: "23",
    },
    {
      label: "Geography",
      value: "22",
    },
    {
      label: "Sports",
      value: "21",
    },
    {
      label: "Film",
      value: "11",
    },
    {
      label: "Music",
      value: "12",
    },
    {
      label: "Mixed",
      value: "9",
    },
  ];

  const handleDifficulty = () => {
    if (formValues.difficulty === "mixed") {
      return;
    } else {
      return `&difficulty=${formValues.difficulty}`;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .get(
        `https://opentdb.com/api.php?amount=${formValues.questions}&category=${
          formValues.category
        }${handleDifficulty()}`
      )
      .then((res) => {
        // initializeGame(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    validationSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <styles.Wrapper>
      <PaddingContainer>
        <styles.MainMenuCard>
          <styles.Title>Settings</styles.Title>
          <styles.Form>
            <styles.SelectLabel>Difficulty:</styles.SelectLabel>
            <styles.Select
              name="difficulty"
              onChange={handleChange}
              value={formValues.difficulty}
            >
              <styles.SelectOption>Select</styles.SelectOption>
              {difficulties.map((d) => {
                return (
                  <styles.SelectOption key={d} value={d}>
                    {d.toUpperCase()}
                  </styles.SelectOption>
                );
              })}
            </styles.Select>
            <h3>Category:</h3>
            {categories.map((c) => {
              return (
                <styles.LabelRadioInputWrapper>
                  <styles.RadioInputLabel>{c.label}</styles.RadioInputLabel>
                  <styles.RadioInput
                    type="radio"
                    name="category"
                    value={c.value}
                    checked={formValues.category === c.value}
                    onChange={handleChange}
                  />
                </styles.LabelRadioInputWrapper>
              );
            })}
            <styles.SelectLabel>Questions:</styles.SelectLabel>
            <styles.Select
              name="questions"
              onChange={handleChange}
              value={formValues.questions}
            >
              <styles.SelectOption>Select</styles.SelectOption>
              {questions.map((q) => {
                return (
                  <styles.SelectOption key={q} value={q}>
                    {q.toUpperCase()}
                  </styles.SelectOption>
                );
              })}
            </styles.Select>

            <button disabled={disabled}>Start</button>
          </styles.Form>
        </styles.MainMenuCard>
      </PaddingContainer>
    </styles.Wrapper>
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
