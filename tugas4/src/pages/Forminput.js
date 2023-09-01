import React, { PureComponent } from "react";
import {
  Container,
  Col,
  Form,
  Alert,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const api = "http://localhost:3001";

class TambahComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tanggal: "",
      nama: "",
      buku: "",
      response: "",
      display: "none",
    };
  }

  Addbuku = () => {
    axios
      .post(api + "/tambahpinjam", {
        tanggal: this.state.tanggal_pinjam,
        nama: this.state.nama,
        buku: this.state.nama_buku,
      })
      .then((json) => {
        if (json.data.status === 200) {
          console.log(json.data.status);
          // alert
          this.setState({
            response: json.data.values,
            display: "block",
          });
        } else {
          // alert gagal
          debugger;
          this.props.history.push("/mahasiswa/tambah");
        }
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <h4>Masukan data mahasiswa</h4>
        <Alert color="success" style={{ display: this.state.display }}>
          {this.state.response}
        </Alert>
        <Form className="form">
          <Col>
            <Label for="tanggal">Tanggal Pinjam</Label>
            <FormGroup row>
              <Col>
                <Input
                  type="text"
                  name="tanggal_pinjam"
                  onChange={this.handleChange}
                  value={this.state.tanggal_pinjam}
                  placeholder="Masukkan tanggal pinjam"
                />
              </Col>
            </FormGroup>
            <Label for="nama">Nama</Label>
            <FormGroup row>
              <Col>
                <Input
                  type="text"
                  name="nama"
                  onChange={this.handleChange}
                  value={this.state.nama}
                  placeholder="Masukan Nama Peminjam"
                />
              </Col>
            </FormGroup>
            <Label for="buku">Judul buku</Label>
            <FormGroup row>
              <Col>
                <Input
                  type="text"
                  name="nama_buku"
                  onChange={this.handleChange}
                  value={this.state.nama_buku}
                  placeholder="Masukan judul buku yang dipinjam"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col>
                <button
                  type="button"
                  onClick={this.Addbuku}
                  className="btn btn-success"
                >
                  Submit
                </button>
              </Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default TambahComp;
