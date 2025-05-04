interface ListTableData {
  subject: string;
  title: string;
  user: string;
  date: string;
}

interface CommunityListTableProps {
  tableData: ListTableData[];
}

export default function CommunityListTable({ tableData }: CommunityListTableProps) {
  return (
    <div className="w-full">
      <table className="w-full">
        <tbody>
          {tableData.map((item: ListTableData, index: number) => (
            <tr key={index} className="flex justify-between w-full py-2 border-b">
              <td className="flex-2">{item.subject}</td>
              <td className="flex-5">{item.title}</td>
              <td className="flex-2">{item.user}</td>
              <td className="flex-1 text-right">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
