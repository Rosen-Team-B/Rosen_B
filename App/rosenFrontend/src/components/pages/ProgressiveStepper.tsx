import * as React from "react";
import Box, {BoxProps} from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import GeneralButton from "../shared/button/Button";
import {ListItem} from "@mui/material";
import {Button} from "@mui/material"
import {TextField} from "@mui/material"
import UploadButton from "../shared/uploadButton/UploadButton";
import PageHeader from "../shared/pageHeader/PageHeader";

const steps = [
    "Step 1: Video in Database",
    "Step 2: Video Parsing",
    "Step 3: Image Vectorizing",
    "Step 4: Upload the Reference",
];


const styles = {
    pageContainer: {
        margin: 0,
        padding: "2rem",

    },
    instructionBox: {
        height: "40vh",
        width: "60vw",
        margin: "2rem auto 1rem auto",
        padding: "2rem",
        backgroundColor: "#FAFAFA",
    },
    navButtons: {
        display: "flex",
        justifyContent: "space-between",
    },
    stepsContainer: {
        display: "flex",
        flexDirection: "column" as 'column',
        gap: "2rem",
    },
    redButtons: {
        alignSelf: "flex-end",
    }
};

const ProgressiveStepper = (props: any): React.ReactElement => {
    /** Local States  */
    const [activeStep, setActiveStep] = React.useState(0);

    /** Temp functions */
    function Item(props: BoxProps) {
        const {sx, ...other} = props;
        return (
            <Box
                sx={{
                    p: 1,
                    m: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "grey.100",
                    color: (theme) =>
                        theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                    border: "1px solid",
                    borderColor: (theme) =>
                        theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    ...sx,
                }}
                {...other}
            />
        );
    }

    /** Handle Functions */
    function nextButton() {
        activeStep < steps.length - 1
            ? setActiveStep(activeStep + 1)
            : setActiveStep(activeStep);
    }

    function backButton() {
        activeStep >= 0 ? setActiveStep(activeStep - 1) : setActiveStep(activeStep);
    }

    return (
        <div>
            <PageHeader/>
            <div style={styles.pageContainer}>
                <div>
                    <Box sx={{width: "100%"}}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </div>
                <div style={styles.instructionBox}>
                    {activeStep == 1 ? (
                            // <Box
                            //     sx={{
                            //         display: "flex",
                            //         justifyContent: "center",
                            //         p: 1,
                            //         m: 1,
                            //         bgcolor: "background.paper",
                            //         borderRadius: 1,
                            //     }}
                            // >
                            //     <Item>The video will now be parsed into images. Depending on the length of the video, this may take several minutes!
                            //         Click Next to continue.</Item>
                            // </Box>
                        <div style={styles.stepsContainer}>
                            <p>The video will now be parsed into images. Depending on the length of the video, this may take
                                several minutes!
                                Click Next to continue.</p>
                            {/*<GeneralButton></GeneralButton>*/}
                            <div style={styles.redButtons}>
                                <Button
                                    style={{
                                        background: "#C12323",
                                        padding: "0.8rem",
                                        color: "white",
                                    }}
                                >
                                    Parse the Video
                                </Button>
                            </div>
                        </div>

                        ) :
                        activeStep == 2 ? (
                                // <Box
                                //     sx={{
                                //         display: "flex",
                                //         justifyContent: "center",
                                //         p: 1,
                                //         m: 1,
                                //         bgcolor: "background.paper",
                                //         borderRadius: 1,
                                //     }}
                                // >
                                //     <Item>The images generated from Step 3 will now be converted to vectors so they can be
                                //         read by the machine learning algortihm. Depending on the number of images, this may
                                //         take upto several minutes! Click Next to Continue</Item>
                                // </Box>
                                <div style={styles.stepsContainer}>
                                    <p>The images generated from Step 3 will now be converted to vectors so they can be read
                                        by the machine learning algortihm. Depending on the number of images, this may take upto
                                        several minutes! Click Next to Continue</p>
                                    <div style={styles.redButtons}>
                                        <Button
                                            style={{
                                                background: "#C12323",
                                                padding: "0.8rem",
                                                color: "white",
                                            }}
                                        >
                                            Vectorize the Images
                                        </Button>
                                    </div>
                                </div>
                            ) :
                            activeStep == 3 ? (
                                    // <Box
                                    //     sx={{
                                    //         display: "flex",
                                    //         justifyContent: "left",
                                    //         p: 1,
                                    //         m: 1,
                                    //         bgcolor: "background.paper",
                                    //         borderRadius: 1,
                                    //     }}
                                    // >
                                    //     <Item>Upload a reference image. The algorithm will return a gallery of images that
                                    //         are similar to the reference image. If you would like the algorithm to detect
                                    //         all the fish in the pipeline, submit a picture of a fish! Supported formats are:
                                    //         ???</Item>
                                    //     <TextField
                                    //         required
                                    //         id="outlined-required"
                                    //         label="Required"
                                    //         defaultValue="label1"
                                    //     />
                                    //     <Button
                                    //         variant="contained"
                                    //         component="label"
                                    //         size="small"
                                    //     >
                                    //         Upload Image
                                    //         <input hidden accept="image/*" multiple type="file"/>
                                    //     </Button>
                                    //
                                    // </Box>
                                <div style={styles.stepsContainer}>
                                    <p>Upload a reference image. The algorithm will return a gallery of images that
                                        are similar to the reference image. If you would like the algorithm to detect
                                        all the fish in the pipeline, submit a picture of a fish! Supported formats are:
                                        ???</p>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Required"
                                            defaultValue="label1"
                                        />
                                    </div>
                                    <div>
                                        <UploadButton/>
                                    </div>
                                    <div style={styles.redButtons}>
                                        <Button
                                            style={{
                                                background: "#C12323",
                                                padding: "0.8rem",
                                                color: "white",
                                            }}
                                        >
                                            Submit Reference Pair
                                        </Button>
                                    </div>

                                </div>
                                ) :
                                (
                                    // <Box
                                    //     sx={{
                                    //         display: "flex",
                                    //         justifyContent: "center",
                                    //         p: 1,
                                    //         m: 1,
                                    //         bgcolor: "background.paper",
                                    //         borderRadius: 1,
                                    //     }}
                                    // >
                                    //     <Item>Confirm that the video exists in the database. Navigate to the Django
                                    //         Admin Page and ensure that the video is listed in “???” Supported formats
                                    //         are ???</Item>
                                    // </Box>

                                    <p>Confirm that the video exists in the database. Navigate to the Django
                                        Admin Page and ensure that the video is listed in “???” Supported formats
                                        are ???</p>
                                )
                    }
                </div>
                <div style={styles.navButtons}>
                    <GeneralButton
                        background="linear-gradient(10deg, #FE6A8B 60%, #FC8E53 90%)"
                        color="white"
                        onClick={() => backButton()}
                        padding="0 30px"
                        height="40px"
                        children="Back"
                    />
                    <GeneralButton
                        background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                        color="white"
                        onClick={() => nextButton()}
                        padding="0 30px"
                        height="40px"
                        children="Next"
                    />

                </div>
            </div>
        </div>
    );
};

export default ProgressiveStepper;
