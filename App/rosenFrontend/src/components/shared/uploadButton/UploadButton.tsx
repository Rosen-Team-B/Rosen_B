import * as React from 'react';
import Button from '@mui/material/Button';

const UploadButton = () => {
    return (
    <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
    </Button>
    );
};

export default UploadButton;