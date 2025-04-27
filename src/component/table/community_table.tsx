


export default function Community_table_Component({tableData}:any){
  return (
    <div>
        <table>
          {tableData.map((item,index)=>(
            <tr key={index}>
                <td>{item.title}</td>
                <td>{item.date}</td>
            </tr>
          ))}
        </table>
    </div>
  );
};