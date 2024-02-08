import React from "react";
import TableWrapper from "./style";

interface DataType {
  key: string;
  name: string;
  cate: string;
  score: number;
}

const DataTab = () => {
  const dataSource: DataType[] = [
    {
      key: "1",
      name: "胡彦斌",
      cate: "管理组",
      score: 77,
    },
    {
      key: "2",
      name: "胡彦祖",
      cate: "前端组",
      score: 88,
    },
    {
      key: "3",
      name: "胡彦祖",
      cate: "前端组",
      score: 88,
    },
    {
      key: "4",
      name: "胡彦祖",
      cate: "前端组",
      score: 88,
    },
  ];

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>组别</th>
            <th>考核分数</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={item.key}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.cate}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default DataTab;
