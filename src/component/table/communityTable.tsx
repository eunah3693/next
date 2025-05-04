interface TableData {
  title: string;
  date: string;
}

interface CommunityTableProps {
  tableData: TableData[];
}

export default function CommunityTable({ tableData }: CommunityTableProps) {
  return (
    <div className="w-full">
      <table className="w-full">
        <tbody>
          {tableData.map((item: TableData, index: number) => (
            <tr key={index} className="flex justify-between w-full py-2 border-b">
              <td className="flex-1">{item.title}</td>
              <td className="flex-1 text-right">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

