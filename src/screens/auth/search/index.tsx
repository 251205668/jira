import { SearchList } from "./search-list";
import { SearchPanel } from "./search-panel";
import React, { useEffect, useState } from "react";
import { cleanObject } from "utils/params";
import { useDebounceParam } from "Hooks";
import { param, project, User } from "constants/interface";
import { useRequest } from "Hooks/request";
export const Search = () => {
  // 表格渲染数据
  const [list, setList] = useState<project[]>([]);
  // 参数: name,id
  const [param, setParam] = useState<param>({
    name: "",
    personId: "",
  });
  // 选项 users 列表
  const [users, setUsers] = useState<User[]>([]);

  const deBounceParam = useDebounceParam(param, 500);
  const client = useRequest();

  // useEffect 必选传入监听值，不需要监听时传入[],否则会一直调用
  // 请求查询 需要做防抖和拆解参数 并且需要delete value为空的情况
  useEffect(() => {
    client("projects", { data: cleanObject(deBounceParam) }).then(setList);
  }, [deBounceParam]);

  useEffect(() => {
    client("users").then(setUsers);
  }, []);
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <SearchList users={users} list={list}></SearchList>
    </div>
  );
};
