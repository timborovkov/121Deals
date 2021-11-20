import React from "react";
import { Paper, Image, Container } from '@mui/material';

export default function AddNew() {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    };
  }

  handleUpload = event => {
    this.setState({ selectedFile: event.target.files[0] });
  }

  sendUpload = upload => {

  }

  useEffect(() => {
    const request = {
      "client":{
        "cp_id":"5190047000022239771",
        "product_id":"737518067793724053",
        "client_id":"760855842877621056",
        "client_secret":"BDD68B77B8345508709D52C89740CE1D1A67BB27C07E9D33F8CB4627E7E193C1",
        "project_id":"737518067793724053",
        "app_id":"104974019",
        "api_key":"CwEAAAAASFIKNP7sIH7XojHEkc/pzoBR5JFaabwOJEeh06Sk8Fs3dsKKIXiBP81xc6X3BsgOjhJo3vdAEqkfPGZeH497scGXgT0=",
        "package_name":"com.huawei.junction21"
      },
    }

    
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'image/jpeg', 'Authorization': 'Bearer CwEAAAAASFIKNP7sIH7XojHEkc/pzoBR5JFaabwOJEeh06Sk8Fs3dsKKIXiBP81xc6X3BsgOjhJo3vdAEqkfPGZeH497scGXgT0=' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      <Container>

      </Container>
    </div>
  );
}
