import React, { Component } from "react";
import { Table, Button, Container, NavLink, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "querystring";

const api = "http://localhost:3001";

class ListPinjaman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinjaman: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api + "/tampilpinjam").then((res) => {
      console.log(res.data.values);
      this.setState({
        pinjaman: res.data.values,
      });
    });
  }

  render() {
    return (
      <Container>
        <hr />
        <h2>Daftar Peminjaman Buku</h2>
        <hr />
        <Table className="table-bordered">
          <thead>
            <tr>
              <th>Tanggal Pinjam</th>
              <th>Nama Peminjam</th>
              <th>Nama Buku</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pinjaman.map((pinjaman) => (
              <tr key={pinjaman.id}>
                <td>{pinjaman.tanggal_pinjam}</td>
                <td>{pinjaman.nama}</td>
                <td>{pinjaman.nama_buku}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ListPinjaman;
