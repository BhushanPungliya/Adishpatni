import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const data = [
  { name: "Jalan Residence", location: "Kolkata", gfa: "18990" },
  { name: "Chugh Villa", location: "Indore", gfa: "8500" },
  { name: "Lal Residence", location: "Bangalore", gfa: "9485" },
  { name: "AS Clubhouse", location: "Indore", gfa: "16800" },
  { name: "Talreja Residence", location: "Bhopal", gfa: "11200" },
  { name: "Siyal Residence", location: "Indore", gfa: "7200" },
  { name: "Payal Anand Home", location: "Coonoor", gfa: "8815" },
  { name: "Shukla Residence", location: "Bhopal", gfa: "" },
  { name: "Whitefield Residence", location: "Indore", gfa: "10800" },
  { name: "68 Residence", location: "Guwahati", gfa: "12350" },
  { name: "Mohanty Residence", location: "Indore", gfa: "9025" },
  { name: "Thard Residence", location: "Guwahati", gfa: "7700" },
  { name: "Anantara Homes", location: "Bhopal", gfa: "10 Acres" },
  { name: "Maloo Residence", location: "Indore", gfa: "16150" },
  { name: "Saket 320", location: "Indore", gfa: "7140" },
  { name: "Suresh & Latha", location: "Bangalore", gfa: "6525" },
  { name: "Pokharna", location: "Ahmednagar", gfa: "5350" },
  { name: "HM Farmhouse", location: "Bhopal", gfa: "7150" },
  { name: "Mehta Arera", location: "Bhopal", gfa: "8350" },
  { name: "Shantiniketan", location: "Indore", gfa: "8100" },
  { name: "S Talreja Residence", location: "Bhopal", gfa: "7400" },
  { name: "Villa One", location: "Pune", gfa: "8258" },
  { name: "Bora Residence", location: "Pune", gfa: "7821" },
  { name: "Shah Farmhouse", location: "Amby Valley", gfa: "6200" },
  { name: "Circle Of Tree", location: "Bangalore", gfa: "4720" },
  { name: " Kochi Bhima", location: "Ernakulam, Kochi", gfa: "18540" },
  { name: "Villa 34/60", location: "Coonoor", gfa: "7240" },
  { name: "Residence 101", location: "Indore", gfa: "9550" },
  { name: "Court House", location: "Pune", gfa: "16640" },
  { name: "Modular Housing", location: "Coonoor", gfa: "4 Acres" },
  { name: "Casa Milieu", location: "Coonoor", gfa: "24545" },
  { name: "JRK Gardenia", location: "Indore", gfa: "3.5 Acres" },
  { name: "Seven By M.S Dhoni", location: "Ranchi", gfa: "2400" },
  { name: "Morjim Auberge", location: "Goa", gfa: "" },
  { name: "Louvered SM2", location: "Indore", gfa: "3050" },
  { name: "Mandiram", location: "Bangalore", gfa: "1700" },
  { name: "7 RCR Residence", location: "Indore", gfa: "16250" },
  { name: "Honiton House", location: "Coonoor", gfa: "4180" },
  { name: "House Humane", location: "Competition", gfa: "6500" },
  { name: "Vibha Vastuki", location: "Competition", gfa: "28650" },
  { name: "Kapil Jain Home", location: "Bangalore", gfa: "5200" },
  { name: "Palrecha Home", location: "Bangalore", gfa: "3100" },
  { name: "Project Cafe", location: "Goa", gfa: "8000" },
  { name: "Embassy Eros", location: "Bangalore", gfa: "5600" },
  { name: "Wagle", location: "Indore", gfa: "18400" },
  { name: "Faceted Facade", location: "Indore", gfa: "6300" },
  { name: "Villa 64", location: "Coonoor", gfa: "6500" },
];

function ListPage() {
  const pathName = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="project-section">
        <div className="text-center">
          {/* <Link
            className={pathName.pathname === "/works" ? "active" : "header-item"}
            to="/works"
          >
            Gallery
          </Link> */}
          <div className="mt-4 project-container">
            <table className="table-container">
              <thead className="table-thead">
                <tr>
                  {["Address", "Location", "GFA-Sq.Ft"].map((h) => (
                    <th key={h} style={{ width: "50%" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="table-tbody">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td style={{ width: "50%", }}>{item?.name}</td>
                    <td style={{ width: "50%" }}>{item?.location}</td>
                    <td style={{ width: "50%" }}>{item?.gfa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mobile-list-table">
              {data.map((item, index) => (
                <div className="list-body" key={index}>
                  <p className="mobile-table-text">{item?.name}</p>
                  <p className="mobile-table-text">
                    {item?.location}
                  </p>
                  <p className="mobile-table-text">{item?.gfa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ListPage;
