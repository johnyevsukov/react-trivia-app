import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../molecules/Button";
import { gameScreens } from "../Game/Game";
import { BooksIcon } from "../../atoms/icons/BooksIcon";
import { CameraIcon } from "../../atoms/icons/CameraIcon";
import { ControllerIcon } from "../../atoms/icons/ControllerIcon";
import { DiskIcon } from "../../atoms/icons/DiskIcon";
import { GlobeIcon } from "../../atoms/icons/GlobeIcon";
import { MusicIcon } from "../../atoms/icons/MusicIcon";
import { ShuffleIcon } from "../../atoms/icons/ShuffleIcon";
import { SoccerIcon } from "../../atoms/icons/SoccerIcon";
import { TriangleDownIcon } from "../../atoms/icons/TriangleDownIcon";
import { Text } from "../../atoms/Text";
import { selectStyles } from "./selectStyles";
import { VStack } from "../../atoms/VStack";
import { Card } from "../../atoms/Card";
import Select from "react-select";
import { Title } from "../../atoms/Title";
import { Wrapper } from "../../atoms/Wrapper";
import { FlexBox } from "../../atoms/Box";
import axios from "axios";
import * as yup from "yup";
import * as styles from "./styles";

interface HomeScreenProps {
  setGameStack: React.Dispatch<React.SetStateAction<gameScreens[]>>;
  initializeGameQuestions: any;
}
export const MainMenu: React.FC<HomeScreenProps> = ({
  setGameStack,
  initializeGameQuestions,
}) => {
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

  const difficulties = [
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
  const questions = [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
  ];
  const categories = [
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

  const categoryIconMap: any = {
    18: <DiskIcon />,
    15: <ControllerIcon />,
    23: <BooksIcon />,
    22: <GlobeIcon />,
    21: <SoccerIcon />,
    11: <CameraIcon />,
    12: <MusicIcon />,
    9: <ShuffleIcon />,
  };

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
        initializeGameQuestions(res.data.results);
        setGameStack((state) => [...state, "activeGame"]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectChange = (e: any, name: string) => {
    setFormValues({
      ...formValues,
      [name]: e.value,
    });
  };

  useEffect(() => {
    validationSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
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
                <styles.SelectLabel>Difficulty:</styles.SelectLabel>
                <Select
                  name="difficulty"
                  options={difficulties}
                  onChange={(e) => handleSelectChange(e, "difficulty")}
                  styles={selectStyles}
                />
              </VStack>
              <VStack $spacing={10}>
                <styles.SelectLabel>Category:</styles.SelectLabel>
                <Select
                  name="category"
                  options={categories}
                  onChange={(e) => handleSelectChange(e, "category")}
                  styles={selectStyles}
                />
              </VStack>
              <VStack $spacing={10}>
                <styles.SelectLabel>Questions:</styles.SelectLabel>
                <Select
                  name="questions"
                  options={questions}
                  onChange={(e) => handleSelectChange(e, "questions")}
                  styles={selectStyles}
                />
              </VStack>
              <FlexBox>
                <Button disabled={disabled} $variant="purple" type="submit">
                  Start
                </Button>
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
