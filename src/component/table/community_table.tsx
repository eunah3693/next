


export default function Community_table_Component({tableData}:any){
  return (
    <div>
        <table>
          {tableData.map((item,index)=>(
            <tr key={index} className="flex justify-between w-100 py-2">
                <td>{item.title}</td>
                <td>{item.date}</td>
            </tr>
          ))}
        </table>
    </div>
  );
};