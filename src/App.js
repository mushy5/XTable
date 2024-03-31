import {useState } from 'react';
import './App.css';

function Table({tableData}){
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
      </thead>
      <tbody>
       {tableData.map((dataObj)=>(
        <tr key={tableData.indexOf(dataObj)}>
            <td>{dataObj.date}</td>
            <td>{dataObj.views}</td>
            <td>{dataObj.article}</td>
        </tr>
       ))}
      </tbody>
    </table>
  )
}
function App() {

  const [tableData, setTableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },    
    { date: "2023-09-02", views: 120, article: "Article 3" },    
    { date: "2020-09-03", views: 200, article: "Article 4" }
]);

  const sortByDate = ()=>{

    let sortedTable = [...tableData].sort((a,b)=>{
      let second = b.date.split('-');
      let first = a.date.split('-');
      if(second[0] !== first[0])
        return second[0]-first[0];
      else if(second[1] !== first[1])
        return second[1] - first[1];
      else if(second[2] !== first[2])
        return second[2] - first[2];
      else  
        return b.views-a.views;
    });
    // const sortedTable = [...tableData].sort((a, b) => {
    //   const second = b.date.split('-').join('');
    //   const first = a.date.split('-').join('');
    //   return second.localeCompare(first) || b.views - a.views;
    // });
    setTableData(sortedTable);
  }

  const sortByViews = () => {
    const sortedTable = [...tableData].sort((a, b) => {
      // Sort by views in descending order
      if (b.views !== a.views) {
        return b.views - a.views;
      } else {
        // If views are the same, sort by date in descending order
        return new Date(b.date) - new Date(a.date);
      }
    });
    setTableData(sortedTable);
  };

  return (
    <div className="App">
     <h1>Date and Views Table</h1>
     <button type='button' onClick={sortByDate}>Sort by Date</button>
     <button type='button' onClick={sortByViews}>Sort by Views</button>
      <Table tableData={tableData}/>
    </div>
  );
}

export default App;
