import React, { memo } from "react";

function Header() {
  console.log("header rerender");
  return (
    <div>
      <h1 className="header">Aplikasi Penilaian Mahasiswa</h1>
    </div>
  );
}

export default memo(Header);
