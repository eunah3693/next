


export default function Community_List_table_Component({tableData}:any){
  return (
    <div>
        <table className="w-full">
          {tableData.map((item,index)=>(
            <tr key={index} className="flex justify-between w-full py-2">
                <td className="flex-2">{item.subject}</td>
                <td className="flex-5">{item.title}</td>
                <td className="flex-2">{item.user}</td>
                <td className="flex-1">{item.date}</td>
            </tr>
          ))}
        </table>
    </div>
  );
};