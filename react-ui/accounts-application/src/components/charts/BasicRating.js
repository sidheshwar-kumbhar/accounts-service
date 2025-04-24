import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied 1',
    },
    2: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied 2',
    },
    3: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied 3',
    },
    4: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied 4',
    },
    5: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral 5',
    },
    6: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral 6',
    },
    7: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied 7',
    },
    8: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied 8',
    },
    9: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied 9',
    },
    10: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied 10',
    }
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};


function BasicRating({ spendingHabits }) {
    return (
        <div className="container">
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend" className="fw-bold mb-2">Spending habit : {spendingHabits}</Typography>
                <StyledRating
                    name="highlight-selected-only"
                    defaultValue={spendingHabits}
                    IconContainerComponent={IconContainer}
                    max={10}
                    getLabelText={(value) => customIcons[value].label}
                    readOnly
                />
            </Box>
        </div>
    );
}

export default BasicRating;