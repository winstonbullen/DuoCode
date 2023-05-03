import * as React from 'react';
import {quiz} from "../api/quiz"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import {makeStyles} from "tss-react/mui";
import {useEffect, useState} from "react";

const useStyles = makeStyles()(theme => ({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[100],
        width: '200px'
    },
    buttonLabel: {
        padding: theme.spacing(1, 2),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        '&:last-of-type': {
            borderRight: 'none',
        },
        '&:hover': {
            backgroundColor: 'rgba(100,100,100,0.5)',
            color: theme.palette.common.white,
        },
    },
}));


const Multiplechoice = () => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState(' ');

    function shuffle(array: any[]) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const { questions }  = quiz
    const { prompt, correct_answer, distractors = [] } = questions[1];
    const allAnswers = [correct_answer]
    for (let i = 0; i < distractors.length; i++) {
        allAnswers.push(distractors[i])
    }
    const [totalAnswers, setAllAnswers] = React.useState(allAnswers)
    const randomizeAnswers = () => {
        const shuffledAnswers = [...allAnswers].sort(() => Math.random() - 0.5);
        setAllAnswers(shuffledAnswers);
    };
    useEffect(() => {
        randomizeAnswers();
    }, []);

    const handleRadioChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (value === correct_answer) {
            setHelperText("That is correct!")
        } else {
            setHelperText("Sorry, that is incorrect")
            setError(true);
        }
    };

    const { classes } = useStyles()

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 minHeight="20vh">
                <FormControl sx={{ m: 3}} error={error} variant="standard">
                    <FormLabel id="question-title">{prompt}</FormLabel>
                    <RadioGroup
                        className = {classes.buttonGroup}
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                    {totalAnswers.map((answer, index) => (
                        <FormControlLabel
                            className = {classes.buttonLabel}
                            key={index}
                            value={answer}
                            control={<Radio />}
                            label={answer}

                        />
                    ))}
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </form>
    );
}

export default Multiplechoice