import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Breadcrumb(props: { num: any[]; cnum: number; addMsg: string }) {
    const items = props.num.map((n,index) =>{
        if(index+1==props.cnum){
            return(
                <Link underline="hover" color="inherit" href="/">
                {n} : {props.addMsg}
              </Link>   
            )
        }
        else{
            return(<Link underline="hover" color="inherit" href="/">
            {n}
          </Link>  )
        }
    }          
    );
    return (
        <Breadcrumbs aria-label="breadcrumb"  separator=">" color = "white">
        {items}
        </Breadcrumbs>
    );
  }

  export default Breadcrumb