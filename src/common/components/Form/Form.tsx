import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Paper,
    TextField
} from "@mui/material";
import s from "common/components/Form/Form.module.scss";
import {AuthDataType} from "features/auth/auth.API";
import React, {FC} from 'react';
import {useForm} from "react-hook-form";

type PropsType ={
    loginHandler: (data: AuthDataType) => void
    title: string
}

export const Form: FC <PropsType> = ({loginHandler, title}) => {

    const {register, handleSubmit, formState: {errors}} = useForm<AuthDataType>();

    const onSubmit = handleSubmit(data => {
        loginHandler(data)
    });

 return (
     <Grid container className={s.loginContainer}>
         <Grid>
             <Paper elevation={8}>
                 <form onSubmit={onSubmit} className={s.loginForm}>
                     <FormControl>
                         <FormLabel>
                             <h2>{title}</h2>
                             <p>
                                 To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                             target={'_blank'} rel="noreferrer">here</a>
                             </p>
                             <p>
                                 or use common test account credentials:
                             </p>
                             <p> Email: free@samuraijs.com
                             </p>
                             <p>
                                 Password: free
                             </p>
                         </FormLabel>
                         <FormGroup>
                             <TextField
                                 label="Email"
                                 margin="normal"
                                 {...register("email")}
                             />

                             <TextField
                                 type="password"
                                 label="Password"
                                 margin="normal"
                                 {...register("password")}
                             />

                             <FormControlLabel
                                 label={'Remember me'}
                                 control={<Checkbox
                                     {...register("rememberMe")}
                                 />}
                             />
                             <Button type={'submit'}
                                     variant={'contained'}
                                     color={'primary'}>
                                 Login
                             </Button>
                         </FormGroup>
                     </FormControl>
                 </form>
             </Paper>
         </Grid>
     </Grid>
 );
};