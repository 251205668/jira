/**
 * 没有状态提升会有一个问题，panel组件承担了请求的责任，数据也在这里获取，search-list组件获取数据必须要通过panel组件分享，解决办法就是把param和请求交给父组件,users也需要交给父组件
 *
 */
import React from "react";
export interface User {
  id: number;
  name: string;
}
export interface param {
  name: string;
  personId: string;
}
interface SearchPanelProps {
  users: User[];
  param: param;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(event) => setParam({ ...param, name: event.target.value })}
      />
      <select
        value={param.personId}
        onChange={(event) =>
          setParam({ ...param, personId: event.target.value })
        }
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
