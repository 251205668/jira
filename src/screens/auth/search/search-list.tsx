/**
 * 因为后端不会直接返回personName,需要自己匹配
 * @param {*} param0
 * @returns
 */
import { project, User } from "constants/interface";
import React from "react";

interface SearchListProps {
  list: project[];
  users: User[];
}

export const SearchList = ({ list, users }: SearchListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* 这样写会出现undefined 需要兜底 加个? */}
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
