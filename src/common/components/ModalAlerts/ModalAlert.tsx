import {selectError} from "app/app.selector";
import {appAction} from "app/app.slice";
import {useActions} from "common/hooks/useActions";
import React from 'react'
import { useSelector } from 'react-redux'
import { AlertProps, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ModalAlert = () => {

    const error = useSelector(selectError)
    const {setAppError} = useActions(appAction)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setAppError({error: null})
    }


    const isOpen = error !== null

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}