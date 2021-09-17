import React, { Fragment, FunctionComponent, useState, useEffect } from "react";
import IInvoice from "./data/InvoiceData";

interface Iuser {
    id: string
    name: string
}

const Invoice = () => {
  const [data, setData] = useState<Iuser[]>([
      {
          id: '1',
          name: 'kemal'
      }
  ])
  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(data))    
  }, [])
  
  console.log(data)
  return <Fragment>
      
  </Fragment>;
};

export default Invoice;
