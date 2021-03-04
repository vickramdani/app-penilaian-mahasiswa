import React from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { options, names } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";

function ContentTable({
  handleValuationOne,
  handleValuationTwo,
  handleValuationThree,
  handleValuationFour,
  addJSON,
}) {
  return (
    <div className="table-content">
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name) => (
            <tr key={name.value}>
              <td>
                <FontAwesomeIcon icon={faUserCircle} /> {name.name}
              </td>

              <td className="text-center">
                <select name={name.value} onChange={handleValuationOne}>
                  {options.map((option) => (
                    <option>{option.value}</option>
                  ))}
                </select>
              </td>

              <td className="text-center">
                <select name={name.value} onChange={handleValuationTwo}>
                  {options.map((option) => (
                    <option>{option.value}</option>
                  ))}
                </select>
              </td>

              <td className="text-center">
                <select name={name.value} onChange={handleValuationThree}>
                  {options.map((option) => (
                    <option>{option.value}</option>
                  ))}
                </select>
              </td>

              <td className="text-center">
                <select name={name.value} onChange={handleValuationFour}>
                  {options.map((option) => (
                    <option>{option.value}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form onSubmit={addJSON}>
        <Button variant="dark" type="submit">
          Simpan
        </Button>
        {/* <button type="submit">Simpan</button> */}
      </form>
    </div>
  );
}

export default ContentTable;
